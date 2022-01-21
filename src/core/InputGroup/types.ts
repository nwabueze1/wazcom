import { CommonProps } from "../../types";

export type InputGroupProps = CommonProps & {
  label: string;
  onChange: () => void;
  variant: "fileinput" | "textfield";
  inverted: boolean;
  handleChange: () => void;
  value: string;
};
