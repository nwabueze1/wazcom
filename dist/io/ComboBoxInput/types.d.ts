import { CommonProps } from "../../types";
import { AutocompleteProps } from "@mui/material";
export declare type ComboBoxInputProps = CommonProps & Omit<AutocompleteProps<any, undefined, undefined, undefined>, "onChange" | "renderInput"> & {
    isAdd?: boolean;
    error?: boolean;
    label?: string;
    options: ComboBoxInputOptionProps[];
    value?: string;
};
export declare type ComboBoxInputOptionProps = {
    label: string;
    value: string;
    subText?: string;
};
