import { CommonProps } from "../../types";
import { AutocompleteProps } from "@mui/material";

export type ComboBoxInputProps = CommonProps &
    Omit<AutocompleteProps<any, undefined, undefined, true>, "onChange" | "renderInput"> & {
        isAdd?: boolean;
        error?: boolean;
        label?: string;
        options: ComboBoxInputOptionProps[];
        value: {category?: string, subCategory?:string[]} | string
    };

export type ComboBoxInputOptionProps = {
    label: string;
    value: any;
    subText?: string;
};
