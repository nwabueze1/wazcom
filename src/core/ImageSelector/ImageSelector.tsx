import { FC } from "react";
import { useImageSelectorStyles } from "./styles";
import clx from "classnames";
import { ImageSelectorProps } from "./types";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export const ImageSelector: FC<ImageSelectorProps> = ({
  variant,
  className,
}) => {
  const classes = useImageSelectorStyles();
  return (
    <div
      className={clx(
        className,
        classes.root,
        variant === "circle" && classes.circle,
      )}
    >
      <CameraAltIcon
        className={classes.cameraIcon}
      />
    </div>
  );
};
