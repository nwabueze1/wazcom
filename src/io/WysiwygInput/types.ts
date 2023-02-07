import { CommonProps } from "../../types";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export type WysiwygInputProps = CommonProps & {
    label?: string;
    value: wyswygInputValue;
    client?: ApolloClient<NormalizedCacheObject>;
    error?: boolean;
    embedUrl: any;
    Loader: any;
    handleImageModalState: () => void;
};

export type wyswygInputValue = {
    title: string,
    content: string,
}