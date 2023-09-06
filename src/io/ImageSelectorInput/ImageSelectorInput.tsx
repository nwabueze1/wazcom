import { ChangeEvent, FC, useRef, useState } from "react";
import { ImageSelectorInputPropsType } from "./type";
import { useImageSelectorInputStyles } from "./useImageSelectorInputStyles";
import { convertFromBytesToMb } from "./helper";
import clx from "classnames";
import { Button } from "../../core";

export const ImageSelectorInput: FC<ImageSelectorInputPropsType> = ({
  isError,
  label,
  value,
  onChange,
  helperText,
  min_size_kb,
  max_size_mb,
  name,
}) => {
  const classes = useImageSelectorInputStyles();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileSource, setFileSource] = useState<string>(() => {
    if (!value) return "";
    return URL.createObjectURL(value);
  });
  const hasSelectedImage = fileSource.length > 0;
  const handlePickImage = () => {
    fileInputRef.current?.click();
  };

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    let min_size_bytes, max_size_bytes;
    if (min_size_kb) min_size_bytes = min_size_kb * 1024;
    if (max_size_mb) max_size_bytes = max_size_mb * 1024 * 1024;

    if (min_size_bytes && selectedFile.size < min_size_bytes)
      return alert(`image cannot be lower than ${convertFromBytesToMb(min_size_bytes)} mb `);

    if (max_size_bytes && selectedFile.size > max_size_bytes)
      return alert(`image cannot be greater than ${convertFromBytesToMb(max_size_bytes)}`);

    onChange?.({ name, value: selectedFile });

    const imageUrl = URL.createObjectURL(selectedFile);
    setFileSource(imageUrl);
  };

  return (
    <div className={classes.root}>
      {label && <label className={classes.label}>{label}</label>}
      <article
        className={clx(
          classes.container,
          hasSelectedImage && classes.selectedImageContainer,
          isError && classes.errorContainer,
        )}
      >
        {!hasSelectedImage ? (
          <button className={classes.selectButton} onClick={handlePickImage}>
            Select Image
          </button>
        ) : (
          <div className={classes.selectedImageContainer}>
            <img src={fileSource} alt={"selected image"} className={classes.selectedImage} />
          </div>
        )}
        <input
          type={"file"}
          accept={".png,.jpeg,.svg,.webp,.gif,.tiff,.x-icon,.pjpeg,.bmp,.apng"}
          className={classes.selectInput}
          ref={fileInputRef}
          onChange={handleSelectImage}
        />
      </article>
      {helperText && <span className={clx(isError && classes.helperTextError)}>{helperText}</span>}
      {hasSelectedImage && (
        <>
          <p>{value?.name}</p>
          <Button variant={"contained"} className={classes.button} onClick={handlePickImage}>
            Change Image
          </Button>
        </>
      )}
    </div>
  );
};
