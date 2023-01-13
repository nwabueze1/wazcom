import { ModalProps as MuiModalProps } from "@mui/material";
import { CommonProps } from "types";
export type ModalProps = CommonProps & MuiModalProps & {
    open?: boolean;
    handleClose?: () => void;
};
