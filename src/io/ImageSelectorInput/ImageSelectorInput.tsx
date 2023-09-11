import { ChangeEvent, FC, useRef, useState } from "react";
import { ImageSelectorInputPropsType } from "./type";
import { useImageSelectorInputStyles } from "./useImageSelectorInputStyles";
import clx from "classnames";
import { Button } from "../../core";
import { validateFileBySize } from "./ValidateFileBySize";

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
  const [fileError, setFileError] = useState<string | undefined>(undefined);
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

    const { valid, error } = validateFileBySize({ file: selectedFile, min_size_kb, max_size_mb });
    if (!valid) {
      setFileError(error);
      return;
    }
    setFileError(undefined);

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
          (isError || fileError) && classes.errorContainer,
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
      {fileError && <span className={clx(isError && classes.helperTextError)}>{fileError}</span>}
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
