import { CommonProps } from '../../types';
import { AutocompleteProps, TextFieldProps } from '@mui/material'

export type ComboBoxInputProps = CommonProps & AutocompleteProps<any, undefined, undefined, undefined> & TextFieldProps & {
  helperText?: string;
}
