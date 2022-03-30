import { CommonProps } from "../../types";
import { SelectProps as MuiSelectProps } from "@mui/material";
import { Feedback } from "../../helpers/io";

export type SelectInputProps = CommonProps &
  Omit<MuiSelectProps, "onChange"> & {
    labelClassName?: string;
    options?: {
      label: string;
      value: string;
    }[];
    feedback?: Feedback;
  };
