import { CommonProps } from "../types";
import { OutlinedInputProps, InputLabelProps } from "@material-ui/core";

export type TextSchemaProps = {
  type: "text";
  props: TextProps;
};

/** !!-- Remember to update the interface name !! */
export type TextProps = CommonProps &
  InputLabelProps &
  OutlinedInputProps & {
    source: string;
  };
