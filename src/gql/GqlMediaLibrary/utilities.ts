import {
  ApolloClient,
  DocumentNode,
  NormalizedCacheObject,
} from "@apollo/client";
import { ImageDataType } from "./types";

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

export const deleteMedia = async (
  client: ApolloClient<NormalizedCacheObject>,
  mutation: DocumentNode,
  media: ImageDataType,
  updateMediaLibrary: () => void,
) => {
  alert("before request");
  try {
      alert("inside try");
      console.log(mutation);
    await client.mutate({ mutation, variables: { id: media.id } });
    alert("afte try");
    updateMediaLibrary();
  } catch (error) {console.log(error)}
};
