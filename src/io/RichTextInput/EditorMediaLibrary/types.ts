import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { ImageProperties } from "../types";

export type EditorMediaLibraryProps = {
    mediaOpen: boolean;
    name?: string;
    handleClose: () => void;
    handleSelect: (value: ImageProperties) => void;
    client: ApolloClient<NormalizedCacheObject>;
};
