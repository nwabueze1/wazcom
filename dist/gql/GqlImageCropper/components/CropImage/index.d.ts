/// <reference types="react" />
import { Coordinates, FixedCropperRef } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";
import { CustomCropperRef } from "./types";
export declare const CropImage: import("react").ForwardRefExoticComponent<import("react-advanced-cropper/dist/components/AbstractCropper").AbstractCropperIntrinsicProps<import("react-advanced-cropper").ExtendedSettings<{}>> & Partial<Pick<import("react-advanced-cropper").ExtendedSettings<{}>, keyof import("advanced-cropper/defaults").DefaultSettings | keyof import("advanced-cropper/types").CoreSettings | keyof import("advanced-cropper/types").ModifierSettings | keyof import("advanced-cropper/types").InitializeSettings>> & Omit<import("react-advanced-cropper").ExtendedSettings<{}>, keyof import("advanced-cropper/defaults").DefaultSettings | keyof import("advanced-cropper/types").CoreSettings | keyof import("advanced-cropper/types").ModifierSettings | keyof import("advanced-cropper/types").InitializeSettings> & {
    src: string;
    screenType: string;
    isEdit?: boolean | undefined;
    coordinates: Coordinates;
    setCoordinates: (coordinates: Coordinates) => void;
    setDimensions: (dimensions: Record<"height" | "width", number>) => void;
    activeScreenConfig?: import("./types").CropperConfig | undefined;
} & import("react").RefAttributes<CustomCropperRef | FixedCropperRef>>;
