import { CommonProps } from "../../types";
import { OutlinedInputProps } from "@mui/material";

export type TextInputProps = CommonProps &
  OutlinedInputProps & {
    icon?: JSX.Element;
  } & any;
