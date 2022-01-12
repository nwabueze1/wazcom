import { CommonProps } from "../../types";
import { AutocompleteProps, TextFieldProps } from "@mui/material";
export declare type ComboBoxInputProps = CommonProps & Omit<AutocompleteProps<any, undefined, undefined, undefined>, "onChange"> & Omit<TextFieldProps, "onChange"> & {
    options: ComboBoxInputOptionProps[];
    value?: ComboBoxInputOptionProps;
    helperText?: string;
};
export declare type ComboBoxInputOptionProps = {
    label: string;
    value: string;
};
