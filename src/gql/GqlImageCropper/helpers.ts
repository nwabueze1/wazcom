import { ImageCropperValue, TScreen } from "./types";

export const parseImageCropperValue = (
    value: ImageCropperValue,
): ImageCropperValue & { screenType: TScreen } => {
    if (Object.keys(value).length === 1)
        return {
            ...value,
            name: "",
            description: "",
            alternative_text: "",
            caption: "",
            coordinates: {
                desktop: {},
                tablet: {},
                mobile: {},
            },
            screenType: "desktop",
        };

    return {
        ...value,
        coordinates: {
            desktop: value["coordinates"]?.desktop
                ? parseStoredCoordinates(value["coordinates"]?.desktop, value["width"] as number)
                : {},
            tablet: value["coordinates"]?.tablet
                ? parseStoredCoordinates(value["coordinates"]?.tablet, value["width"] as number)
                : {},
            mobile: value["coordinates"]?.mobile
                ? parseStoredCoordinates(value["coordinates"]?.mobile, value["width"] as number)
                : {},
        },
        screenType: "desktop",
    };
};

const parseStoredCoordinates = (
    coordinates: Record<"left" | "top" | "right" | "bottom", number>,
    imageWidth: number,
) => {
    const left = Number((coordinates["left"] * imageWidth).toFixed(2));
    const top = Number((coordinates["top"] * imageWidth).toFixed(2));
    return {
        left,
        top,
        width: Number((coordinates["right"] * imageWidth).toFixed(2)) - left,
        height: Number((coordinates["bottom"] * imageWidth).toFixed(2)) - top,
    };
};

export const tabs = ["Image Properties", "Crop & Resize"];
