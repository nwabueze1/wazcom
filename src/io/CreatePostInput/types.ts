import { CommonProps } from "../../types";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

export type CreatePostInputProps = CommonProps & {
    label?: string;
    value: string;
    client?: ApolloClient<NormalizedCacheObject>;
};

export type SizeFields = { [key in "desktop" | "tablet" | "mobile"]: string };

