import { ReactNode, CSSProperties } from "react";
import { CropperRef, Coordinates, CropperProps } from "react-advanced-cropper";

export interface CropImageWrapperProps {
    cropper: CropperRef;
    loading: boolean;
    children: ReactNode;
    loaded: boolean;
    className?: string;
    style?: CSSProperties;
}

export interface NavigatorProps {
    zoom?: number;
    onZoom?: (value: number, transitions?: boolean) => void;
    onDragZoom?: (value: number, transitions?: boolean) => void;
    className?: string;
    disabled?: unknown;
}

export interface SliderProps {
    className?: string;
    onChange?: (value: number) => void;
    value?: number;
}

export type CropImageProps = {
    src: string;
    screenType: string;
    handleSave: (form: string) => void;
};

export type CoordinateProps = {
    width: number;
    height: number;
    top: number;
    left: number;
};

export interface DisplayTypeProps {
    [key: string]: CoordinateProps | null;
}

export type CustomCropperProps = CropperProps & {
    src: string;
    screenType: string;
    isEdit?: boolean;
    coordinates: Coordinates;
    setCoordinates: (coordinates: Coordinates) => void;
    setDimensions: (dimensions: Record<"width" | "height", number>) => void;
    activeScreenConfig?: CropperConfig
};

export type CustomCropperRef = CropperRef;

export type CropperConfig = {
    width?: number;
    height?: number;
    defaultSize?: number;
};

export type ImageCropperConfig = Record<"desktop" | "tablet" | "mobile", CropperConfig | null>;