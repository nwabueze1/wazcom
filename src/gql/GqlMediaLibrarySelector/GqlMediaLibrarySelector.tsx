import { FC, useState } from "react";
import { Modal, Fade, Backdrop, InputLabel } from "@mui/material";
import clx from "classnames";
import { useImageSelectorStyles } from "./styles";
import { GqlMediaLibrarySelectorProps } from "./types";
import { GqlMediaLibrary } from "../GqlMediaLibrary";
import { getSizeVariants } from "../../helpers/size";
import { displayFeedback } from "../../helpers/io";
import { Button } from "../../core";
import CameraAlt from "@mui/icons-material/CameraAlt";

export const GqlMediaLibrarySelector: FC<GqlMediaLibrarySelectorProps> = ({
    displayLibrary = false,
    variant = "square",
    size = "full",
    verbose,
    iconType,
    width,
    height,
    className,
    classNames,
    onChange,
    name,
    label,
    value,
    feedback,
    error,
    ...props
}) => {
    const classes = useImageSelectorStyles();
    const [, setShowIcon] = useState<boolean>(false);

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

    const handleRemoveImage = () => {
        setPlaceholder("");
        onChange?.({ name: name ?? "image", value: null });
    };

    const variants = getSizeVariants(classes, size);

    return (
        <div className={clx(className, classes.root)}>
            {label && (
                <InputLabel
                    className={(classNames?.label as string) ?? ""}
                    htmlFor={name as string}
                >
                    {label}
                </InputLabel>
            )}
            <div className={classes.imgUploadContainer}>
                <div
                    className={clx(
                        classes.container,
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
                                    handleClose={handleClose}
                                />
                            </div>
                        </Fade>
                    </Modal>
                    {iconType === "button" ? (
                        <Button
                            className={clx(classes.icon)}
                            variant="outlined"
                            onClick={handleOpen}
                        >
                            Upload Image
                        </Button>
                    ) : (
                        <CameraAlt
                            className={clx(classes.cameraIcon, variants[1])}
                            onClick={handleOpen}
                        />
                    )}
                </div>
                {placeholder && variant == "circle" && (
                    <Button
                        className={clx(classes.removeBtn, classNames?.removeBtn)}
                        variant="outlined"
                        onClick={handleRemoveImage}
                    >
                        Remove
                    </Button>
                )}
            </div>
            {feedback && displayFeedback(feedback)}
        </div>
    );
};
