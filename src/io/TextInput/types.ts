import React from "react";
import { CommonProps } from "../../types";

export type PasswordValidatorProps = {
  isTouched?: boolean;
  label?: string;
  value?: string | undefined;
  limit?: number;
};

export type TextInputProps = TextFieldProps;

export type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type TextBaseProps = CommonProps & {
  classNames?: { [key: string]: string };

  helperText?: string;
  hideLabel?: boolean;
  info?: string;
  label?: string | JSX.Element;
  name?: string;
  required?: boolean;
  showCC?: boolean;
  isFocused?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  isValidated?: boolean;
  isNewLayout?: boolean;
  errors?: {
    message: string;
  }[];
  rows?: string | number;
  value?: any;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  iconSpacing?: string | number;
  children?: React.ReactNode;
  isNewInput?: boolean;
  width?: string | number;
  height?: string | number;
  background?: string;
  color?: string;
  borderWidth?: string | number;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string | number;

  onFocus?: (...args: any[]) => void;
  onEnter?: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
  onChange?: (...args: any[]) => void;
};

export type TextFieldProps = Omit<BaseInputProps, "onChange" | "onFocus" | "onEnter"> &
  TextBaseProps;
export type EmailInputProps = Omit<BaseInputProps, "onChange" | "onFocus" | "onEnter"> &
  TextBaseProps;
export type NumberInputProps = Omit<BaseInputProps, "onChange" | "onFocus" | "onEnter"> &
  TextBaseProps;

export type InputIconProps = {
  className?: Record<string, unknown>;
  children?: React.ReactNode | React.ReactElement | string;
  iconSpacing?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
};

export type TextInputIconStyleProps = {
  props?: Record<string, unknown> | string;
  marginLeft?: string | number;
  marginRight?: string | number;
};
