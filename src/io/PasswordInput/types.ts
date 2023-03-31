import React from "react";
import { TextBaseProps } from "../TextInput";

export type ConfigProps = {
  uppercase: {
    limit?: number;
    required?: boolean;
  };
  symbol: {
    limit?: number;
    required?: boolean;
  };
  length: {
    limit?: number;
    required?: boolean;
  };
  digit: {
    limit?: number;
    required?: boolean;
  };
};

export type PasswordValidatorProps = {
  isTouched?: boolean;
  value?: string | undefined;
  config: ConfigProps;
};

export type UsePasswordValidationProps = {
  value: string;
  config: ConfigProps;
};

export type TextInputProps = TextFieldProps;

export type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>;

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
