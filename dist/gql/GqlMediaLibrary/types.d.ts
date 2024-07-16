import { ApolloClient, NormalizedCacheObject, DocumentNode } from "@apollo/client";
import { CommonProps } from "../../types";
import { ReactNode } from "react";
export type GqlMediaLibraryProps = CommonProps & GqlMediaSelectorConfigProps & {
    header?: ReactNode;
    library_uuid: string;
    imageServiceDomain?: string;
    onSelect: CommonProps["onChange"];
    useCropperOnUpload?: boolean;
    useServiceDomainOnUpload?: boolean;
};
export type GqlMediaSelectorConfigProps = {
    config: {
        client: ApolloClient<NormalizedCacheObject>;
        query: {
            name: DocumentNode;
            variables: {
                [key: string]: any;
                library_uuid: string;
            };
        };
        upload: {
            name: DocumentNode;
            variables: {
                [key: string]: any;
            };
        };
        update?: {
            name: DocumentNode;
        };
        remove?: {
            name: DocumentNode;
        };
        unsplash: {
            name: DocumentNode;
            variables: {
                [key: string]: any;
            };
        };
        instagram: {
            name: DocumentNode;
            variables: {
                [key: string]: any;
            };
            connect: DocumentNode;
            integrate: DocumentNode;
        };
        pexels: {
            name: DocumentNode;
            variables: {
                [key: string]: any;
            };
        };
        download: {
            name: DocumentNode;
        };
    };
    isSelector?: boolean;
    handleClose?: (args?: string) => void;
    showAddMedia?: (media: any) => void;
};
export type Image = {
    __typename: string;
    id: string;
    url: string;
    title?: string;
    caption?: string;
    alternative_text?: string;
    created_at: string;
    uuid: string;
    library_uuid: string;
};
export type ImageUpdate = Partial<Pick<Image, "id" | "title" | "alternative_text" | "caption" | "uuid" | "library_uuid">>;
export type MediaFilesDetails = {
    caption: string;
    name: string;
    description: string;
    alternative_text: string;
    src: string;
    file: File | undefined;
};
