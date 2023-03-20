import { CheckboxProps } from "@mui/material";
import { CommonProps } from "../../types";


export type CheckInputProps = {
  checkedBackground?: string;
  unCheckedBackground?: string;
  iconSize?: number;
  width?: number;
  height?: number
}

export type CheckBoxInputProps = CommonProps &
  Omit<CheckboxProps, "onChange"> & CheckInputProps & {
    label?: string;
    value?: boolean;
    showLabel?: boolean,
    labelTitle?: string
  };
