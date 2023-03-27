import { CommonProps } from "../../types";

export type ToggleInputProps = CommonProps & {
  label?: string;
  value?: boolean;
  isDisabled?: boolean;
  checked?: boolean;
};
