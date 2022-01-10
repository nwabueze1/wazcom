import { CommonProps } from '../../types';
import { AutocompleteProps, TextFieldProps } from "@mui/material";
export declare type TagInputProps = CommonProps & AutocompleteProps<any, undefined, undefined, undefined> & TextFieldProps & {
    tags: string[];
};
