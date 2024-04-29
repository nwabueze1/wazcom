import { ApolloClient, DocumentNode, NormalizedCacheObject } from "@apollo/client";
export declare const useDownloadImage: () => (client: ApolloClient<NormalizedCacheObject>, mutation: DocumentNode, platform: "unsplash" | "pexels", download_url: string) => Promise<void>;
