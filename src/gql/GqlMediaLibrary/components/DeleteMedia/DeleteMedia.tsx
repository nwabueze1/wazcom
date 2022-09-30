import React from "react";
import { Modal, Fade, Backdrop } from "@mui/material";
import { useDeleteMediaStyles } from "./styles";
import { DeleteMediaProps } from "./types";
import { FaTimes } from "react-icons/fa";
import { Button } from "../../../../core";

export const DeleteMedia: React.FC<DeleteMediaProps> = ({
    display,
    loading,
    handleClose,
    handleDelete,
}) => {
    const classes = useDeleteMediaStyles();

    return (
        <Modal
            open={display}
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
            <Fade in={display} className={classes.wrapper}>
                <div>
                    <div className={classes.deleteHeading}>
                        <p className={classes.deleteHeadingText}>Remove Image?</p>
                        <FaTimes onClick={handleClose} className={classes.deleteHeadingIcon} />
                    </div>
                    <div className={classes.deleteContent}>
                        <p className={classes.deleteContentText}>
                            Are you sure you want to delete this image?
                        </p>
                        <div className={classes.deleteActions}>
                            <Button onClick={handleDelete} loading={loading}>
                                Delete
                            </Button>
                            <Button onClick={handleClose}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
};
