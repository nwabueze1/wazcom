import { CheckboxProps } from "@mui/material";
import { Feedback } from "../../helpers/io";
import { CommonProps } from "../../types";

export type CheckBoxInputProps = CommonProps & CheckboxProps & {
  label?: string;
  labelClassName?: string;
  value?: boolean;
  feedback?: Feedback;
};
