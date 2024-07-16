import { ApolloClient, DocumentNode, NormalizedCacheObject } from "@apollo/client";
import { Image } from "../../GqlMediaLibrary";
export declare const useGetInstagramImages: () => (client: ApolloClient<NormalizedCacheObject>, query: DocumentNode, library_uuid: string, callback?: (response: TImageResponse) => void, onError?: () => void) => Promise<never[]>;
export type TImageResponse = {
    images: Image[];
    paginatorInfo: {
        currentPage: number;
        lastPage: number;
    };
};
export declare const useGetLibraryImages: () => (client: ApolloClient<NormalizedCacheObject>, query: DocumentNode, variables: {
    page?: number;
    count?: number;
    library_uuid: string;
    search: string;
}, callback?: (response: TImageResponse) => void, onError?: () => void) => Promise<void>;
export declare const useGetUnsplashImages: () => (client: ApolloClient<NormalizedCacheObject>, query: DocumentNode, variables: {
    search?: string;
    page?: number;
    limit?: number;
}, callback?: (response: TImageResponse) => void, onError?: () => void) => Promise<void>;
export declare const useGetPexelsImages: () => (client: ApolloClient<NormalizedCacheObject>, query: DocumentNode, variables: {
    search?: string;
    page?: number;
    limit?: number;
}, callback?: (response: TImageResponse) => void, onError?: () => void) => Promise<void>;
