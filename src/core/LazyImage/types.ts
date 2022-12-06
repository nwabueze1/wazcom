import { ImgHTMLAttributes } from "react";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    mode?: "view" | "edit";
    classNames?: LazyImageClassNames;
    placeholder?: "empty" | "blur";
    blurDataurl?: string;
};

export interface LazyImageClassNames {
    loadingPlaceholder?: string;
    image?: string;
}
