import { CommonProps } from "../../types";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export type WysiwygInputProps = CommonProps & {
    label?: string;
    value: wyswygInputValue;
    client?: ApolloClient<NormalizedCacheObject>;
    error?: boolean;
    embedUrl?: {
        url?: string;
        type?: string;
    };
    Loader: boolean;
    handleImageModalState: (data?: string) => void;
    handlePostData: (data?: any) => void;
};
export type wyswygInputValue = {
    title: string;
    content: string;
};
