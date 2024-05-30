import { ChangeEvent, FC, useRef, useState } from "react";
import { ImageSelectorInputPropsType } from "./type";
import { useImageSelectorInputStyles } from "./useImageSelectorInputStyles";
import clx from "classnames";
import { Button } from "../../core";
import { validateFileBySize } from "./ValidateFileBySize";
import { CircularProgress } from "@mui/material";

export const ImageSelectorInput: FC<ImageSelectorInputPropsType> = ({
  isError,
  label,
  value,
  onChange,
  helperText,
  min_size_kb,
  max_size_mb,
  name,
  uploadFn,
  loading,
  accept,
  classNames,
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

  const handleSelectImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const { valid, error } = validateFileBySize({ file: selectedFile, min_size_kb, max_size_mb });
    if (!valid) {
      setFileError(error);
      return;
    }
    setFileError(undefined);

    if (uploadFn) {
      const isUploaded = await uploadFn({ name, file: selectedFile });
      if (isUploaded) {
        onChange?.({ name, value: selectedFile });

        const imageUrl = URL.createObjectURL(selectedFile);
        setFileSource(imageUrl);
        return;
      }
      setFileSource("");
    } else {
      onChange?.({ name, value: selectedFile });

      const imageUrl = URL.createObjectURL(selectedFile);
      setFileSource(imageUrl);
    }
  };

  const renderMedia = () => {
    if (loading)
      return (
        <div
          className={clx(classes.selectedImageContainer)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 112,
          }}
        >
          <CircularProgress color="inherit" size={18} />;
        </div>
      );

    return !hasSelectedImage ? (
      <button
        className={clx(classes.selectButton, classNames?.selectButton)}
        onClick={handlePickImage}
        type="button"
      >
        Select Image
      </button>
    ) : (
      <div className={classes.selectedImageContainer}>
        <img src={fileSource} alt={"selected image"} className={classes.selectedImage} />
      </div>
    );
  };

  return (
    <div className={classes.root}>
      {label && <label className={clx(classes.label, classNames?.label)}>{label}</label>}
      <article
        className={clx(
          classes.container,
          classNames?.container,
          hasSelectedImage && classes.selectedImageContainer,
          (isError || fileError) && classes.errorContainer,
          (isError || fileError) && "error",
        )}
      >
        {renderMedia()}
        <input
          type={"file"}
          accept={accept ?? ".png,.jpeg,.svg,.webp,.gif,.tiff,.x-icon,.pjpeg,.bmp,.apng"}
          className={classes.selectInput}
          ref={fileInputRef}
          onChange={handleSelectImage}
        />
      </article>
      {helperText && (
        <span className={clx(isError && classes.helperTextError, classNames?.helperText)}>
          {helperText}
        </span>
      )}
      {fileError && (
        <span className={clx(isError && classes.helperTextError, classNames?.helperText)}>
          {fileError}
        </span>
      )}
      {hasSelectedImage && (
        <>
          <p className={classNames?.text}>{value?.name}</p>
          <Button
            variant={"contained"}
            className={clx(classes.button, classNames?.changeFileButton)}
            onClick={handlePickImage}
            type="button"
          >
            Change Image
          </Button>
        </>
      )}
    </div>
  );
};
