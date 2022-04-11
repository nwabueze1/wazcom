import { CommonProps } from "../../types";
import { TextFieldProps } from "@mui/material";

export type TextInputProps = CommonProps &
  TextFieldProps & {
    icon?: JSX.Element;
  } & any;
