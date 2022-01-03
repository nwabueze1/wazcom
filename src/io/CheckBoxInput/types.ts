import { CommonProps } from "../../core/types";

export type CheckBoxProps = CommonProps & {
  label?: string;
  checked?: boolean;
  handlecheckChange?: (event: React.ChangeEvent<{ checked: boolean }>) => void;
};
