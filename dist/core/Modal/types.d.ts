import { ModalProps as MuiModalProps } from "@mui/material";
import { CommonProps } from "types";
export declare type ModalProps = CommonProps & MuiModalProps & {
    open?: boolean;
    handleClose?: () => void;
};
