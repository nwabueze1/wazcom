import { CommonProps } from "../../types";
import { AutocompleteProps } from "@mui/material";
import { Feedback } from "../../helpers/io";
export declare type ComboBoxInputProps = CommonProps & Omit<AutocompleteProps<any, undefined, undefined, undefined>, "onChange" | "renderInput"> & {
    error?: boolean;
    label?: string;
    labelClassName?: string;
    options: ComboBoxInputOptionProps[];
    value?: string;
    feedback?: Feedback;
};
export declare type ComboBoxInputOptionProps = {
    label: string;
    value: string;
};
