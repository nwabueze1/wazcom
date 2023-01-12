import { CommonProps } from "../../types";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export declare type RichTextInputProps = CommonProps & {
    label?: string;
    apiKey: string;
    value: string;
    client?: ApolloClient<NormalizedCacheObject>;
    upload?: (tinyCallback: (location: string, data: {
        [key: string]: string;
    }) => void, setLoadState: (loading: boolean) => void) => void;
    Loader?: JSX.Element;
    error?: boolean;
};
export declare type SizeFields = {
    [key in "desktop" | "tablet" | "mobile"]: string;
};
export declare type ImageProperties = {
    url: string;
    width: SizeFields;
    height: SizeFields;
    title: string;
};
