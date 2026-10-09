import React, { useState } from "react";
import clx from "classnames";
import { MediaUploaderProps } from "./types";
import { Dialog, Button } from "../../../../core";
import { FaTimes } from "react-icons/fa";
import { useMediaUploaderStyles } from "./styles";
import { createMediaUpload, useDisplayImages } from "../../../GqlMediaLibrary/hooks";
import { ImageCropperValue, TScreen } from "../../../GqlImageCropper/types";
import { ImageUpdate } from "../../types";
import { parseImageCropperValue } from "../../../GqlImageCropper/helpers";

const MediaUploader: React.FC<MediaUploaderProps> = ({
  open,
  onChange,
  handleClose,
  mediaFiles,
  config,
  name,
}) => {
  const classes = useMediaUploaderStyles();

  const [loading, setLoading] = useState(false);

  const handleDisplayImages = useDisplayImages();
  const handleMediaUpload = createMediaUpload();

  const handleUpload = async () => {
    setLoading(true);
    const result = [];

    for (let i = 0; i < mediaFiles.length; i++) {
      const { file, ...value } = mediaFiles[i];
      const newImage = await handleGenerate(parseImageCropperValue(value), file!);
      result.push(newImage);
    }
    onChange?.({ name, value: result });
    setLoading(false);
    handleClose?.("cropper");
  };

  const handleMediaAdd = async (fileMedia: File, variables: ImageUpdate) => {
    const response = await handleMediaUpload(config.client, config.upload.name, {
      library_uuid: config.query.variables.library_uuid,
      image: fileMedia as File,
      ...variables,
    });
    return response;
  };

  const handleGenerate = async (
    value: ImageCropperValue & {
      screenType: TScreen;
    },
    fileMedia: File,
  ) => {
    const generatedValue = JSON.parse(
      JSON.stringify({
        ...value,
      }),
    );
    const new_variables = {
      title: generatedValue.name,
      caption: generatedValue.caption,
      alternative_text: generatedValue.alternative_text,
      metadata: generatedValue?.description
        ? { description: generatedValue.description }
        : undefined,
      image: fileMedia as File,
    };

    const imageResponse = await handleMediaAdd(fileMedia, new_variables);

    const image_data = {
      ...generatedValue,
      src: imageResponse?.url,
      original: imageResponse?.url,
      url: imageResponse.url,
    };

    return image_data;
  };

  return (
    <Dialog
      open={open}
      handleClose={() => {
        handleClose("cropper");
      }}
    >
      <div className={classes.mediaUploader}>
        <div className={classes.mediaUploaderHeadingContainer}>
          <div className={classes.mediaUploaderHeading}>
            <p className={classes.mediaUploaderTitle}>Upload Images</p>
            <FaTimes
              className={classes.mediaUploaderIcon}
              onClick={() => {
                handleClose("cropper");
              }}
            />
          </div>
        </div>

        <div className={classes.mediaUploaderComponentsContainer}>
          <div className={clx(classes.dialogueView)}>
            <div className={clx(classes.collection, classes.uploadViewWidth)}>
              {handleDisplayImages(
                mediaFiles.map((mediaFile, index) => ({
                  __typename: "Image",
                  id: `id_${index}`,
                  url: mediaFile.src,
                  title: mediaFile.name,
                  caption: mediaFile.caption,
                  alternative_text: mediaFile.alternative_text,
                  created_at: new Date().toISOString(),
                  uuid: `uuid_${index}`,
                  library_uuid: `library_uuid_${index}`,
                })),
                () => {},
                () => {},
                false,
                1,
              )}
            </div>
          </div>
        </div>
        <div className={classes.mediaUploaderButtonContainer}>
          <div className={classes.mediaUploaderButton}>
            <Button className={clx(classes.btn)} onClick={handleUpload} isLoading={loading}>
              Upload {mediaFiles.length} Images
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default MediaUploader;
