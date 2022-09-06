import { CommonProps } from "../../types";

export type CurrencyInputFieldProps = CommonProps & {
  currency: string;
  placeholder: string;
  label?: string;
};
