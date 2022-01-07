import { SelectProps as MuiSelectProps } from "@mui/material";

export type SelectInputProps = MuiSelectProps & {
  options?: {
    label: string;
    value: any;
  }[];
};
