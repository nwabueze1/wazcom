import { CommonProps } from "../../types";
import { SelectProps as MuiSelectProps } from "@mui/material";
export declare type SelectInputProps = CommonProps & Omit<MuiSelectProps, "onChange"> & {
    options?: {
        label: string;
        value: string;
    }[];
    feedback?: {
        text: string;
        status?: "success" | "neutral" | "error";
    };
};
