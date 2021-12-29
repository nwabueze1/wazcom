import { FC } from "react";
import { useImageSelectorStyles } from "./styles";
import clx from "classnames";
import { ImageSelectorProps } from "./types";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export const ImageSelector: FC<ImageSelectorProps> = ({
  variant,
  className,
  height,
  width,
  placeholder,
  onClick,
}) => {
  const classes = useImageSelectorStyles();
  return (
    <div
      className={clx(
        className,
        classes.container,
        variant === "circle" && classes.circle,
      )}
      style={{ height, width, backgroundImage: `url(${placeholder})` }}
    >
      <div className={`selectHover ${variant === "circle" && "circle"}`}></div>
      <div className="cameraIcon">
        <CameraAltIcon style={{ fontSize: "64px" }} onClick={onClick} />
      </div>
    </div>
  );
};
