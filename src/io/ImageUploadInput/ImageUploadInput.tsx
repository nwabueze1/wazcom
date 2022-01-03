import React from "react";
import { Button } from "@mui/material";
import { useImageUploadStyles } from "./styles";
import { ImageUploadInputProps } from "./types";
import { AiFillCamera } from "react-icons/ai";

export const ImageUploadInput: React.FC<ImageUploadInputProps> = ({
  props,
  handleFile,
  file,
}) => {
  const id = Math.random();
  const classes = useImageUploadStyles(props);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          component="label"
          className={classes.uploadButton}
        >
          <input
            id="contained-button-file"
            type="file"
            accept="image/*"
            hidden
            name="image_url"
            onChange={handleFile}
          />
          <div className={classes.display}>
            {file ? (
              <div
                id={"image" + id}
                style={{
                  backgroundImage: `url(${
                    typeof file === "string"
                      ? file
                      : (window.URL || window.webkitURL).createObjectURL(file)
                  })`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                }}
                className={classes.uploadedImage}
              />
            ) : (
              <div className={classes.placeholder}>
                <AiFillCamera className={classes.placeholderImage} />
              </div>
            )}
          </div>
        </Button>
      </div>
    </div>
  );
};
