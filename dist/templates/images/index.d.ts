import { MediaValue } from "../../gql";
import React from "react";
export type TCropperConfig = Record<"height" | "width" | "defaultSize", number>;
export type TImageCropper = Record<"desktop" | "tablet" | "mobile", TCropperConfig>;
export declare const createResponsiveImage: (image: MediaValue, options?: {
    imageCropper?: TImageCropper;
    className?: string;
    imageProps?: Omit<React.HTMLAttributes<HTMLImageElement> & {
        key?: string | number;
    }, "src" | "className" | "srcset">;
}) => import("react/jsx-runtime").JSX.Element;
