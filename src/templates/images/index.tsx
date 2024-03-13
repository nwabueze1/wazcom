import React from "react";

export type TCropperConfig = Record<"height" | "width" | "defaultSize" | "aspectRatio", number>;

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

const getImagesBasedOnScreenSizes = (image: MediaValue, imageCropper?: TImageCropper) => {
  const dolosUrl = "https://img.wazobia.tech";
  const isAmpersand = image?.src?.includes("?");

  const [xtraLargeScreen, desktopWidth, tabletWidth, mobileWidth] = [
    imageCropper?.extraLargeScreens?.width ?? 1200,
    imageCropper?.desktop?.width ?? 1100,
    imageCropper?.tablet?.width ?? 750,
    imageCropper?.mobile?.width ?? 450,
  ];

  const x1DesktopScreens = calculateNewWidthOfLargeScreens(xtraLargeScreen, 1770);
  const x2DesktopScreens = calculateNewWidthOfLargeScreens(desktopWidth, 1990);

  const desktop2xImage = `${dolosUrl}/${image?.src}${
    isAmpersand ? "&tr" : "?tr"
  }=w-${x2DesktopScreens}${calculateCropCoordinates(
    x2DesktopScreens,
    image?.coordinates?.desktop,
  )}`;

  const desktop1xImage = `${dolosUrl}/${image?.src}${
    isAmpersand ? "&tr" : "?tr"
  }=w-${x1DesktopScreens}${calculateCropCoordinates(
    x1DesktopScreens,
    image?.coordinates?.desktop,
  )}`;

  const desktopImage = `${dolosUrl}/${image?.src}${
    isAmpersand ? "&tr" : "?tr"
  }=w-${desktopWidth}${calculateCropCoordinates(desktopWidth, image?.coordinates?.desktop)}`;

  const tabletImage = `${dolosUrl}/${image?.src}${
    isAmpersand ? "&tr" : "?tr"
  }=w-${tabletWidth}${calculateCropCoordinates(tabletWidth, image?.coordinates?.tablet)}`;

  const mobileImage = `${dolosUrl}/${image?.src}${
    isAmpersand ? "&tr" : "?tr"
  }=w-${mobileWidth}${calculateCropCoordinates(mobileWidth, image?.coordinates?.mobile)}`;

  return {
    desktop2x: desktop2xImage,
    desktop1x: desktop1xImage,
    desktop: desktopImage,
    tablet: tabletImage,
    mobile: mobileImage,
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

  const { desktop, tablet, mobile } = getImagesBasedOnScreenSizes(image, options?.imageCropper);

  return (
    <picture className={options?.className} {...options?.imageProps}>
      <source srcSet={mobile} className={options?.className} media={"(max-width:769px)"} />
      <source srcSet={tablet} media={"(max-width: 1025px)"} className={options?.className} />
      <source srcSet={desktop} media={"(min-width: 1025px)"} className={options?.className} />
      {/* <source srcSet={desktop1x} media={"(max-width: 1772px)"} className={options?.className} />
      <source srcSet={desktop2x} media={"(min-width: 1772px)"} className={options?.className} /> */}
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
  return Math.floor((screenSize / 1440) * originalWidth);
};
