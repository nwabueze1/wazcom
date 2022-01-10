import { CommonProps } from '../../types';
import { AutocompleteProps, TextFieldProps } from '@mui/material';
export declare type ComboBoxInputProps = CommonProps & AutocompleteProps<any, undefined, undefined, undefined> & TextFieldProps & {
    helperText?: string;
};
