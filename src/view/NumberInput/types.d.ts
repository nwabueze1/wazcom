import { CommonProps } from "../../types";
export type NumberInputViewProps = CommonProps;

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
