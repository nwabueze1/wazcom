import { CommonProps } from "../types";
import { TextFieldProps as MuiTextFieldProps } from "@material-ui/core";

export type TextSchemaProps = {
  type: "text";
  props: TextProps;
};

/** !!-- Remember to update the interface name !! */
export type TextProps = CommonProps &
  MuiTextFieldProps & {
    source: string;
  };
