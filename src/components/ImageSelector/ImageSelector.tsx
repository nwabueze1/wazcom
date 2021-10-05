import { FC } from "react";
import { useImageSelectorStyles } from "./styles";
import clx from "classnames";
import { imageUploaderProps } from "./types";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

export const ImageSelector: FC<imageUploaderProps> = ({
  variant,
  placeholder,
  className,
  onClick,
}) => {
  const classes = useImageSelectorStyles({ placeholder });
  return (
    <div className={clx(className, classes.container, variant === 'circle' && classes.circle)}>
      <div className={`selectHover ${variant === 'circle' && "circle"}`}></div>
      <div className="cameraIcon">
        <CameraAltIcon style={{ fontSize: "64px" }} onClick={onClick} />
      </div>
    </div>
  );
};
