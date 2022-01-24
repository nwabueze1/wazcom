import { TextFieldProps } from "@mui/material";
import { CommonProps } from "../../types";

export type InputGroupProps = CommonProps & TextFieldProps & {
  variant: "fileinput" | "textfield",
  inverted: boolean

}
