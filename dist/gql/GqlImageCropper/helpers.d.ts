import { ImageCropperValue, TScreen } from "./types";
export declare const parseImageCropperValue: (value: ImageCropperValue) => ImageCropperValue & {
    screenType: TScreen;
};
export declare const tabs: string[];
export declare const hasImageServiceUrl: (src?: string) => boolean;
export declare const generateModifiedSrc: (src: string, width: number, coordinates: {
    desktop: Record<"left" | "top" | "right" | "bottom", number>;
}, imageServiceDomain: string) => string;
