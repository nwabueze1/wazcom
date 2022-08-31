import { ApolloClient, NormalizedCacheObject, DocumentNode } from "@apollo/client";
import { CommonProps } from "../../types";
export declare type GqlMediaLibraryProps = CommonProps & GqlMediaSelectorConfigProps;
export declare type GqlMediaSelectorConfigProps = {
    config: {
        client?: ApolloClient<NormalizedCacheObject>;
        query: {
            name: DocumentNode;
            variables: {
                [key: string]: any;
            };
        };
        upload: {
            name: DocumentNode;
            variables: {
                [key: string]: any;
            };
        };
        update?: {
            name: DocumentNode;
        };
        remove?: {
            name: DocumentNode;
        };
        viewOnly?: boolean;
    };
    handleClose?: () => void;
};
export declare type Image = {
    __typename: string;
    id: string;
    url: string;
    title?: string;
    caption?: string;
    alternative_text?: string;
    created_at: string;
};
export declare type ImageUpdate = Partial<Pick<Image, "id" | "title" | "alternative_text" | "caption">>;
