import { SwitchProps as MuiToggleProps } from "@mui/material";
import { CommonProps } from "../../types";
export declare type ToggleInputProps = CommonProps & Omit<MuiToggleProps, "value" | "onChange"> & {
    label?: string;
    value?: boolean;
};
