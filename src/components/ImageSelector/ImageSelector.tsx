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
  const getVariantClass = () => {
    let className;
    switch (variant) {
      case "circle":
        className = classes.circleContainer;
        break;
      default:
        className = classes.container;
    }
    return className;
  };
  return (
    <div className={clx(className, classes.container, getVariantClass())}>
      <div className="cameraIcon">
        <CameraAltIcon style={{ fontSize: "50px" }} onClick={onClick} />
      </div>
    </div>
  );
};
