import { CommonProps } from "../../types";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
export type WysiwygInputProps = CommonProps & {
    label?: string;
    value?: any;
    client?: ApolloClient<NormalizedCacheObject>;
    error?: boolean;
    embedUrl?: {
        url?: string;
        type?: string;
    };
    Loader?: boolean;
    handleImageModalState: (data?: string) => void;
};
