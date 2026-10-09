import { errorHandler } from "../../../helpers";
import { ApolloClient, ApolloError, DocumentNode, NormalizedCacheObject } from "@apollo/client";
import { Image } from "../../GqlMediaLibrary";
import { useState } from "react";

export const useGetInstagramImages = () => {
  return async (
    client: ApolloClient<NormalizedCacheObject>,
    query: DocumentNode,
    library_uuid: string,
    callback?: (response: TImageResponse) => void,
    onError?: () => void,
  ) => {
    try {
      const { data } = await client.query({
        query,
        variables: {
          library_uuid,
        },
      });

      if (data?.getInstagramImages) {
        const images = data?.getInstagramImages;
        const response = {
          ...data?.getInstagramImages,
          images: images.map((image: string) => ({ url: image })),
        };
        callback?.(response);
      }

      return [];
    } catch (error) {
      onError?.();
      return [];
    }
  };
};

export type TImageResponse = {
  images: Image[];
  paginatorInfo: {
    currentPage: number;
    lastPage: number;
  };
};

export const useGetLibraryImages = () => {
  const [paginationInfo, setPaginationInfo] = useState<any>(null);
  return async (
    client: ApolloClient<NormalizedCacheObject>,
    query: DocumentNode,
    variables: { page?: number; count?: number; library_uuid: string, search: string },
    callback?: (response: TImageResponse) => void,
    onError?: () => void,
  ) => {
    if (paginationInfo && paginationInfo?.currentPage >= paginationInfo?.lastPage) {
      return;
    }
    try {
      const { data } = await client.query({
        query,
        variables,
        fetchPolicy: "network-only"
      });

      data?.getImagesByLibraryUuid && callback?.(data?.getImagesByLibraryUuid);
      if (data?.getImagesByLibraryUuid) {
        setPaginationInfo(data?.getImagesByLibraryUuid?.paginatorInfo);
      }
    } catch (error) {
      errorHandler(error as ApolloError);
      onError?.();
    }
  };
};

export const useGetUnsplashImages = () => {
  return async (
    client: ApolloClient<NormalizedCacheObject>,
    query: DocumentNode,
    variables: { search?: string; page?: number; limit?: number },
    callback?: (response: TImageResponse) => void,
    onError?: () => void,
  ) => {
    if (!variables?.search) delete variables?.search;

    try {
      const { data } = await client.query({
        query,
        variables,
      });

      if (data?.getUnsplashImages) {
        const images = data?.getUnsplashImages?.images;
        const response = {
          ...data?.getUnsplashImages,
          images: images.map((image: Record<string, string>) => ({
            ...image,
            source: "https://unsplash.com",
          })),
        };
        callback?.(response);
      }
    } catch (error) {
      errorHandler(error as ApolloError);
      onError?.();
    }
  };
};

export const useGetPexelsImages = () => {
  return async (
    client: ApolloClient<NormalizedCacheObject>,
    query: DocumentNode,
    variables: { search?: string; page?: number; limit?: number },
    callback?: (response: TImageResponse) => void,
    onError?: () => void,
  ) => {
    if (!variables?.search) delete variables?.search;

    try {
      const { data } = await client.query({
        query,
        variables,
      });

      if (data?.getPexelsImages) {
        const images = data?.getPexelsImages?.images;
        const response = {
          ...data?.getPexelsImages,
          images: images.map((image: Record<string, string>) => ({
            ...image,
            source: "https://pexels.com",
          })),
        };
        callback?.(response);
      }
    } catch (error) {
      errorHandler(error as ApolloError);
      onError?.();
    }
  };
};
