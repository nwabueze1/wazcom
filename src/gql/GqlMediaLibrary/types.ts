import {
  ApolloClient,
  NormalizedCacheObject,
  DocumentNode,
} from "@apollo/client";
import { CommonProps } from "../../types";

export type GqlMediaLibraryProps = CommonProps &
  GqlMediaSelectorConfig & {
    handleSelectImage: (url: string) => void;
  };

export type GqlMediaSelectorConfig = {
  config: {
    client: ApolloClient<NormalizedCacheObject>;
    query: {
      name: DocumentNode;
      variables: any;
    };
    upload: {
      name: DocumentNode;
      variables: any;
    };
  };
};

export type ImageDataType = {
  __typename: "Image";
  id: string;
  url: string;
  created_at: string;
};
