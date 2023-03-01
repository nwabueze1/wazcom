import { ReactElement, ReactNode } from "react";

export type ButtonProps = {
  type?: any;
  isLoading?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  className?: any;
  children: ReactNode;
  variant?: string;
  iconSpacing?: string | number;
  size?: string | number;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;

  onClick?: (e: any) => any;
  onFocus?: (e: any) => any;
  onBur?: (e: any) => any;
};

export type ButtonContentProps = {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  iconSpacing?: string | number;
  width?: string | number;
  height?: string | number;
  children?: ReactNode;
  variant?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
};

export type ButtonIconProps = {
  className?: object;
  children?: ReactNode;
  iconSpacing?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
};

export type ButtonIconStyleProps = {
  props?: object | string;
  marginLeft?: string | number;
  marginRight?: string | number;
  width?: string | number;
  height?: string | number;
};

export type ButtonStyleProps = {
  variant?: string;
  props?: object | string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  isDisabled?: boolean;
  isLoading?: boolean;
  isFocused?: boolean;
};
