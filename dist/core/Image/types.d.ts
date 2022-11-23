import { ImgHTMLAttributes } from "react";
export declare type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    classNames?: LazyImageClassNames;
    placeholder?: "empty" | "blur";
    blurDataurl?: string;
};
export interface LazyImageClassNames {
    loadingPlaceholder?: string;
    image?: string;
}
