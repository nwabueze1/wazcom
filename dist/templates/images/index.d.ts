import React from "react";
export type TCropperConfig = Record<"height" | "width" | "defaultSize", number>;
export type TImageCropper = Record<"desktop" | "tablet" | "mobile", TCropperConfig>;
export type TScreen = "desktop" | "tablet" | "mobile";
export type TCoordinates = Record<TScreen, any>;
export type MediaValue = {
    name?: string;
    description?: string;
    alternative_text?: string;
    caption?: string;
    src: string;
    coordinates?: TCoordinates;
};
export declare const createResponsiveImage: (image: MediaValue, options?: {
    imageCropper?: TImageCropper;
    className?: string;
    imageProps?: Omit<React.HTMLAttributes<HTMLImageElement> & {
        key?: string | number;
    }, "src" | "className" | "srcset">;
}) => import("react/jsx-runtime").JSX.Element;
