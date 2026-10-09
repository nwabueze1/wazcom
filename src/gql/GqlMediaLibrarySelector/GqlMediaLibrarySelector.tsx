import { Backdrop, Fade, IconButton, InputLabel, Modal } from "@mui/material";
import { Button } from "../../core";
import clx from "classnames";
import { FC, useState } from "react";
import { GqlMediaLibrary } from "../GqlMediaLibrary/GqlMediaLibrary";
import { GqlMediaLibraryProps } from "../GqlMediaLibrary/types";
import { getSizeVariants } from "../../helpers/size";
import { useImageSelectorStyles } from "./styles";
import { GqlMediaLibrarySelectorProps } from "./types";
import { GqlImageCropper } from "../GqlImageCropper";
import { FaPlus } from "react-icons/fa";
import { createImageSrcset, imageSizes } from "../../io/WysiwygInput/Editor/helpers";
import { useDownloadImage } from "./hooks/download";

export const GqlMediaLibrarySelector: FC<
  GqlMediaLibrarySelectorProps &
    Partial<Pick<GqlMediaLibraryProps, "maxUploadImageSizeInMegabytes" | "checkUrlFormatOnUpload">>
> = ({
  variant = "square",
  size = "full",
  iconType,
  width,
  height,
  className,
  classNames,
  onChange,
  name = "image",
  label,
  showIcons = true,
  showActionsButton = false,
  value,
  helperText,
  isError,
  imageServiceDomain = "img.wazobia.tech",
  useServiceDomainOnUpload = false,
  useCropperOnUpload = false,
  isNewLayout = false,
  ...props
}) => {
  const classes = useImageSelectorStyles();
  const [, setShowIcon] = useState<boolean>(false);
  const [cropImage, setCropImage] = useState<Record<string, string>>();
  const [tabs, setTabs] = useState({ library: false, cropper: false });
  const isOpen = Object.values(tabs).includes(true);
  const downloadImage = useDownloadImage();
  const [isHover, setIsHover] = useState(false);

  const handleOpen = (tab: string) => {
    setTabs({ library: false, cropper: false, [tab]: true });
    if (tab !== "cropper") props?.onButtonClick?.("open-modal");
  };

  const handleClose = (tab: string) => {
    const tabs =
      tab === "all" || tab === "library"
        ? { library: false, cropper: false }
        : { library: true, cropper: false };
    setTabs({ ...tabs });
    if (tab === "all") props?.onButtonClick?.("close-modal");
  };

  const handleSelectImage = ({ value }: { name: string; value: any }) => {
    setCropImage(value);
    handleOpen("cropper");
  };

  const handleGenerateImage = ({ value }: { name: string; value: any }) => {
    if (value?.src?.includes("unsplash"))
      downloadImage(
        props?.config?.client,
        props?.config?.download?.name,
        "unsplash",
        value?.download_url,
      );

    delete value?.download_url;
    setCropImage(undefined);
    onChange?.({ name: name ?? "image", value });
    handleClose("all");
  };

  const handleEditImage = () => {
    setCropImage(undefined);
    props?.onButtonClick && handleOpen("library");
    handleOpen("cropper");
  };

  const handleRemoveImage = () => {
    onChange?.({ name: name ?? "image", value: null });
  };

  const variants = getSizeVariants(classes, size);

  const renderLayout = () =>
    isNewLayout ? (
      <div className={classes.layout2Container}>
        <Button
          className={classes.layout2Button}
          onClick={() => {
            !value?.src ? handleOpen("library") : handleEditImage();
          }}
        >
          {!value?.src ? "Add image" : "Change image"}
        </Button>
        {value && value?.src && isHover && (
          <div className={clx(classes.optionIconContainer, "right")}>
            <IconButton onClick={handleRemoveImage}>
              <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/trash.svg" />
            </IconButton>
          </div>
        )}
      </div>
    ) : iconType === "button" && !value?.src ? (
      <Button
        className={clx(classes.icon, isError && classes.imgUploadContainerError)}
        variant="outlined"
        onClick={() => {
          handleOpen("library");
        }}
      >
        Select Image
      </Button>
    ) : (
      showIcons && (
        <div className={classes.tools}>
          <div className={classes.optionIconContainer}>
            <IconButton
              onClick={() => {
                handleOpen("library");
              }}
            >
              <FaPlus className={classes.plusIcon} />
            </IconButton>
          </div>
          {value?.src && (
            <div className={classes.optionIconContainer}>
              <IconButton onClick={handleEditImage}>
                <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/edit-2.svg" />
              </IconButton>
            </div>
          )}
          <div className={classes.optionIconContainer}>
            <IconButton onClick={handleRemoveImage}>
              <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/trash.svg" />
            </IconButton>
          </div>
        </div>
      )
    );

  return (
    <div
      className={clx(className, classes.root)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {label && (
        <InputLabel
          className={clx(classes.label, classNames?.label as string)}
          htmlFor={name as string}
        >
          {label} {props?.required && <span className={classes.requiredStar}>*</span>}
        </InputLabel>
      )}
      <div className={clx(showActionsButton && classes.container)}>
        <div
          className={clx(
            classes.imgUploadContainer,
            classNames?.mediaLibrary,
            classNames?.flexDirection,
            variants[0],
          )}
        >
          <div
            className={clx(
              String(value?.src ?? "")?.trim() === ""
                ? classes.emptyContainer
                : classes.imageContainer,
              variant === "circle" && classes.circle,
              variants[0],
              classNames?.mediaLibrary,
              isError && classes.imgUploadContainerError,
            )}
            style={{
              width,
              height,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            onMouseEnter={() => setShowIcon(true)}
            onMouseLeave={() => setShowIcon(false)}
          >
            {value?.src && (
              <img
                className={`selector__${variant}`}
                src={value?.src}
                srcSet={createImageSrcset(value, false, imageServiceDomain)}
                sizes={imageSizes}
                width="100%"
              />
            )}
            {renderLayout()}
          </div>
          {helperText && <p className={classes.helperText}>{helperText}</p>}
        </div>
        {showActionsButton && (
          <div className={classes.actionsButton}>
            <Button className={classes.changeBtn} onClick={handleOpen}>
              {value && value.src?.length > 0 ? "Change" : "Upload"}
            </Button>
            {value && value.src?.length > 0 && (
              <Button onClick={handleRemoveImage} className={classes.actionRemoveBtn}>
                Remove
              </Button>
            )}
          </div>
        )}
      </div>
      <Modal
        open={isOpen}
        BackdropProps={{
          timeout: 500,
        }}
        closeAfterTransition
        onClose={() => {
          handleClose("all");
        }}
        onBackdropClick={(e) => e.stopPropagation()}
        className={classes.modal}
        BackdropComponent={Backdrop}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Fade in={isOpen}>
          <div className={classes.wrapper}>
            <GqlMediaLibrary
              config={{ ...props.config }}
              onChange={onChange}
              name={name}
              handleClose={(args = "all") => {
                handleClose(args);
              }}
              isSelector={true}
              library_uuid={props.library_uuid}
              onSelect={handleSelectImage}
              useServiceDomainOnUpload={useServiceDomainOnUpload}
              useCropperOnUpload={useCropperOnUpload}
              maxUploadImageSizeInMegabytes={props.maxUploadImageSizeInMegabytes}
              checkUrlFormatOnUpload={props.checkUrlFormatOnUpload}
            />
            {tabs.cropper && (
              <GqlImageCropper
                name={name}
                config={props.config}
                open={true}
                handleClose={(args) => {
                  handleClose(args ?? "cropper");
                }}
                value={{
                  ...(cropImage ?? value),
                  src: cropImage ? cropImage?.url : (value?.src as string),
                }}
                onChange={handleGenerateImage}
                screenConfig={props.screenConfig}
                imageServiceDomain={imageServiceDomain}
                useServiceDomainOnUpload={useServiceDomainOnUpload}
              />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
