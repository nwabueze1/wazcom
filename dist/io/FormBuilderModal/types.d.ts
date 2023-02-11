/// <reference types="react" />
import { CommonProps } from "../../../../types";
export type ModalProps = CommonProps & {
    dialogType?: string;
    embedUrl?: string;
    setEmbedUrl?: (value: string) => void;
    handleDialogClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export type ImageProperties = {
    url: string;
    width: SizeFields;
    height: SizeFields;
    title: string;
};
export type SizeFields = {
    [key in "desktop" | "tablet" | "mobile"]: string;
};
