import { CommonProps } from "../../types";
import { SelectProps as MuiSelectProps } from "@mui/material";
export declare type SelectInputProps = CommonProps & MuiSelectProps & {
    options?: {
        label: string;
        value: string;
    }[];
};
