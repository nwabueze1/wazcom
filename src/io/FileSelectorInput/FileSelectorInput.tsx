import { ChangeEvent, FC, useRef, useState } from "react";
import { FileSelectorInputPropsType } from "./type";
import { useFileSelectorInputStyles } from "./useFileSelectorInputStyles";
import { validateFileBySize } from "../ImageSelectorInput";
import clx from "classnames";
import { Button } from "../../core";
import { shortenFileName } from "./helper";
import { CircularProgress } from "@mui/material";

export const FileSelectorInput: FC<FileSelectorInputPropsType> = ({
  name,
  value,
  isError,
  onChange,
  helperText,
  accept = "*",
  label,
  min_size_kb,
  max_size_mb,
  loading,
  uploadFn,
  classNames,
}) => {
  const classes = useFileSelectorInputStyles();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileError, setFileError] = useState<string | undefined>(undefined);
  const [file, setFile] = useState<File | null>(null);
  const hasSelectedFile = file !== null;

  const handlePickFile = () => {
    fileInputRef.current?.click();
  };

  const handleSelectFile = async (e: ChangeEvent<HTMLInputElement>) => {
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
        setFile(selectedFile);
        return;
      }
      setFile(null);
      return;
    }
    onChange?.({ name, value: selectedFile });
    setFile(selectedFile);
  };

  const renderBlock = () => {
    if (loading)
      return (
        <div className={classes.fileNameContainer}>
          <p className={classNames?.text}>Saving file ...</p>
          <CircularProgress size={14} color="inherit" />
        </div>
      );

    return (
      <>
        {!hasSelectedFile && (
          <button
            className={clx(
              classes.selectButton,
              hasSelectedFile && "active",
              classNames?.selectButton,
            )}
            onClick={!hasSelectedFile ? handlePickFile : undefined}
          >
            Select a file
          </button>
        )}
        {hasSelectedFile && (
          <p className={classNames?.text}>{shortenFileName(value?.name || file?.name)}</p>
        )}
        {hasSelectedFile && (
          <>
            <p className={(classes.selectedFileName, classNames?.text)}>{value?.name}</p>
            <Button
              variant={"contained"}
              className={clx(classes.button, classNames?.changeFileButton)}
              onClick={handlePickFile}
            >
              Change file
            </Button>
          </>
        )}
      </>
    );
  };

  return (
    <div className={classes.root}>
      {label && <label className={clx(classes.label, classNames?.label)}>{label}</label>}
      <div className={classes.fileNameContainer}>{renderBlock()}</div>
      <input
        type={"file"}
        accept={accept}
        className={classes.selectInput}
        ref={fileInputRef}
        onChange={handleSelectFile}
      />
      {helperText && (
        <span
          className={clx(
            isError && classes.helperTextError,
            classNames?.helperText,
            isError && "error",
          )}
        >
          {helperText}
        </span>
      )}
      {fileError && (
        <span
          className={clx(
            isError && classes.helperTextError,
            classNames?.helperText,
            isError && "error",
          )}
        >
          {fileError}
        </span>
      )}
    </div>
  );
};
