import { CheckboxProps } from "@mui/material";
import { CommonProps } from "../../types";
import { FocusEventHandler } from "react";

export type CheckBoxInputProps = CommonProps &
  Omit<CheckboxProps, "onChange"> & {
    label?: string;
    value?: boolean;
    multiple?: boolean;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    labelPlacement?: "right" | "left";
  };
