import { CommonProps } from "../../types";

export type CheckBoxInputProps = CommonProps & {
  label?: string;
  checked?: boolean;
  handleCheckChange?: (event: React.ChangeEvent<{ checked: boolean }>) => void;
};
