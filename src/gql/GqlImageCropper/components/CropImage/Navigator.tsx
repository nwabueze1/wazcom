import { FC } from "react";
import cx from "classnames";
import { isNumber } from "advanced-cropper";
import { Slider } from "./Slider";
import { NavigatorProps } from "./types";
import { useCropImageStyles } from "./styles";

export const Navigator: FC<NavigatorProps> = ({ className, onZoom, onDragZoom, zoom }) => {
  const classes = useCropImageStyles();
  const onZoomIn = () => {
    if (onZoom && isNumber(zoom)) {
      onZoom(Math.min(1, zoom + 0.25), true);
    }
  };

  const onZoomOut = () => {
    if (onZoom && isNumber(zoom)) {
      onZoom(Math.max(0, zoom - 0.25), true);
    }
  };

  return (
    <div className={cx(classes.navigation, className)}>
      <button className={classes.navigationButton} onClick={onZoomIn}>
        <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/plus.svg" alt="zoom in" />
      </button>
      <Slider value={zoom} onChange={onDragZoom} />
      <button className={classes.navigationButton} onClick={onZoomOut}>
        <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/minus.svg" alt="zoom out" />
      </button>
    </div>
  );
};
