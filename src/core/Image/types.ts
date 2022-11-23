import { ImgHTMLAttributes } from "react";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    loadingPlaceholder?: string;
    loadingPlaceholderClassName?: string;
};
