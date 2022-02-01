import {
  ApolloClient,
  NormalizedCacheObject,
  DocumentNode,
} from "@apollo/client";
import { CommonProps } from "../../types";

export type GqlMediaLibraryProps = CommonProps &
  GqlMediaSelectorConfigProps & {
    onImageSelect: (url: string) => void;
    refetch?: number;
  };

export type GqlMediaSelectorConfigProps = {
  config: {
    client: ApolloClient<NormalizedCacheObject>;
    query: {
      name: DocumentNode;
      variables: { [key: string]: string };
    };
    upload: {
      name: DocumentNode;
      variables: { [key: string]: string };
    };
  };
};

export type ImageDataType = {
  __typename: "Image";
  id: string;
  url: string;
  created_at: string;
};
