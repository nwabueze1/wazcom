import { FC } from "react";
import { useAddMediaStyles } from "./styles";
import { Button } from "../../../../core";
import { Modal } from "@mui/material";
import { AddMediaProps } from "./types";
import { UploadDialog } from "./UploadDialog";
import clx from "classnames";

export const AddMedia: FC<AddMediaProps> = ({
    handleFilesSelection,
    handleOpenMedia,
    handleCloseMedia,
    viewOnly,
    handleMediaAction,
    className,
    buttonText,
}) => {
    const classes = useAddMediaStyles();
    const handleOpen = () => handleCloseMedia(true);
    const handleClose = () => handleCloseMedia(false);

    return (
        <div>
            {!viewOnly && (
                <Button onClick={handleOpen} className={clx(classes.btn, className)}>
                    {buttonText}
                </Button>
            )}
            <Modal className={classes.modalBox} open={handleOpenMedia} onClose={handleClose}>
                <UploadDialog
                    handleCloseMedia={handleCloseMedia}
                    handleFilesSelection={handleFilesSelection}
                    handleMediaAction={handleMediaAction}
                />
            </Modal>
        </div>
    );
};
