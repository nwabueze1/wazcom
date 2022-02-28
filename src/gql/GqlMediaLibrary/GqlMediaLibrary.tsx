import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Grow } from "@mui/material";
import clx from "classnames";
import { Button } from "../../core/Button";
import { Loader } from "../../core/Loader/Loader";
import { useMediaLibraryStyles } from "./styles";
import { ImageDataType, GqlMediaLibraryProps } from "./types";
import { Uploader } from "./Uploader";
import { DeleteMedia } from "./components";
import { FaPencilAlt } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { split, fetchData, deleteMedia } from "./utilities";
import { DocumentNode } from "graphql";

export const GqlMediaLibrary: FC<GqlMediaLibraryProps> = ({
  className,
  config: {
    client,
    query: { name: query, variables: queryVariables },
    upload,
    remove,
  },
  onChange,
  name,
}) => {
  const fileRef = useRef<any>();
  const classes = useMediaLibraryStyles();
  const [images, setImages] = useState<ImageDataType[]>([]);
  const [paginatorInfo, setPaginatorInfo] = useState<{
    [key: string]: number;
  }>({ currentPage: 1, lastPage: 1 });
  const [loading, setLoading] = useState<boolean>(true);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const listInnerRef = useRef<HTMLDivElement>(null);
  const [mediaIndex, setMediaIndex] = useState<number>(0);
  const [activeMedia, setActiveMedia] = useState<{
    type: string;
    media?: ImageDataType;
  }>({ type: "" });

  useEffect(() => {
    fetchData(client, query, { ...queryVariables })
      .then((res) => {
        setLoading(false);
        if (!images) {
          setImages(res.data?.images.images);
        } else {
          setImages([...images, ...res.data?.images.images]);
        }
        setPaginatorInfo(res.data.images.paginatorInfo);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (mediaIndex && mediaIndex > 0) {
      const { currentPage, lastPage } = paginatorInfo;
      if (currentPage !== lastPage) {
        setImageLoading(true);
        fetchData(client, query, {
          page: currentPage + 1,
          count: queryVariables.count,
        }).then((res) => {
          setImages((images) => [...images, ...res.data.images.images]);
          setImageLoading(false);
          setPaginatorInfo(res.data.images.paginatorInfo);
        });
      }
    }
  }, [mediaIndex]);

  const selectImage = (data: ImageDataType) => {
    onChange?.({ name: name ?? "image", value: data });
  };

  const updateMediaLibrary = useCallback((image: ImageDataType, type = "add") => {
    let newImages: ImageDataType[];
    console.log(images);

    switch (type) {
      case "add":
        newImages = [image, ...images];
        break;
      case "delete":
        newImages = images.filter(
          (img) => img.id.toString() !== image.id.toString(),
        );
        break;
      default:
        newImages = images;
    }
    console.log(newImages);
    setImages(newImages);
    handleMediaAction('', undefined);
  }, [images]);

  const handleFileSelect = useCallback(() => {
    const fileInput = fileRef.current;
    if (fileInput) {
      fileInput.click();
    }
  }, []);

  const handleMediaAction = (type: string, media?: ImageDataType) => {
    setActiveMedia({ type, media });
  };

  const handleMediaDelete = useCallback(async () => {
    const media = activeMedia.media as ImageDataType;
    await deleteMedia(client, remove?.name as DocumentNode, media, () => {
      updateMediaLibrary(media, "delete");
    });
  }, [activeMedia]);

  const onScroll = useCallback(() => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight && scrollHeight > 550) {
        setMediaIndex(Math.random() * 5000);
      }
    }
  }, [mediaIndex]);

  const displayImages = useCallback(
    () =>
      split(images, 3).map((_, columnIndex) => (
        <div key={columnIndex} className={classes.column}>
          {_.map((theImage, index) => {
            return (
              <Grow in={true} key={index}>
                <div className={classes.thumbnail}>
                  <img
                    onClick={() => selectImage(theImage)}
                    src={theImage?.url}
                    className={classes.image}
                  />
                  <div className={classes.thumbnailOverlay}>
                    <div className={classes.thumbnailActions}>
                      <p className={classes.thumbnailAction}>
                        <FaPencilAlt
                          onClick={() => {
                            handleMediaAction("edit", theImage);
                          }}
                          className={classes.thumbnailActionIcon}
                        />
                      </p>
                      <p className={classes.thumbnailAction}>
                        <IoMdTrash
                          onClick={() => {
                            handleMediaAction("delete", theImage);
                          }}
                          className={classes.thumbnailActionIcon}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </Grow>
            );
          })}
        </div>
      )),
    [images],
  );

  return (
    <div
      className={classes.wrapper}
      ref={listInnerRef}
      onScroll={() => {
        onScroll();
      }}
    >
      <div className={clx(classes.root, className)}>
        <Uploader
          ref={fileRef}
          config={{ client, ...upload }}
          setLoading={setLoading}
          updateMediaLibrary={updateMediaLibrary}
        />
        <div className={classes.actions}>
          <p className={classes.tab}>All Media</p>
          <Button color="primary" onClick={handleFileSelect}>
            Add New
          </Button>
        </div>
        <div className={classes.collection}>
          {images.length === 0 || loading ? (
            <Loader />
          ) : (
            <>{images && displayImages()}</>
          )}
        </div>
        {images.length > 0 && imageLoading && (
          <div className={classes.loaderParent}>
            <Loader className={classes.loader} />
          </div>
        )}
      </div>
      <DeleteMedia
        display={activeMedia.type === "delete"}
        media={activeMedia.media}
        handleClose={() => {
          handleMediaAction("", undefined);
        }}
        handleDelete={handleMediaDelete}
      />
    </div>
  );
};
