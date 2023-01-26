import { CommonProps } from "../../types";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export type CreatePostInputProps = CommonProps & {
    label?: string;
    value: createPostValue;
    client?: ApolloClient<NormalizedCacheObject>;
    error?: boolean;
};

export type createPostValue = {
    title: string,
    content: string,
}

export type SizeFields = { [key in "desktop" | "tablet" | "mobile"]: string };

