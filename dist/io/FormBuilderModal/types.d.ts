/// <reference types="react" />
import { CommonProps } from "../../../../types";
export declare type ModalProps = CommonProps & {
    dialogType?: string;
    embedUrl?: string;
    setEmbedUrl?: (value: string) => void;
    handleDialogClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export declare type ImageProperties = {
    url: string;
    width: SizeFields;
    height: SizeFields;
    title: string;
};
export declare type SizeFields = {
    [key in "desktop" | "tablet" | "mobile"]: string;
};
