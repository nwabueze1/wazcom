import { CommonProps } from "../types";
import { ButtonProps as MuiButtonProps } from "@material-ui/core";

type StyleProps = {
  align?: "right" | "left";
};

export type ButtonSchemaProps = {
  type: "button";
  props: ButtonProps;
};

/** !!-- Remember to update the interface name !! */
export type ButtonProps = CommonProps &
  StyleProps &
  MuiButtonProps & {
    name?: string;
    loading?: boolean;
  };
