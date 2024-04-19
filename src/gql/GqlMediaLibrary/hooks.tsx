import React, { useState } from "react";
import { ApolloClient, ApolloError, DocumentNode, NormalizedCacheObject } from "@apollo/client";
import { Grow, Skeleton } from "@mui/material";
import { useMediaLibraryStyles } from "./styles";
import { Image, ImageUpdate } from "./types";
import { FaPencilAlt } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import clx from "classnames";
import { errorHandler } from "../../helpers";
import { AddMedia } from "./components/AddMedia/AddMedia";
import { splashData } from "./splashData";
import { MediaSplashScreen } from "../../core";

export const useDisplayImages = () => {
  const classes = useMediaLibraryStyles();
  const [loaded, setLoaded] = useState<number[]>([]);

  return (
    images: Image[],
    selectImage: (image: Image) => void,
    handleMediaAction: (type: string, media?: Image) => void,
    showOptions: boolean,
    activeLayout: number,
  ) =>
    split(images, activeLayout + 2).map((_, columnIndex) => {
      return (
        <div
          key={columnIndex}
          className={clx(
            classes.column,
            activeLayout === 0 && classes.twoColumn,
            activeLayout === 2 && classes.fourColumn,
          )}
        >
          {_.map((theImage, index) => {
            const handleMediaActions = (
              e: React.MouseEvent<HTMLElement>,
              type: string,
              theImage: any,
            ) => {
              e.stopPropagation();
              handleMediaAction(type, theImage);
            };
            return (
              <Grow in={true} key={index}>
                <div
                  onClick={() => {
                    selectImage?.(theImage);
                  }}
                  className={clx(classes.thumbnail)}
                >
                  <img
                    src={theImage?.url}
                    className={classes.image}
                    onLoad={() => setLoaded((prev) => [...prev, theImage.uuid])}
                  />
                  {!loaded.some((uuid) => uuid === theImage.uuid) && (
                    <Skeleton
                      className={classes.image}
                      animation="wave"
                      variant="rectangular"
                      height="240px"
                    />
                  )}
                  {showOptions && (
                    <div className={classes.thumbnailOverlay}>
                      <div className={classes.thumbnailActions}>
                        <p
                          onClick={(e) => handleMediaActions(e, "edit", theImage)}
                          className={classes.thumbnailAction}
                        >
                          <FaPencilAlt className={classes.thumbnailActionIcon} />
                        </p>
                        <p
                          onClick={(e) => handleMediaActions(e, "delete", theImage)}
                          className={classes.thumbnailAction}
                        >
                          <IoMdTrash className={classes.thumbnailActionIcon} />
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Grow>
            );
          })}
        </div>
      );
    });
};

export const useFileSelect = () => {
  return (fileRef: React.MutableRefObject<any>) => {
    const fileInput = fileRef.current;
    if (fileInput) {
      fileInput.click();
    }
  };
};

export const useMediaUpload = () => {
  return async (
    client: ApolloClient<NormalizedCacheObject>,
    mutation: DocumentNode,
    variables: ImageUpdate & { image: File; library_uuid: string },
    setLoading: (loading: { [key: string]: boolean }) => void,
    updateMediaLibrary: (image: Image) => void,
  ) => {
    setLoading({ loading: true, mutate: true });
    try {
      const response = await client.mutate({
        mutation,
        variables: {
          ...variables,
        },
      });
      if (response?.data?.uploadImage) {
        updateMediaLibrary(response?.data?.uploadImage);
      }
    } catch (error) {
      errorHandler(error as ApolloError);
    } finally {
      setLoading({ loading: false, mutate: false });
    }
  };
};

export const useUpdateMediaLibrary = () => {
  return (
    image: Image,
    images: Image[],
    setImages: (images: Image[]) => void,
    setMediaIndex: (index: number) => void,
    type = "add",
    update?: Pick<Image, "title" | "alternative_text" | "caption">,
  ) => {
    let newImages: Image[], index: number;
    switch (type) {
      case "add":
        newImages = [image, ...images];
        break;
      case "update":
        newImages = [...images];
        index = newImages.findIndex((img) => img.uuid.toString() === image.uuid.toString());
        newImages[index] = { ...newImages[index], ...update };
        break;
      case "delete":
        newImages = images.filter((img) => img.uuid.toString() !== image.uuid.toString());
        setMediaIndex(Math.random() * 5000);
        break;
      default:
        newImages = images;
    }
    setImages(newImages);
  };
};

export const useOnScroll = () => {
  return (ref: React.MutableRefObject<any>, setMediaIndex: (index: number) => void) => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if (scrollHeight - (scrollTop + clientHeight) < 1) {
        setMediaIndex(Math.random() * 5000);
      }
    }
  };
};

export const fetchData = async (
  client: ApolloClient<NormalizedCacheObject>,
  query: DocumentNode,
  variables?: { [key: string]: string | number },
) => {
  return await client.query({
    query,
    fetchPolicy: "network-only",
    variables,
  });
};

export const split = (array: any[], count: number) => {
  const collection: any[][] = [];

  array.map((item, index) => {
    const row = collection[index % count] ?? [];
    collection[index % count] = [...row, item];
  });
  return collection;
};

export const getUniqueImages = (images: Image[]) => {
  let newImages = [...images];
  const imageUrls = [...new Set(images.map((image) => image.url))];
  newImages = imageUrls.map((url) => newImages.find((image) => image.url === url) as Image);
  return newImages;
};

export const mutateMedia = async (
  client: ApolloClient<NormalizedCacheObject>,
  mutation: DocumentNode,
  media: Image,
  updateMediaLibrary: () => void,
  variables?: ImageUpdate,
) => {
  try {
    await client.mutate({
      mutation,
      variables: variables ? { ...variables } : { uuid: media.uuid },
    });
    updateMediaLibrary();
  } catch (error) {
    errorHandler(error as ApolloError);
  }
};

export const useDisplayEmptyMediaLibrary = () => {
  const classes = useMediaLibraryStyles();

  const emptyMedia = (
    handleFileSelection: () => void,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    handleMediaAction: (type: string, media?: Image | File | undefined) => void,
    title?: string,
    subtitle?: string,
  ) => {
    return (
      <div className={classes.emptyContainer}>
        <MediaSplashScreen
          {...splashData}
          body={{
            ...splashData["body"],
            title: title ?? (splashData?.body?.title as string),
            subtitle: subtitle ?? (splashData?.body?.subtitle as string),
          }}
          cta={title ? undefined : { title: "Add image", onClick: () => setOpen(true) }}
        />
        <AddMedia
          className={classes.addMedia}
          handleFilesSelection={handleFileSelection}
          handleOpenMedia={open}
          handleCloseMedia={setOpen}
          handleMediaAction={handleMediaAction}
          buttonText={"Add Image"}
          viewOnly
        />
      </div>
    );
  };
  return emptyMedia;
};
