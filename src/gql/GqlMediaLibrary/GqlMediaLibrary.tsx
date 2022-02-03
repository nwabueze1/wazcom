import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Grow } from "@mui/material";
import clx from "classnames";
import { Button } from "../../core/Button";
import { last } from "lodash";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Loader } from "../../core/Loader/Loader";
import { useMediaLibraryStyles } from "./styles";
import { ImageDataType, GqlMediaLibraryProps } from "./types";
import { Uploader } from "./Uploader";

const split = (array: any[], count: number) => {
  const collection: any[][] = [];

  array.map((item, index) => {
    const row = collection[index % count] ?? [];
    collection[index % count] = [...row, item];
  });

  return collection;
};

export const GqlMediaLibrary: FC<GqlMediaLibraryProps> = ({
  className,
  config: {
    client,
    query: { name: query, variables: queryVariables },
    upload,
  },
  refetch,
  onImageSelect,
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
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const fetchData = async (variables?: { [key: string]: string | number }) => {
    return await client.query({
      query,
      fetchPolicy: "network-only",
      variables,
    });
  };

  useEffect(() => {
    fetchData({ ...queryVariables })
      .then((res) => {
        setLoading(false);
        if (!images) {
          setImages(res.data?.images.images);
        } else {
          setImages([...images, ...res.data?.images.images]);
        }
        setPaginatorInfo(res.data.images.paginatorInfo);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (refetch && refetch > 0) {
      const { currentPage, lastPage } = paginatorInfo;
      if (currentPage !== lastPage) {
        setImageLoading(true);
        fetchData({ page: currentPage + 1, count: 9 }).then((res) => {
          setImages((images) => [...images, ...res.data.images.images]);
          setImageLoading(false);
          setPaginatorInfo(res.data.images.paginatorInfo);
        });
      }
    }
  }, [refetch]);

  const selectImage = (data: ImageDataType) => {
    onChange?.({ name: name ?? "image", value: data });
    onImageSelect(data);
  };

  const updateMediaLibrary = (image: ImageDataType) => {
    setImages((images) => [image, ...images]);
  };

  const handleFileSelect = useCallback(() => {
    const fileInput = fileRef.current;
    if (fileInput) {
      fileInput.click();
    }
  }, []);

  return (
    <div className={clx(classes.root, className)}>
      <div className={classes.library}>
        <Uploader
          ref={fileRef}
          config={{ client, ...upload }}
          setLoading={setLoading}
          updateMediaLibrary={updateMediaLibrary}
        />
        <div className={classes.actions}>
          <Button
            color="primary"
            startIcon={<IoCloudUploadOutline />}
            onClick={handleFileSelect}
          >
            Upload Image
          </Button>
        </div>
        <div className={classes.collection}>
          {images.length === 0 || loading ? (
            <Loader />
          ) : (
            <>
              {images &&
                split(images, 3).map((_, columnIndex) => {
                  return (
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
                            </div>
                          </Grow>
                        );
                      })}
                    </div>
                  );
                })}
            </>
          )}
        </div>
        {images.length > 0 && imageLoading && (
          <div className={classes.loaderParent}>
            <Loader className={classes.loader} />
          </div>
        )}
      </div>
    </div>
  );
};
