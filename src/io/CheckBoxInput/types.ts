import { CommonProps } from "../../core/types";

export type CheckBoxInputProps = CommonProps & {
  label?: string;
  checked?: boolean;
  handleCheckChange?: (event: React.ChangeEvent<{ checked: boolean }>) => void;
};
