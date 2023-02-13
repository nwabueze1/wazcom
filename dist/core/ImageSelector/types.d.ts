import { CommonProps } from "../../types";
export type ImageSelectorProps = CommonProps & {
    variant: "circle" | "square";
    src?: string;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    formats?: string[];
    maxImageSize?: number;
    onSelect?: (file: File) => void;
};
