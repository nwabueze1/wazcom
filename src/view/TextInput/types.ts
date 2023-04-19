import { CommonProps } from "../../types";
export type TextInputViewProps = CommonProps;

export type InputDataProps = {
  name: string;
  label: string;
  placeholder: string;
  helperText: string;
  isError?: boolean;
  isSuccess?: boolean;
  errors?: {
    message?: string;
  }[];
};

export type ChangeFn = (e: { name: string; value: string }) => void;

export type TextInputContextDataType = {
  isError: boolean;
  isSuccess: boolean;
  helperText: string;
  name: string;
  hideLabel: boolean;
  required: boolean;
  showCC: boolean;
  type: string;
  leftIcon: boolean;
  rightIcon: boolean;
  iconSpacing: string | number;
  background: string;
  color: string;
  onChange: ChangeFn;
  onFocus: ChangeFn;
  onEnter: ChangeFn;
  onBlur: ChangeFn;
};
