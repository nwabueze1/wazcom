import React, { useCallback } from "react";
import {
  DocumentNode,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { ImageDataType } from "./types";

type UploaderRefProps = HTMLInputElement;
type UploaderProps = {
  updateMediaLibrary: (image: ImageDataType) => void;
  setLoading: (loading: boolean) => void;
  config: {
    client: ApolloClient<NormalizedCacheObject>;
    name: DocumentNode;
    variables: { [key: string]: string };
  };
};

export const Uploader = React.forwardRef<UploaderRefProps, UploaderProps>(
  (
    {
      config: { client, name: mutation, variables },
      setLoading,
      updateMediaLibrary,
      ...props
    },
    ref,
  ) => {
    const uploadImage = async ({ variables }: { variables: any }) =>
      await client.mutate({ mutation, variables });

    const handleFileChange = useCallback(
      async (event: React.ChangeEvent<any>) => {
        event.preventDefault();
        const file = event.target?.files[0];

        setLoading(true);
        await uploadImage({
          variables: { input: { image: file }, ...variables },
        })
          .then(({ data: { uploadImage: image } }) => {
            updateMediaLibrary(image);
          })
          .finally(() => {
            setLoading(false);
          });
      },
      [],
    );

    return (
      <input
        name="image_url"
        accept="image/*"
        hidden
        type="file"
        ref={ref}
        onChange={handleFileChange}
        {...props}
      />
    );
  },
);
