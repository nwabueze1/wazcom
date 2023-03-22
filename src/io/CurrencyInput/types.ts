import React from "react";
import { CommonProps } from "../../types";

export type CurrencyBaseProps = CommonProps & {
  helperText?: string;
  variant?: string;
  hideLabel?: boolean;
  info?: string;
  label?: string;
  name?: string;
  required?: boolean;
  showCC?: boolean;
  isFocused?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  isValidated?: boolean;
  isSelectCurrency?: boolean;
  errors?: {
    message: string;
  }[];
  rows?: string | number;
  value?: any;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  iconSpacing?: string | number;
  children?: React.ReactNode;

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

export type CurrencyInputProps = CurrencyBaseProps &
  InputProps & {
    variant: "basic" | "vertical" | "horizontal";
    currency?: string | string[];
    placeholder?: string;
    label?: string;
    className?: string;
    max?: number;
    onValueChange?: (value: number) => void;
    value?: number;
    type?: string;
  };

export type InputProps = {
  inputmode?: string;
  inputProps?: any;
  maskOptions?: {
    prefix?: string;
    suffix?: string;
    includeThousandsSeparator?: boolean;
    thousandsSeparatorSymbol?: string;
    allowDecimal?: boolean;
    decimalSymbol?: string;
    decimalLimit?: string;
    requireDecimal?: boolean;
    allowNegative?: boolean;
    allowLeadingZeroes?: boolean;
    integerLimit?: number;
  };
};

export type CurrencyIconProps = {
  className?: Record<string, unknown> | string;
  children?: React.ReactNode | React.ReactElement | string;
  iconSpacing?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
};

export type CurrencyIconStyleProps = {
  props?: Record<string, unknown> | string;
  marginLeft?: string | number;
  marginRight?: string | number;
};
