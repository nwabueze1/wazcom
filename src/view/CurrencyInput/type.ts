import { CommonProps } from "../../types";
export type CurrencyInputViewProps = CommonProps;

export type InputDataProps = {
  name: string;
  label: string;
  placeholder: string;
  helperText: string;
  isError?: boolean;
  title?: string;
  isSuccess?: boolean;
  errors?: {
    message?: string;
  }[];
};
