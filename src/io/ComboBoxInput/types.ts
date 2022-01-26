import { CommonProps } from "../../types";
import { AutocompleteProps } from "@mui/material";

export type ComboBoxInputProps = CommonProps &
  Omit<AutocompleteProps<any, undefined, undefined, undefined>, "onChange" | "renderInput"> & {
    label?: string;
    options: ComboBoxInputOptionProps[];
    value?: string;
    helperText?: string;
  };

export type ComboBoxInputOptionProps = { label: string; value: string };
