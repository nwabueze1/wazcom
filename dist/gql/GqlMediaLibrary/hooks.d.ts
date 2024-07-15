import React from "react";
import { ApolloClient, DocumentNode, NormalizedCacheObject } from "@apollo/client";
import { Image, ImageUpdate } from "./types";
export declare const useDisplayImages: () => (images: Image[], selectImage: (image: Image) => void, handleMediaAction: (type: string, media?: Image | File | Array<Image | File>) => void, showOptions: boolean, activeLayout: number) => import("react/jsx-runtime").JSX.Element[];
export declare const useFileSelect: () => (fileRef: React.MutableRefObject<any>) => void;
export declare const useMediaUpload: () => (client: ApolloClient<NormalizedCacheObject>, mutation: DocumentNode, variables: ImageUpdate & {
    image: File;
    library_uuid: string;
}, setLoading: (loading: {
    [key: string]: boolean;
}) => void, updateMediaLibrary: (image: Image) => void) => Promise<void>;
export declare const createMediaUpload: () => (client: ApolloClient<NormalizedCacheObject>, mutation: DocumentNode, variables: ImageUpdate & {
    image: File;
}) => Promise<any>;
export declare const updateMediaUpload: () => (client: ApolloClient<NormalizedCacheObject>, mutation: DocumentNode, variables: ImageUpdate) => Promise<any>;
export declare const useUpdateMediaLibrary: () => (images: Image[], displayedImages: Image[], setImages: (images: Image[]) => void, setMediaIndex: (index: number) => void, type?: string, update?: Pick<Image, "title" | "alternative_text" | "caption">) => void;
export declare const useOnScroll: () => (ref: React.MutableRefObject<any>, setMediaIndex: (index: number) => void) => void;
export declare const fetchData: (client: ApolloClient<NormalizedCacheObject>, query: DocumentNode, variables?: {
    [key: string]: string | number;
}) => Promise<import("@apollo/client").ApolloQueryResult<any>>;
export declare const split: (array: any[], count: number) => any[][];
export declare const getUniqueImages: (images: Image[]) => Image[];
export declare const mutateMedia: (client: ApolloClient<NormalizedCacheObject>, mutation: DocumentNode, media: Image, updateMediaLibrary: () => void, variables?: ImageUpdate) => Promise<void>;
export declare const useDisplayEmptyMediaLibrary: () => (handleFileSelection: () => void, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, handleMediaAction: (type: string, media?: Image | File | Array<Image | File>) => void, title?: string, subtitle?: string) => import("react/jsx-runtime").JSX.Element;
