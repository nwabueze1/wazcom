import React from "react";
import { Button } from "@material-ui/core";
import { useImageUploadStyles } from "./styles";
import { ImageUploadProps } from "./types";
import { AiFillCamera } from "react-icons/ai";
import { IsRequired } from "../Common/isRequired/isRequired";

export const ImageUpload: React.FC<ImageUploadProps> = ({
  props,
  fileName,
  handleFile,
  file,
  error,
}) => {
  const classes = useImageUploadStyles(props);
  const id = Math.random();

  // const readFile = (file:File) => {
  //   const reader = new FileReader();
  //   reader.onload = function (e) {
  //     const image = document.getElementById('image' + id);
  //     if(image)
  //   }
  // }

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          component="label"
          className={classes.uploadButton}
          classes={{
            label: classes.buttonLabel,
          }}
        >
          <input
            accept="image/*"
            hidden
            name="image_url"
            id="contained-button-file"
            type="file"
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
        <>
          {error ? (
            <IsRequired error={error} name={"The image"} />
          ) : (
            <>
              {fileName ? (
                <div className={classes.imgNameContainer}>
                  <p className={classes.imgName}>{fileName}</p>
                  <span className={classes.changeButton}>
                    Click on image to change image
                  </span>
                </div>
              ) : null}
            </>
          )}
        </>
      </div>
    </div>
  );
};
