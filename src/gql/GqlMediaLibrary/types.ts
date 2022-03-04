import {
  ApolloClient,
  NormalizedCacheObject,
  DocumentNode,
} from "@apollo/client";
import { CommonProps } from "../../types";

export type GqlMediaLibraryProps = CommonProps & GqlMediaSelectorConfigProps;

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
    update?: {
      name: DocumentNode;
    };
    remove?: {
      name: DocumentNode;
    };
    viewOnly?: boolean;
  };
};

export type Image = {
  __typename: string;
  id: string;
  url: string;
  title?: string;
  caption?: string;
  alternative_text?: string;
  created_at: string;
};

export type ImageUpdate = Partial<
  Pick<Image, "id" | "title" | "alternative_text" | "caption">
>;
