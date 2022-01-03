import { SelectProps as MuiSelectProps } from "@mui/material";

export type SelectProps = MuiSelectProps & {
  options?: {
    label: string;
    value: any;
  }[];
};
