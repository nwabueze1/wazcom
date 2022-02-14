import React from "react";
import { DocumentNode, ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { ImageDataType } from "./types";
declare type UploaderProps = {
    updateMediaLibrary: (image: ImageDataType) => void;
    setLoading: (loading: boolean) => void;
    config: {
        client: ApolloClient<NormalizedCacheObject>;
        name: DocumentNode;
        variables: {
            [key: string]: string;
        };
    };
};
export declare const Uploader: React.ForwardRefExoticComponent<UploaderProps & React.RefAttributes<HTMLInputElement>>;
export {};
