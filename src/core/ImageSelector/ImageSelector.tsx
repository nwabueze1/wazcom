import React, { FC, useRef, useState } from "react";
import { useImageSelectorStyles } from "./styles";
import clx from "classnames";
import { ImageSelectorProps } from "./types";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { getSizeVariants } from "../../helpers/size";

export const ImageSelector: FC<ImageSelectorProps> = ({
  variant,
  src,
  className,
  size = "md",
  maxImageSize = 2000000,
  formats = ["jpg", "jpeg", "png"],
  onSelect,
}) => {
  const classes = useImageSelectorStyles();
  const [selected, setSelected] = useState<boolean>(false);
  const inputRef = useRef<any>();
  const imgRef = useRef<any>();

  const fileInputClick = () => {
    inputRef?.current.click();
  };

  const validate = (file: File) => {
    const type = file.type.toLowerCase().split("/")[1];

    if (!formats.includes(type)) return false;

    if (file.size > maxImageSize) return false;

    return true;
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    if (validate(file)) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setSelected(true);
        imgRef.current.setAttribute("src", e.target.result);
      };

      reader.readAsDataURL(file);
      onSelect?.(file);
    }
  };

  const variants = getSizeVariants(classes, size);

  return (
    <div
      className={clx(
        classes.root,
        className,
        variant === "circle" && classes.circle,
        variants[0]
      )}
      onClick={fileInputClick}
    >
      <CameraAltIcon className={clx(classes.cameraIcon, variants[1])} />
      <input type="file" ref={inputRef} onChange={handleSelect} hidden />
      {selected ||
        (src && (
          <img
            ref={imgRef}
            src={src}
            className={clx(
              classes.image,
              variant === "circle" && classes.circle
            )}
          />
        ))}
    </div>
  );
};
