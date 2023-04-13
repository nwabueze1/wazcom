import { CommonProps } from "../../types";

export type ButtonViewProps = CommonProps & Record<string, unknown>;

export interface IIntitialButtonPropState {
  isDisabled: boolean;
  isLoading: boolean;
  variant: "contained" | "outlined" | "text";
  value: string;
  leftIcon: boolean;
  rightIcon: boolean;
  height: number;
  width: number;
  title: string;
}