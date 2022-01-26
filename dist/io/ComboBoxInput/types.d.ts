import { CommonProps } from "../../types";
import { AutocompleteProps } from "@mui/material";
export declare type ComboBoxInputProps = CommonProps & Omit<AutocompleteProps<any, undefined, undefined, undefined>, "onChange" | "renderInput"> & {
    label?: string;
    options: ComboBoxInputOptionProps[];
    value?: string;
    helperText?: string;
};
export declare type ComboBoxInputOptionProps = {
    label: string;
    value: string;
};
