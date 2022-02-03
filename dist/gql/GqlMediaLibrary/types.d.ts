import { ApolloClient, NormalizedCacheObject, DocumentNode } from "@apollo/client";
import { CommonProps } from "../../types";
export declare type GqlMediaLibraryProps = CommonProps & GqlMediaSelectorConfigProps & {
    onImageSelect: (data: ImageDataType) => void;
    refetch?: number;
};
export declare type GqlMediaSelectorConfigProps = {
    config: {
        client: ApolloClient<NormalizedCacheObject>;
        query: {
            name: DocumentNode;
            variables: {
                [key: string]: string;
            };
        };
        upload: {
            name: DocumentNode;
            variables: {
                [key: string]: string;
            };
        };
    };
};
export declare type ImageDataType = {
    __typename: string;
    id: string;
    url: string;
    created_at: string;
};
