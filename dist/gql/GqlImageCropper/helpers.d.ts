import { ImageCropperValue, TScreen } from "./types";
export declare const parseImageCropperValue: (value: ImageCropperValue) => ImageCropperValue & {
    screenType: TScreen;
};
export declare const tabs: string[];
