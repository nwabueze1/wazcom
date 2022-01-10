import { CommonProps } from "../../types";
import { SelectProps as MuiSelectProps } from "@mui/material";

export type SelectInputProps = CommonProps & MuiSelectProps & {
  options?: {
    label: string;
    value: string;
  }[];
};
