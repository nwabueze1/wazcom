import { ApolloClient } from "@apollo/client";
export declare const createApolloClient: (uri: string) => ApolloClient<import("@apollo/client").NormalizedCacheObject>;
export declare const GETBLOGCATEGORIES: import("@apollo/client").DocumentNode;
export declare const CREATENEWCATEGORY: import("@apollo/client").DocumentNode;
export declare const createNewCategory: (category: string) => Promise<{
    label: any;
    value: any;
    status: boolean;
}>;
export declare const GET_IMAGES: import("@apollo/client").DocumentNode;
export declare const GET_S3_IMAGES: import("@apollo/client").DocumentNode;
export declare const UPLOAD_IMAGE: import("@apollo/client").DocumentNode;
export declare const UPDATE_IMAGE: import("@apollo/client").DocumentNode;
export declare const DELETE_IMAGE: import("@apollo/client").DocumentNode;
export declare const GET_BLOG_POSTS: import("@apollo/client").DocumentNode;
