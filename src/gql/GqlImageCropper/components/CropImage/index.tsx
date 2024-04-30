import Box from "@mui/material/Box";
import {
  CropperRef,
  Cropper,
  ImageRestriction,
  CropperState,
  Coordinates,
  FixedCropper,
  FixedCropperRef,
} from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";
import { useRef, forwardRef, useEffect, Ref } from "react";
import { useCropImageStyles } from "./styles";
import cx from "classnames";
import { CustomCropperProps, CustomCropperRef } from "./types";
import { CropImageWrapper } from "./CropImageWrapper";

export const CropImage = forwardRef<CustomCropperRef | FixedCropperRef, CustomCropperProps>(
  (
    {
      coordinates,
      setCoordinates,
      src,
      isEdit = false,
      screenType,
      setDimensions,
      activeScreenConfig
    }: CustomCropperProps,
    ref,
  ) => {
    const classes = useCropImageStyles();
    const cropperRef = useRef<CropperRef>(null);

    useEffect(() => {
      const defaultCoordinates = (
        isEdit
          ? cropperRef.current?.getVisibleArea()
          : cropperRef.current?.getDefaultState()?.coordinates
      ) as Coordinates;
      cropperRef.current?.setCoordinates(
        Object.keys(coordinates).length > 0 ? coordinates : defaultCoordinates,
      );
    }, [screenType]);

    const onChange = (cropper: CropperRef) => {
      const coordinates = cropper.getCoordinates();
      if (coordinates) setCoordinates(coordinates);
    };

    const defaultSize = ({ imageSize, visibleArea }: CropperState) => {
      if (isEdit && coordinates["width"] && coordinates["height"])
        return { width: coordinates["width"], height: coordinates["height"] };

      const width = (visibleArea || imageSize).width;
      const height = (visibleArea || imageSize).height;
      setDimensions({ width, height });
      return {
        width,
        height,
      };
    };


    const isFixedCropper =
      typeof activeScreenConfig?.height === "number" &&
      typeof activeScreenConfig?.width === "number";

    const commonCropperProps = {
      ref: ref || cropperRef,
      src,
      onChange,
      defaultSize,
      defaultPosition: isEdit ? { left: coordinates["left"], top: coordinates["top"] } : undefined,
      imageRestriction: ImageRestriction.stencil,
      crossOrigin: false,
      className: cx("cropper", classes.cropper),
    };

    const renderFixedCropper = () => (
      <FixedCropper
        {...commonCropperProps}
        ref={(ref || cropperRef) as any as Ref<FixedCropperRef>}
        stencilSize={{
          height: activeScreenConfig?.height ?? 0,
          width: activeScreenConfig?.width ?? 0,
        }}
        stencilProps={{
          handlerClassNames: {
            default: classes.handler,
          },
          movable: true,
          resizable: false,
          handlers: false,
        }}
        wrapperComponent={CropImageWrapper}
      />
    );

    const renderCropper = () => (
      <Cropper
        {...commonCropperProps}
        stencilProps={{
          handlerClassNames: {
            default: classes.handler,
          },
          movable: true,
          resizable: true,
        }}
      />
    );

    return (
      <Box className={classes.root}>{isFixedCropper ? renderFixedCropper() : renderCropper()}</Box>
    );
  },
);

CropImage.displayName = "CropImage";
