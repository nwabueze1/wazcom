import { Coordinates, FixedCropperRef } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";
import { CustomCropperRef } from "./types";
export declare const CropImage: import("react").ForwardRefExoticComponent<import("react-advanced-cropper/dist/components/AbstractCropper").AbstractCropperIntrinsicProps<import("react-advanced-cropper").ExtendedSettings<{}>> & Partial<Pick<import("react-advanced-cropper").ExtendedSettings<{}>, keyof import("react-advanced-cropper").DefaultSettings | keyof import("react-advanced-cropper").CoreSettings | keyof import("react-advanced-cropper").ModifierSettings | keyof import("react-advanced-cropper").InitializeSettings>> & Omit<import("react-advanced-cropper").ExtendedSettings<{}>, keyof import("react-advanced-cropper").DefaultSettings | keyof import("react-advanced-cropper").CoreSettings | keyof import("react-advanced-cropper").ModifierSettings | keyof import("react-advanced-cropper").InitializeSettings> & {
    src: string;
    screenType: string;
    isEdit?: boolean;
    coordinates: Coordinates;
    setCoordinates: (coordinates: Coordinates) => void;
    setDimensions: (dimensions: Record<"width" | "height", number>) => void;
    activeScreenConfig?: import("./types").CropperConfig;
} & import("react").RefAttributes<CustomCropperRef | FixedCropperRef>>;
