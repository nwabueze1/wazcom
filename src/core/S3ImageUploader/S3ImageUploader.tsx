import { ImageUploadInput } from "../../io/ImageUploadInput";
import { validateImg } from "../../helpers/imageValidator";
import { FC, useCallback, useState } from "react";
import * as React from "react";
import { useMenuStyles } from "./styles";
import { S3ImageUploaderProps } from "./types";

export const S3ImageUploader: FC<S3ImageUploaderProps> = () => {
  const classes = useMenuStyles();
  const [file, setFile] = useState();

  const handleFile = useCallback((e: React.ChangeEvent<any>) => {
    const file = e?.target?.files[0];
    if (file) {
      if (validateImg(file)) {
        setFile(file);
      }
    }
  }, []);

  return (
    <div className={classes.root}>
      <ImageUploadInput
        file={file?.["url"]}
        fileName={file?.["name"]}
        handleFile={handleFile}
      />
    </div>
  );
};
