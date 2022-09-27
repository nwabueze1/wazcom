/// <reference types="react" />
import { CommonProps } from "../../types";
import { SelectProps as MuiSelectProps } from "@mui/material";
export declare type SelectInputProps = CommonProps & Omit<MuiSelectProps, "onChange"> & {
    labelClassName?: string;
    options?: {
        label: string;
        value: string;
        subText?: string;
        icon?: React.FC<any>;
    }[];
};
