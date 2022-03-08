import React from "react";
import {
  ApolloClient,
  DocumentNode,
  NormalizedCacheObject,
} from "@apollo/client";
import { Grow } from "@mui/material";
import { useMediaLibraryStyles } from "./styles";
import { Image, ImageUpdate } from "./types";
import { FaPencilAlt } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import clx from 'classnames';

export const useDisplayImages = () => {
  const classes = useMediaLibraryStyles();

  return (
    images: Image[],
    selectImage: (image: Image) => void,
    handleMediaAction: (type: string, media?: Image) => void,
    viewOnly: boolean,
  ) =>
    split(images, 3).map((_, columnIndex) => (
      <div key={columnIndex} className={classes.column}>
        {_.map((theImage, index) => {
          return (
            <Grow in={true} key={index}>
              <div className={clx(classes.thumbnail, viewOnly && classes.thumbnailFixedHeight)}>
                <img
                  onClick={() => selectImage?.(theImage)}
                  src={theImage?.url}
                  className={classes.image}
                />
                <div className={classes.thumbnailOverlay}>
                  {!viewOnly && (
                    <div className={classes.thumbnailActions}>
                      <p
                        onClick={() => {
                          handleMediaAction("edit", theImage);
                        }}
                        className={classes.thumbnailAction}
                      >
                        <FaPencilAlt className={classes.thumbnailActionIcon} />
                      </p>
                      <p
                        onClick={() => {
                          handleMediaAction("delete", theImage);
                        }}
                        className={classes.thumbnailAction}
                      >
                        <IoMdTrash className={classes.thumbnailActionIcon} />
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Grow>
          );
        })}
      </div>
    ));
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
    variables: ImageUpdate & { image: File },
    setLoading: (loading: { [key: string]: boolean }) => void,
    updateMediaLibrary: (image: Image) => void,
  ) => {
    setLoading({ loading: true, mutate: true });
    try {
      const response = await client.mutate({
        mutation,
        variables: { input: { ...variables } },
      });
      if (response?.data?.uploadImage) {
        updateMediaLibrary(response?.data?.uploadImage);
      }
    } catch (error) {
      console.log(error);
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
        index = newImages.findIndex(
          (img) => img.id.toString() === image.id.toString(),
        );
        newImages[index] = { ...newImages[index], ...update };
        break;
      case "delete":
        newImages = images.filter(
          (img) => img.id.toString() !== image.id.toString(),
        );
        setMediaIndex(Math.random() * 5000);
        break;
      default:
        newImages = images;
    }
    setImages(newImages);
  };
};

export const useOnScroll = () => {
  return (
    ref: React.MutableRefObject<any>,
    setMediaIndex: (index: number) => void,
  ) => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      if ((scrollTop + clientHeight) > (scrollHeight - 5) && scrollHeight > 540) {
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
  newImages = imageUrls.map(
    (url) => newImages.find((image) => image.url === url) as Image,
  );
  return newImages;
};

export const mutateMedia = async (
  client: ApolloClient<NormalizedCacheObject>,
  mutation: DocumentNode,
  media: Image,
  updateMediaLibrary: () => void,
  variables?: { [key: string]: string },
) => {
  try {
    await client.mutate({
      mutation,
      variables: variables ? { ...variables } : { id: media.id },
    });
    updateMediaLibrary();
  } catch (error) {
    console.log(error);
  }
};
