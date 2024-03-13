import React from "react";

export type TCropperConfig = Partial<
  Record<"height" | "width" | "defaultSize" | "aspectRatio", number>
>;

export type TImageCropper = Record<"desktop" | "tablet" | "mobile", TCropperConfig> &
  Partial<Record<"extraLargeScreens", Partial<TCropperConfig>>>;

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

const calculateCropCoordinates = (
  imageWidth: number,
  coordinates?: Record<"left" | "top" | "right" | "bottom", number>,
) => {
  if (!coordinates) return "";

  const left = Math.round(imageWidth * coordinates["left"]);
  const top = Math.round(imageWidth * coordinates["top"]);
  const right = Math.round(imageWidth * coordinates["right"]);
  const bottom = Math.round(imageWidth * coordinates["bottom"]);

  return `,cr-${left}.${top}.${right}.${bottom}`;
};

const getImagesBasedOnScreenSizes2 = (image: MediaValue, imageCropper?: TImageCropper) => {
  const dolosUrl = "https://img.wazobia.tech";
  const isAmpersand = image?.src?.includes("?");

  const [desktop1992, desktop1772, desktop1442, desktop1280, tabletWidth, mobileWidth] = [
    calculateNewWidthOfLargeScreens(imageCropper?.desktop?.width ?? 1100, 1992),
    calculateNewWidthOfLargeScreens(imageCropper?.desktop?.width ?? 1100, 1772),
    calculateNewWidthOfLargeScreens(imageCropper?.desktop?.width ?? 1100, 1442),
    imageCropper?.desktop?.width ?? 1100,
    imageCropper?.tablet?.width ?? 750,
    imageCropper?.mobile?.width ?? 450,
  ];

  const desktop1992Image = `${dolosUrl}/${image?.src}${
    isAmpersand ? "&tr" : "?tr"
  }=w-${desktop1992}${calculateCropCoordinates(desktop1992, image?.coordinates?.desktop)}`;
  const desktop1772Image = `${dolosUrl}/${image?.src}${
    isAmpersand ? "&tr" : "?tr"
  }=w-${desktop1772}${calculateCropCoordinates(desktop1772, image?.coordinates?.desktop)}`;
  const desktop1442Image = `${dolosUrl}/${image?.src}${
    isAmpersand ? "&tr" : "?tr"
  }=w-${desktop1442}${calculateCropCoordinates(desktop1442, image?.coordinates?.desktop)}`;
  const desktop1280Image = `${dolosUrl}/${image?.src}${
    isAmpersand ? "&tr" : "?tr"
  }=w-${desktop1280}${calculateCropCoordinates(desktop1280, image?.coordinates?.desktop)}`;
  const tabletImage = `${dolosUrl}/${image?.src}${
    isAmpersand ? "&tr" : "?tr"
  }=w-${tabletWidth}${calculateCropCoordinates(tabletWidth, image?.coordinates?.tablet)}`;
  const mobileImage = `${dolosUrl}/${image?.src}${
    isAmpersand ? "&tr" : "?tr"
  }=w-${mobileWidth}${calculateCropCoordinates(mobileWidth, image?.coordinates?.mobile)}`;

  return {
    mobileImage,
    tabletImage,
    desktop1280Image,
    desktop1442Image,
    desktop1772Image,
    desktop1992Image,
  };
};

export const createResponsiveImage = (
  image: MediaValue,
  options?: {
    imageCropper?: TImageCropper;
    className?: string;
    imageProps?: Omit<
      React.HTMLAttributes<HTMLImageElement> & { key?: string | number },
      "src" | "className" | "srcset"
    >;
  },
) => {
  if (!image || !image?.src)
    return (
      <img src={""} alt={"empty image"} className={options?.className} {...options?.imageProps} />
    );

  const {
    desktop1992Image,
    desktop1772Image,
    desktop1442Image,
    desktop1280Image,
    tabletImage,
    mobileImage,
  } = getImagesBasedOnScreenSizes2(image, options?.imageCropper);

  return (
    <picture className={options?.className} {...options?.imageProps}>
      <source srcSet={mobileImage} media={"(max-width:769px)"} />
      <source srcSet={tabletImage} media={"(max-width: 1025px)"} />
      <source srcSet={desktop1280Image} media={"(max-width: 1440px)"} />
      <source srcSet={desktop1442Image} media={"(max-width: 1660px)"} />
      <source srcSet={desktop1772Image} media={"(max-width: 1772px)"} />
      <source srcSet={desktop1992Image} media={"(min-width: 1772px)"} />
      <img
        src={image?.src}
        className={options?.className}
        alt={image.alternative_text}
        {...options?.imageProps}
      />
    </picture>
  );
};

const calculateNewWidthOfLargeScreens = (originalWidth: number, screenSize: number) => {
  return Math.floor((screenSize / 1280) * originalWidth);
};
