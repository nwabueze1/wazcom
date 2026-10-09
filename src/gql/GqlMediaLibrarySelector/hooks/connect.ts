import { ApolloClient, ApolloError, DocumentNode, NormalizedCacheObject } from "@apollo/client";
import { errorHandler, notify } from "../../../helpers";
import { connectInstagramAccountVariables, integrateInstagramAccountVariables } from "../types";
import { CommonProps } from "../../../types";

export const useConnectInstagramAccount = (onChange: CommonProps["onChange"]) => {
  return async (
    client: ApolloClient<NormalizedCacheObject>,
    mutation: DocumentNode,
    variables: connectInstagramAccountVariables,
  ) => {
    onChange?.({ name: "loading", value: true });
    try {
      const { data } = await client.mutate<{ connectInstagramAccount: { redirect_url: string } }>({
        mutation,
        variables,
      });
      if (data) {
        const {
          connectInstagramAccount: { redirect_url },
        } = data;
        window.location.assign(redirect_url);
      }
    } catch (e) {
      errorHandler(e as ApolloError);
    }
    onChange?.({ name: "loading", value: false });
  };
};

export const useIntegrateInstagramAccount = () => {
  return async (
    client: ApolloClient<NormalizedCacheObject>,
    mutation: DocumentNode,
    variables: integrateInstagramAccountVariables,
  ) => {
    try {
      const { data } = await client.mutate<{
        integrateInstagramAccount: integrateInstagramAccountVariables;
      }>({
        mutation,
        variables,
      });
      if (data) {
        notify("success", "Instagram Connected successfully");
        setTimeout(() => {
          window.location.href = "/admin/media-library?instagram_integrated=true";
        }, 3000);
      }
    } catch (error) {
      errorHandler(error as ApolloError);
    }
  };
};
