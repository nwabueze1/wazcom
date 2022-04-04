import { CheckboxProps } from "@mui/material";
import { CommonProps } from "../../types";

export type CheckBoxInputProps = CommonProps & CheckboxProps & {
  label?: string;
  value?: boolean;
};
