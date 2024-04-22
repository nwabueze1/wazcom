import { ApolloClient, DocumentNode, NormalizedCacheObject } from "@apollo/client";
import { CommonProps } from "../../../../types";

export type InstagramProps = {
  connected: boolean;
  displayImages: () => JSX.Element;
  onChange: CommonProps["onChange"];
  library_uuid: string;
  client: ApolloClient<NormalizedCacheObject>,
  mutation: DocumentNode,
};
