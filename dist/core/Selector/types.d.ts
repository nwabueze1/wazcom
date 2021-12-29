import { CommonProps } from "../types";
import { SelectProps } from "@mui/material";
export declare type SelectorProps = SelectProps & CommonProps & {
    name: string;
    label?: string;
    value?: string;
    error: boolean;
    disabled?: boolean;
    items: Array<string>;
    defaultOption: string;
};
