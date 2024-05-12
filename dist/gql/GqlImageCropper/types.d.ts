import { GqlMediaSelectorConfigProps } from "../GqlMediaLibrary";
import { CropperConfig } from "./components/CropImage/types";
export type TScreen = "desktop" | "tablet" | "mobile";
export type TCoordinates = Record<TScreen, any>;
export type ImageCropperValue = {
    name?: string;
    description?: string;
    alternative_text?: string;
    caption?: string;
    src: string;
    coordinates?: TCoordinates;
    width?: number;
    height?: number;
};
export type ImageCropperProps = {
    open: boolean;
    value: ImageCropperValue;
    handleClose: () => void;
    onChange?: (data: {
        name: string;
        value: any;
    }) => void;
    screenConfig?: Record<TScreen, CropperConfig>;
    fileMedia?: File;
    config: Pick<GqlMediaSelectorConfigProps["config"], "client" | "update" | "query" | "upload">;
    name: string;
    imageServiceDomain: string;
};
export type OrientationProps = {
    [key: string]: string;
};
export type DisplayProps = {
    [key: string]: ImgUrlProp;
};
export type ImgUrlProp = {
    url: string | undefined;
    coordinates: CoordinateProp | null;
};
export type CoordinateProp = {
    width: number;
    height: number;
    top: number;
    left: number;
};
