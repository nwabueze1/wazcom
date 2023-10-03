import { CheckboxProps } from "@mui/material";
import { CommonProps } from "../../types";
import { ChangeEventHandler, FocusEventHandler } from "react";

export type CheckBoxInputProps = CommonProps &
  Omit<CheckboxProps, "onChange"> & {
    label?: string;
    value?: boolean;
    multiple?: boolean;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFormikChange?: ChangeEventHandler<HTMLInputElement>;
    labelPlacement?: "right" | "left";
  };
