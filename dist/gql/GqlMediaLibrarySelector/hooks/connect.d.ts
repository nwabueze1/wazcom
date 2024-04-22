import { ApolloClient, DocumentNode, NormalizedCacheObject } from "@apollo/client";
import { connectInstagramAccountVariables, integrateInstagramAccountVariables } from "../types";
import { CommonProps } from "../../../types";
export declare const useConnectInstagramAccount: (onChange: CommonProps["onChange"]) => (client: ApolloClient<NormalizedCacheObject>, mutation: DocumentNode, variables: connectInstagramAccountVariables) => Promise<void>;
export declare const useIntegrateInstagramAccount: () => (client: ApolloClient<NormalizedCacheObject>, mutation: DocumentNode, variables: integrateInstagramAccountVariables) => Promise<void>;
