import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { DocumentNode } from "graphql";
import { ReactNode } from "react";
export type ContentFormLayoutProps = {
    getContentConfig: {
        GET_CONTENT: DocumentNode;
        variables: {
            [key: string]: any;
        };
        client: ApolloClient<NormalizedCacheObject>;
        dataKey: string[];
    };
    onGoBack: () => void;
    isEdit: boolean;
    isPublished: boolean;
    showRightSidebar: boolean;
    onDataFetchCompleted: (data: {
        [key: string]: any;
    }) => void;
    type: PageType;
    tabControls: {
        [key: string]: {
            icon: JSX.Element;
            form: JSX.Element;
        };
    };
    children?: ReactNode;
};
export type PageType = "recipes" | "guides" | "posts";
export declare const RECIPE_PAGE_TYPE = "recipes";
export declare const GUIDE_PAGE_TYPE = "guides";
export declare const POST_PAGE_TYPE = "posts";
