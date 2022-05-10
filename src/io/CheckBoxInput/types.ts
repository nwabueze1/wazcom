import { CheckboxProps } from "@mui/material";
import { CommonProps } from "../../types";

export type CheckBoxInputProps = CommonProps &
  Omit<CheckboxProps, "onChange"> & {
    label?: string;
    value?: boolean;
  };
