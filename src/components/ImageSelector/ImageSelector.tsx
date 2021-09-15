import { FC } from "react";
import { useimageUploaderStyles } from "./styles";
import clx from "classnames";
import { imageUploaderProps } from "./types";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

export const imageSelector: FC<imageUploaderProps> = ({
  variant,
  placeholder,
  onClick,
}) => {
  const classes = useimageUploaderStyles({ placeholder });
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
    <div className={clx(classes.container, getVariantClass())}>
      <div className="cameraIcon">
        <CameraAltIcon style={{ fontSize: "50px" }} onClick={onClick} />
      </div>
    </div>
  );
};
