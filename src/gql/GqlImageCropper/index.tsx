import { FC, useState } from "react";
import { Dialog, Button } from "../../core";
import { ImageCropperProps, TCoordinates, TScreen } from "./types";
import { useImageCropperStyles } from "./styles";
import { FaTimes } from "react-icons/fa";
import clx from "classnames";
import { ImageProperty } from "./components/ImageProperty/ImageProperty";
import { CropAndSize } from "./components/CropAndSize/CropAndSize";
import { CropImage } from "./components/CropImage";
import { generateModifiedSrc, parseImageCropperValue, tabs } from "./helpers";
import { Coordinates } from "react-advanced-cropper";
import { createMediaUpload, updateMediaUpload } from "../GqlMediaLibrary/hooks";
import { ImageUpdate } from "../GqlMediaLibrary";
import { isEqual } from "lodash";

export const GqlImageCropper: FC<ImageCropperProps> = ({
  open,
  value: initialValue,
  onChange,
  handleClose,
  screenConfig,
  fileMedia,
  config,
  name,
  imageServiceDomain,
}) => {
  const classes = useImageCropperStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [dimensions, setDimensions] = useState<Record<"width" | "height", number>>({
    width: initialValue["width"] ?? 0,
    height: initialValue["height"] ?? 0,
  });
  const [value, setValue] = useState(parseImageCropperValue(initialValue));
  const [loading, setLoading] = useState(false);
  const handleMediaUpload = createMediaUpload();
  const handleMediaUpdateHelper = updateMediaUpload();

  const setCoordinates = (coordinates: Coordinates) => {
    const typedCoordinates = value["coordinates"] as TCoordinates;
    const newValue = {
      ...value,
      coordinates: {
        ...typedCoordinates,
        [value.screenType]: {
          ...typedCoordinates[value.screenType],
          ...coordinates,
        },
      },
    };
    setValue(newValue);
  };

  const handleValueChange = (field: string, result: string) => {
    const newValue = { ...value, [field]: result };
    setValue(newValue);
  };

  const handleMediaAdd = async (variables: ImageUpdate) => {
    setLoading(true);

    const response = await handleMediaUpload(config.client, config.upload.name, {
      library_uuid: config.query.variables.library_uuid,
      image: fileMedia as File,
      ...variables,
    });
    setLoading(false);
    return response;
  };

  const handleMediaUpdate = async (variables: Record<string, string>) => {
    const parsedVariables = JSON.parse(JSON.stringify(variables));

    if (parsedVariables?.description) {
      parsedVariables["metadata"] = {
        description: parsedVariables?.description,
      };
      delete parsedVariables?.description;
    }

    handleMediaUpdateHelper(config.client, config.update!.name, parsedVariables);
  };

  const handleGenerate = async () => {
    const generatedCoordinates: Record<string, any> = {};
    const typedCoordinates = value["coordinates"] as TCoordinates;

    Object.keys(typedCoordinates).forEach((key) => {
      const coordinates = typedCoordinates[key as TScreen];

      if (
        !coordinates["width"] === undefined ||
        !coordinates["height"] === undefined ||
        !coordinates["left"] === undefined ||
        !coordinates["top"] === undefined
      )
        return;

      generatedCoordinates[key] = {
        left: Number((coordinates["left"] / dimensions.width).toFixed(2)),
        top: Number((coordinates["top"] / dimensions.width).toFixed(2)),
        right: Number(((coordinates["left"] + coordinates["width"]) / dimensions.width).toFixed(2)),
        bottom: Number(
          ((coordinates["top"] + coordinates["height"]) / dimensions.width).toFixed(2),
        ),
      };
    });

    const generatedValue = JSON.parse(
      JSON.stringify({
        ...value,
        ...dimensions,
        coordinates: generatedCoordinates,
      }),
    );
    const new_variables = {
      uuid: generatedValue.uuid,
      title: generatedValue.name,
      caption: generatedValue.caption,
      alternative_text: generatedValue.alternative_text,
      metadata: generatedValue?.description
        ? { description: generatedValue.description }
        : undefined,
      image: fileMedia as File,
    };

    let imageUrl = value?.src;

    if (fileMedia) {
      const imageResponse = await handleMediaAdd(new_variables);
      imageUrl = imageResponse?.url;
    }

    const image_data = {
      ...generatedValue,
      src: generateModifiedSrc(
        imageUrl,
        dimensions.width,
        generatedValue.coordinates,
        imageServiceDomain,
      ),
      original: imageUrl,
    };

    if (!fileMedia && image_data?.uuid) {
      const initialImageInfo = {
        title: initialValue?.name,
        alternative_text: initialValue?.alternative_text,
        caption: initialValue?.caption,
        description: initialValue?.description,
      };
      const currentImageInfo = {
        title: image_data?.name,
        alternative_text: image_data?.alternative_text,
        caption: image_data?.caption,
        description: image_data?.description,
      };

      if (!isEqual(initialImageInfo, currentImageInfo)) {
        handleMediaUpdate({ ...currentImageInfo, uuid: image_data?.uuid });
      }
    }

    onChange?.({ name, value: image_data });
    handleClose?.("all");
  };

  return (
    <>
      <Dialog open={open} handleClose={handleClose}>
        <div className={classes.imageDialog}>
          <div className={classes.imageDialogHeadingContainer}>
            <div className={classes.imageDialogHeading}>
              <p className={classes.imageDialogTitle}>Edit Image</p>
              <FaTimes
                className={classes.imageDialogIcon}
                onClick={() => handleClose?.("cropper")}
              />
            </div>
          </div>

          <div className={classes.imageDialogComponentsContainer}>
            <div className={classes.imageDialogCropSection}>
              <CropImage
                src={value.src}
                screenType={value.screenType}
                coordinates={(value.coordinates as TCoordinates)[value.screenType]}
                setCoordinates={setCoordinates}
                setDimensions={setDimensions}
                isEdit={Object.keys(initialValue).length > 1}
                activeScreenConfig={screenConfig?.[value.screenType]}
              />
            </div>
            <div className={classes.imageDialogConfigSection}>
              <div className={classes.configTabs}>
                {tabs.map((tab, index) => (
                  <>
                    <div
                      className={clx(
                        classes.configTab,
                        activeTab === index && classes.activeConfigTab,
                      )}
                      key={index}
                      onClick={() => {
                        setActiveTab(index);
                      }}
                    >
                      <p
                        className={clx(
                          classes.tabName,
                          activeTab === index && classes.activeTabName,
                        )}
                      >
                        {tab}
                      </p>
                    </div>
                  </>
                ))}
              </div>
              {activeTab === 0 && (
                <ImageProperty
                  form={{
                    name: value.name ?? "",
                    description: value?.description ?? "",
                    alternative_text: value?.alternative_text ?? "",
                    caption: value?.caption ?? "",
                  }}
                  handleChange={handleValueChange}
                />
              )}
              {activeTab === 1 && (
                <CropAndSize screenType={value.screenType} handleChange={handleValueChange} />
              )}
              <Button
                onClick={handleGenerate}
                className={clx(classes.btn)}
                isLoading={loading}
                type={"button"}
              >
                Apply Changes
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
