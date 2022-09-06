import { CheckboxProps } from "@mui/material";
import { CommonProps } from "../../types";
export declare type CheckBoxInputProps = CommonProps & Omit<CheckboxProps, "onChange"> & {
    label?: string;
    value?: boolean;
};
