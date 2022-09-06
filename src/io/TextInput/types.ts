import { CommonProps } from "../../types";
import { TextFieldProps } from "@mui/material";

export type TextInputProps = CommonProps &
  Omit<TextFieldProps, 'onChange'> & {
    variant?: "filled" | "outlined" | "standard";
    icon?: JSX.Element;
  };
