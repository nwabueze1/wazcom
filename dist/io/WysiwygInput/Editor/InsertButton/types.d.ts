/// <reference types="react" />
import { CommonProps } from "../../../../types";
export declare type InsertButtonProps = CommonProps & {
    label?: string;
    value: string;
    embedUrl: string;
    setEmbedUrl: (value: string) => void;
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
export declare type OptionItemProps = {
    icon: any;
    title: string;
    itemInfo: string;
    handleOptionClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, option: string) => void;
};
