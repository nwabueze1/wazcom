import { CommonProps } from "../../types";
import { SelectProps as MuiSelectProps } from "@mui/material";

export type SelectInputProps = CommonProps &
  Omit<MuiSelectProps, "onChange"> & {
    labelClassName?: string;
    options?: {
      label: string;
      value: string;
      subText?: string;
      icon?: React.FC<any>;
    }[];
  };
