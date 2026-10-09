import { calculateCropCoordinates } from "../../io/WysiwygInput/Editor/helpers";
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

export const hasImageServiceUrl = (src: string = '') => {
  const domains = [
      'img.wazobia.tech',
      'images.twistedfood.co.uk',
      'images.vt.co',
      'dolos.hivedeck.com',
      'images.fournine.net',
      'images.craftfactory.com'
  ];

  return domains.some(domain => src.includes(domain));
  };

export const generateModifiedSrc = (
    src: string,
    width: number,
    coordinates: { desktop: Record<'left' | 'top' | 'right' | 'bottom', number> },
    imageServiceDomain: string
  ) => {
    let imageUrl = src;
  
    if (src && src.includes('unsplash')) {
      const indexOfQuestionMark = src.indexOf('?');
      if (indexOfQuestionMark !== -1) {
        imageUrl = src.substring(0, indexOfQuestionMark);
      }
    }
  
    const dolosUrl =
      hasImageServiceUrl(imageUrl) || (src && src.includes('unsplash'))
        ? ''
        : `https://${imageServiceDomain}/`;
  
    const validWidth = width === 0 ? 1024 : width;
    const queryParams = `tr=w-${Math.min(
      validWidth,
      1024
    )}${calculateCropCoordinates(Math.min(validWidth, 1024), coordinates.desktop)}`;
  
    let finalUrl = `${dolosUrl}${imageUrl}`;
    if (!imageUrl.includes('tr=w-')) {
      finalUrl += imageUrl.includes('?') ? '&' : '?';
      finalUrl += queryParams;
    }
  
    return finalUrl;
  };