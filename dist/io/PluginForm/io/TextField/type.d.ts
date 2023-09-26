import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";
export type TextInputClassNamesPropsType = Record<"label" | "placeholder" | "inputContainer" | "input" | "errorMessage", string>;
export type TextFieldPropsType = {
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onFocus: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
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
export type RadioButtonClassNamesPropsType = Record<"fieldset" | "legend" | "errorMessage" | "radioOrCheckboxLabel" | "radioOrCheckBox", string>;
export type RadioButtonFormikPropsType = {
    name: string;
    control: "radio" | "checkbox";
    onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    label: string;
    value: string;
    multiple?: boolean;
    classNames?: RadioButtonClassNamesPropsType | Partial<RadioButtonClassNamesPropsType>;
};
export type FormikTextInputPropsType = Partial<Omit<TextFieldPropsType, "label" | "errorMessage" | "isError">> & {
    name: string;
};
