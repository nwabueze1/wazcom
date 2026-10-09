import { FC } from "react";
import cx from "classnames";
import { CropperFade } from "react-advanced-cropper";
import { getAbsoluteZoom, getZoomFactor } from "advanced-cropper/extensions/absolute-zoom";
import { CropImageWrapperProps } from "./types";
import { useCropImageStyles } from "./styles";
import { Navigator } from "./Navigator";

export const CropImageWrapper: FC<CropImageWrapperProps> = ({
  cropper,
  children,
  className,
}) => {
  const classes = useCropImageStyles();
  const state = cropper.getState();
  const settings = cropper.getSettings();
  const absoluteZoom = getAbsoluteZoom(state, settings);

  const onZoom = (value: number, transitions?: boolean) => {
    cropper.zoomImage(getZoomFactor(state, settings, value), {
      transitions: !!transitions,
    });
  };

  const onDragZoom = (value: number, transitions?: boolean) => {
    onZoom(1 - value, transitions);
  };

  return (
    <CropperFade className={cx(classes.wrapper, className)} visible={state}>
      {children}
      <Navigator
        className={classes.wrapperNavigation}
        zoom={absoluteZoom}
        onZoom={onZoom}
        onDragZoom={onDragZoom}
      />
    </CropperFade>
  );
};
