import { ButtonProps as MuiButtonProps } from "@material-ui/core";

export type ButtonProps = MuiButtonProps;

export interface ButtonDimension extends ButtonProps {
    dimension ?: {
        width: string;
        height: string;
      };
}

export interface ButtonStyleProps {
  dimension ?: {
    width: string;
    height: string;
  };
}
