import { FC, useCallback, useRef, useState } from "react";
import { Modal, Fade, Backdrop } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import clx from "classnames";
import { useImageSelectorStyles } from "./styles";
import { GqlMediaLibrarySelectorProps } from "./types";
import { GqlMediaLibrary, ImageDataType } from "gql";

export const GqlMediaLibrarySelector: FC<GqlMediaLibrarySelectorProps> = ({
  displayLibrary = false,
  variant = "circle",
  size = "sm",
  width,
  height,
  className,
  onChange,
  name,
  ...props
}) => {
  const listInnerRef = useRef<HTMLDivElement>(null);
  const classes = useImageSelectorStyles();
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [mediaIndex, setMediaIndex] = useState<number>(0);
  const [placeholder, setPlaceholder] = useState<string>();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectImage = (data: ImageDataType) => {
    handleClose();
    setPlaceholder(data.url);
  };

  const getSizeVariants = () => {
    let sizeVariants;

    switch (size) {
      case "sm":
        sizeVariants = [classes.sizeSm, classes.cameraIconSm];
        break;
      case "md":
        sizeVariants = [classes.sizeMd, classes.cameraIconMd];
        break;
      case "lg":
        sizeVariants = [classes.sizeLg, classes.cameraIconLg];
        break;
      case "xl":
        sizeVariants = [classes.sizeXl, classes.cameraIconXl];
        break;
      default:
        sizeVariants = [classes.sizeMd, classes.cameraIconMd];
        break;
    }

    return sizeVariants;
  };

  const variants = getSizeVariants();

  const onScroll = useCallback(() => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setMediaIndex(Math.random() * 5000);
      }
    }
  }, [mediaIndex]);

  return (
    <div
      className={clx(
        classes.container,
        className,
        variant === "circle" && classes.circle,
        variants[0],
      )}
      style={{ backgroundImage: `url(${placeholder})`, width, height }}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      onClick={() => {
        if (displayLibrary) return;
        handleOpen();
      }}
    >
      <Modal
        open={open}
        BackdropProps={{
          timeout: 500,
        }}
        closeAfterTransition
        onClose={handleClose}
        onBackdropClick={(e) => e.stopPropagation()}
        className={classes.modal}
        BackdropComponent={Backdrop}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Fade in={open}>
          <div
            className={classes.wrapper}
            ref={listInnerRef}
            onScroll={() => {
              onScroll();
            }}
          >
            <GqlMediaLibrary
              config={{ ...props.config }}
              onImageSelect={handleSelectImage}
              refetch={mediaIndex}
              onChange={onChange}
              name={name}
            />
          </div>
        </Fade>
      </Modal>
      <Fade in={showIcon}>
        <CameraAltIcon className={classes.icon} onClick={handleOpen} />
      </Fade>
    </div>
  );
};
