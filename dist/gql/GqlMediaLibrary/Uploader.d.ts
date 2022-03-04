import React from "react";
import { DocumentNode, ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { Image } from "./types";
declare type UploaderProps = {
    updateMediaLibrary: (image: Image) => void;
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
