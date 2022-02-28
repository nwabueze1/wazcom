import { FC, useState } from "react";
import { Modal, Fade, Backdrop, InputLabel, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import clx from "classnames";
import { useImageSelectorStyles } from "./styles";
import { GqlMediaLibrarySelectorProps } from "./types";
import { GqlMediaLibrary } from "../GqlMediaLibrary";
import { getSizeVariants } from "../../helpers/size";
import { getFeedbackVariant } from "../../helpers/io";

export const GqlMediaLibrarySelector: FC<GqlMediaLibrarySelectorProps> = ({
  displayLibrary = false,
  variant = "circle",
  size = "sm",
  verbose,
  width,
  height,
  className,
  onChange,
  name,
  label,
  value,
  feedback,
  error,
  ...props
}) => {
  const classes = useImageSelectorStyles();
  const [showIcon, setShowIcon] = useState<boolean>(false);

  const [placeholder, setPlaceholder] = useState<string>(value || "");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectImage = ({ name, value }: { name: string; value: any }) => {
    setOpen(false);
    setPlaceholder(value.url);
    onChange?.({ name: name ?? "image", value: verbose ? value : value.url });
  };

  const variants = getSizeVariants(classes, size);

  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={name as string}>
          {label}
        </InputLabel>
      )}
      <div
        className={clx(
          classes.container,
          className,
          variant === "circle" && classes.circle,
          variants[0],
          error && classes.error,
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
            <div className={classes.wrapper}>
              <GqlMediaLibrary
                config={{ ...props.config }}
                onChange={handleSelectImage}
                name={name}
              />
            </div>
          </Fade>
        </Modal>
        <Fade in={showIcon}>
          <CameraAltIcon
            className={clx(classes.icon, variants[1])}
            onClick={handleOpen}
          />
        </Fade>
      </div>
      {feedback && (
        <Typography
          className={clx(
            classes.feedback,
            getFeedbackVariant(classes, feedback),
          )}
        >
          {feedback.text}
        </Typography>
      )}
    </div>
  );
};
