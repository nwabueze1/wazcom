import { CommonProps } from '../../types';
import { AutocompleteProps, TextFieldProps } from "@mui/material";

export type TagInputProps = CommonProps &
  AutocompleteProps<any, undefined, undefined, undefined> &
  TextFieldProps & {
    tags: string[]
  }
   