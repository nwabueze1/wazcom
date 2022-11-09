import { TextareaAutosizeProps } from "@mui/base";
import { CommonProps } from "../../types";
export declare type TextAreaProps = CommonProps & Omit<TextareaAutosizeProps, "onChange"> & {
    label?: string;
    error?: boolean;
};
