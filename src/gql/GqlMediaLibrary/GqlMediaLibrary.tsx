import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { DocumentNode } from "graphql";
import clx from "classnames";
import { Loader } from "../../core/Loader/Loader";
import { useMediaLibraryStyles } from "./styles";
import { Image, GqlMediaLibraryProps, ImageUpdate } from "./types";
import { EditMedia, DeleteMedia } from "./components";
import {
  fetchData,
  mutateMedia,
  getUniqueImages,
  useFileSelect,
  useOnScroll,
  useDisplayImages,
  useUpdateMediaLibrary,
  useMediaUpload,
} from "./hooks";
import { FaTimes } from "react-icons/fa";
import { Search } from "@mui/icons-material";
import { TextInput } from "../../io";
import { Dialogue } from "core/Dialogue/Dialogue";

export const GqlMediaLibrary: FC<GqlMediaLibraryProps> = ({
  className,
  config: {
    client,
    query: { name: query, variables: queryVariables },
    upload,
    update,
    remove,
    viewOnly = false,
  },
  onChange,
  name,
}) => {
  const refs = { fileRef: useRef<any>(), listInnerRef: useRef<any>() };
  const handleFileSelect = useFileSelect();
  const handleOnScroll = useOnScroll();
  const handleDisplayImages = useDisplayImages();
  const handleMediaUpload = useMediaUpload();
  const handleUpdateMediaLibrary = useUpdateMediaLibrary();
  const classes = useMediaLibraryStyles();
  const [images, setImages] = useState<Image[]>([]);
  const [paginatorInfo, setPaginatorInfo] = useState<{
    [key: string]: number;
  }>({ currentPage: 1, lastPage: 1 });
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({
    media: false,
    mutate: false,
  });
  const [activeMedia, setActiveMedia] = useState<{
    index?: number;
    type: string;
    media?: Image | File;
  }>({ type: "" });
  const [open, setOpen] = useState(false);
  const [displayFilteredImages, setDisplayFilteredImages] = useState(images);

  useEffect(() => {
    setLoading({ ...loading, media: true });
    fetchData(client, query, { ...queryVariables })
      .then((res) => {
        setLoading({ ...loading, media: false });
        setImages((images) =>
          getUniqueImages([...images, ...(res.data.images.images as Image[])]),
        );
        setPaginatorInfo(res.data.images.paginatorInfo);
      })
      .catch(() => {
        setLoading({ ...loading, media: false });
      });
  }, []);

  useEffect(() => {
    if (activeMedia.index && activeMedia.index > 0) {
      const { currentPage, lastPage } = paginatorInfo;
      if (currentPage !== lastPage) {
        setLoading({ ...loading, media: true });
        fetchData(client, query, {
          page: currentPage + 1,
          count: queryVariables.count,
        }).then((res) => {
          setImages((images) =>
            getUniqueImages([
              ...images,
              ...(res.data.images.images as Image[]),
            ]),
          );
          setLoading({ ...loading, media: false });
          setPaginatorInfo(res.data.images.paginatorInfo);
        });
      }
    }
  }, [activeMedia.index]);

  const updateMediaLibrary = useCallback(
    (image: Image, type = "add", variables?: ImageUpdate) => {
      handleUpdateMediaLibrary(
        image,
        images,
        setImages,
        (index: number) => {
          setActiveMedia({ ...activeMedia, index });
        },
        type,
        variables,
      );
      handleMediaAction("", undefined);
    },
    [images, activeMedia],
  );

  const handleFileChange = (event: React.ChangeEvent<any>) => {
    if (!event.target.files || event.target.files === 0) return;
    const file = event.target.files[0];
    handleMediaAction("add", file);
  };

  const handleMediaAction = (type: string, media?: Image | File) => {
    if (type === "add" || type === "edit") {
      const { listInnerRef } = refs;
      if (listInnerRef.current) listInnerRef.current.scrollTop = 0;
    }

    setActiveMedia({ type, media });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    if (search === " ") {
      images;
    }
    const filteredResult = images.filter((image) =>
      image.title?.toLowerCase().includes(search.toLowerCase()),
    );
    setDisplayFilteredImages(filteredResult);
  };

  const handleMediaAdd = useCallback(
    async (variables: ImageUpdate) => {
      await handleMediaUpload(
        client,
        upload?.name,
        { ...variables, image: activeMedia.media as File },
        setLoading,
        (image: Image) => {
          updateMediaLibrary(image, "add");
        },
      );
    },
    [activeMedia, loading],
  );

  const handleMediaUpdate = useCallback(
    async (variables: ImageUpdate) => {
      if (!variables.id) {
        return handleMediaAdd({ ...variables });
      }
      const media = activeMedia.media as Image;
      setLoading({ ...loading, mutate: true });
      await mutateMedia(
        client,
        update?.name as DocumentNode,
        media,
        () => {
          updateMediaLibrary(media, "update", variables);
        },
        variables,
      );
      setLoading({ ...loading, mutate: false });
    },
    [activeMedia],
  );

  const handleMediaDelete = useCallback(async () => {
    const media = activeMedia.media as Image;
    setLoading({ ...loading, mutate: true });
    await mutateMedia(client, remove?.name as DocumentNode, media, () => {
      updateMediaLibrary(media, "delete");
      handleMediaAction("", undefined);
    });
    setLoading({ ...loading, mutate: false });
  }, [activeMedia, loading]);

  const handleFile = () => {
    handleFileSelect(refs.fileRef);
    setOpen(false);
  };

  return (
    <div
      className={clx(classes.wrapper, viewOnly && classes.wrapperDialog)}
      ref={refs.listInnerRef}
      onScroll={() => {
        handleOnScroll(refs.listInnerRef, (index: number) => {
          setActiveMedia({ ...activeMedia, index });
        });
      }}
    >
      <div className={clx(classes.root, className)}>
        <input
          name="image_url"
          accept="image/*"
          hidden
          type="file"
          ref={refs.fileRef}
          onChange={handleFileChange}
        />
        <div className={classes.actions}>
          {viewOnly ? (
            <>
              <p>Media Library</p>
              <FaTimes className={classes.timesIcon} />
            </>
          ) : (
            <>
              <p className={classes.tab}>All Media</p>
              <Dialogue
                handleFilesSelection={handleFile}
                open={open}
                setOpen={setOpen}
              />
            </>
          )}
        </div>
        <div>
          <div className={classes.searchContainer}>
            <TextInput
              name="search"
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
              className={classes.search}
            />
            <Search className={classes.searchIcon} />
          </div>
        </div>
        <div className={classes.collection}>
          {images.length === 0 && loading.media ? (
            <Loader />
          ) : (
            <>
              {(activeMedia.type === "add" || activeMedia.type === "edit") && (
                <EditMedia
                  loading={loading.mutate}
                  handleEdit={(variables: ImageUpdate) => {
                    handleMediaUpdate(variables);
                  }}
                  handleClose={() => {
                    handleMediaAction("", undefined);
                  }}
                  image={activeMedia.media as Image | File}
                />
              )}
              {images &&
                handleDisplayImages(
                  displayFilteredImages.length ? displayFilteredImages : images,
                  (image: Image) => {
                    onChange?.({ name: name ?? "", value: image });
                  },
                  handleMediaAction,
                  viewOnly,
                )}
            </>
          )}
        </div>
        {images.length > 0 && loading.media && (
          <div className={classes.loaderParent}>
            <Loader className={classes.loader} />
          </div>
        )}
      </div>
      <DeleteMedia
        display={activeMedia.type === "delete"}
        loading={loading.mutate}
        media={activeMedia.media as Image}
        handleClose={() => {
          handleMediaAction("", undefined);
        }}
        handleDelete={handleMediaDelete}
      />
    </div>
  );
};
