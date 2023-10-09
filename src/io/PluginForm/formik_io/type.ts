import { ReactNode } from "react";

export type TextInputClassNamesPropsType = Record<
  "label" | "placeholder" | "inputContainer" | "input" | "errorMessage",
  string
>;

export type TextFieldPropsType = {
  name: string;
  value: string;
  label: string;
  className: string;
  classNames: Partial<TextInputClassNamesPropsType>;
  isError: boolean;
  placeholder: string;
  errorMessage: string;
  isRequired: boolean;
  type: string;
};

export type RadioButtonInputPropsType = Partial<Omit<TextFieldPropsType, "classNames">> & {
  control?: "radio" | "checkbox";
  multiple?: boolean;
  children: ReactNode;
  classNames?: RadioButtonClassNamesPropsType | Partial<RadioButtonClassNamesPropsType>;
};

export type RadioButtonClassNamesPropsType = Record<
  "fieldset" | "legend" | "errorMessage" | "radioOrCheckboxLabel" | "radioOrCheckBox",
  string
>;
