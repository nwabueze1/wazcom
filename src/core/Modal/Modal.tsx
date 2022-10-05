import React from "react";
import { ModalProps } from "./types";
import { Fade, Modal as MuiModal, Backdrop } from "@mui/material";

export const Modal: React.FC<ModalProps> = ({ className, open, children, handleClose }) => {
    return (
        <MuiModal
            open={open}
            BackdropProps={{
                timeout: 500,
            }}
            closeAfterTransition
            onClose={() => {
                handleClose?.();
            }}
            onBackdropClick={(e) => e.stopPropagation()}
            className={className}
            BackdropComponent={Backdrop}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
        >
            <Fade in={open}>{children}</Fade>
        </MuiModal>
    );
};
