// For attribution, every time an Unsplash image is selected
// a request needs to be made to its unique download endpoint

import { ApolloClient, DocumentNode, NormalizedCacheObject } from "@apollo/client";

// to reflect that it has been used (or "downloaded")
export const useDownloadImage = () => {
  return async (
    client: ApolloClient<NormalizedCacheObject>,
    mutation: DocumentNode,
    platform: "unsplash" | "pexels",
    download_url: string,
  ) => {
    await client.mutate({
      mutation: mutation,
      variables: { platform, url: download_url },
    });
  };
};
