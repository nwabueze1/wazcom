import { CommonProps } from "../../types";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export declare type WysiwygInputProps = CommonProps & {
    label?: string;
    value: wyswygInputValue;
    client?: ApolloClient<NormalizedCacheObject>;
    error?: boolean;
};
export declare type wyswygInputValue = {
    title: string;
    content: string;
};
