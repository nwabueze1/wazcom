import React from "react";
import { ApolloClient, DocumentNode, NormalizedCacheObject } from "@apollo/client";
import { Image, ImageUpdate } from "./types";
export declare const useDisplayImages: () => (images: Image[], selectImage: (image: Image) => void, handleMediaAction: (type: string, media?: Image) => void, viewOnly: boolean, activeLayout: number) => JSX.Element[];
export declare const useFileSelect: () => (fileRef: React.MutableRefObject<any>) => void;
export declare const useMediaUpload: () => (client: ApolloClient<NormalizedCacheObject>, mutation: DocumentNode, variables: ImageUpdate & {
    image: File;
}, setLoading: (loading: {
    [key: string]: boolean;
}) => void, updateMediaLibrary: (image: Image) => void) => Promise<void>;
export declare const useUpdateMediaLibrary: () => (image: Image, images: Image[], setImages: (images: Image[]) => void, setMediaIndex: (index: number) => void, type?: string, update?: Pick<Image, "title" | "alternative_text" | "caption">) => void;
export declare const useOnScroll: () => (ref: React.MutableRefObject<any>, setMediaIndex: (index: number) => void) => void;
export declare const fetchData: (client: ApolloClient<NormalizedCacheObject>, query: DocumentNode, variables?: {
    [key: string]: string | number;
} | undefined) => Promise<import("@apollo/client").ApolloQueryResult<any>>;
export declare const split: (array: any[], count: number) => any[][];
export declare const getUniqueImages: (images: Image[]) => Image[];
export declare const mutateMedia: (client: ApolloClient<NormalizedCacheObject>, mutation: DocumentNode, media: Image, updateMediaLibrary: () => void, variables?: {
    [key: string]: string;
} | undefined) => Promise<void>;
