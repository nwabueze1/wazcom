export type CheckBoxInputPropsType = {
  value: string | string[];
  name: string;
  isError?: boolean;
  options: { label: string; value: string }[];
  onChange?: (e: { name: string; value: string | string[] }) => void;
  multiple?: boolean;
  label: string;
  required?: boolean;
  classNames?: Partial<
    Record<"fieldset" | "legend" | "checkboxGroup" | "checkboxInput" | "checkboxLabel", string>
  >;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  errorMessage?: string;
};
