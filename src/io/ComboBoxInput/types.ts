import { CommonProps } from "../../types";
import { AutocompleteProps } from "@mui/material";

export type ComboBoxInputProps = CommonProps &
  Omit<
    AutocompleteProps<any, undefined, undefined, undefined>,
    "onChange" | "renderInput"
  > & {
    error?: boolean;
    label?: string;
    options: ComboBoxInputOptionProps[];
    value?: string;
    feedback?: {
      text: string;
      status?: "success" | "neutral" | "error";
    };
  };

export type ComboBoxInputOptionProps = { label: string; value: string };
