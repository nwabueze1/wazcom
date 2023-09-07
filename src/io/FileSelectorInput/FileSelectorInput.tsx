import { ChangeEvent, FC, useRef, useState } from "react";
import { FileSelectorInputPropsType } from "./type";
import { useFileSelectorInputStyles } from "./useFileSelectorInputStyles";
import { validateFileBySize } from "../ImageSelectorInput";
import clx from "classnames";
import { Button } from "../../core";

export const FileSelectorInput: FC<FileSelectorInputPropsType> = ({
  name,
  value,
  isError,
  onChange,
  helperText,
  accept,
  label,
  min_size_kb,
  max_size_mb,
}) => {
  const classes = useFileSelectorInputStyles();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileError, setFileError] = useState<string | undefined>(undefined);
  const [fileSource, setFileSource] = useState<string>(() => {
    if (!value) return "";
    return URL.createObjectURL(value);
  });
  const hasSelectedFile = fileSource.length > 0;
  const handlePickFile = () => {
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
          hasSelectedFile && classes.selectedImageContainer,
          (isError || fileError) && classes.errorContainer,
        )}
      >
        <button
          className={classes.selectButton}
          onClick={!hasSelectedFile ? handlePickFile : undefined}
        >
          Select a file
        </button>
        <input
          type={"file"}
          accept={accept}
          className={classes.selectInput}
          ref={fileInputRef}
          onChange={handleSelectImage}
        />
      </article>
      {helperText && <span className={clx(isError && classes.helperTextError)}>{helperText}</span>}
      {fileError && <span className={clx(isError && classes.helperTextError)}>{fileError}</span>}
      {hasSelectedFile && (
        <>
          <p>{value?.name}</p>
          <Button variant={"contained"} className={classes.button} onClick={handlePickFile}>
            Change file
          </Button>
        </>
      )}
    </div>
  );
};
