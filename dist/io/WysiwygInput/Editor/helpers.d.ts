import { MediaValue } from "./types";
export declare const createImageSrcset: (value: MediaValue, isBackground?: boolean, imageServiceDomain?: string) => string;
export declare const calculateCropCoordinates: (imageWidth: number, coordinates?: Record<"left" | "top" | "right" | "bottom", number>) => string;
export declare const imageSizes = "(min-width: 1024px) 1100px, (min-width: 500px) 750px, 450px";
