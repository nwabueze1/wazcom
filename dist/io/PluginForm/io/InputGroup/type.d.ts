import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";
import { FormikProps } from "formik";
import { TextInputProps } from "../../../TextInput";
export type TextInputClassNamesPropsType = Record<"label" | "placeholder" | "inputContainer" | "input" | "errorMessage", string>;
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
    formikProps?: FormikProps<Record<string, any>>;
};
export type FormikTextInputPropsType = Partial<Omit<TextInputProps, "label" | "errorMessage" | "isError">> & {
    formikProps?: FormikProps<Record<string, any>>;
    isRequired?: boolean;
    name: string;
    classNames?: Partial<TextInputClassNamesPropsType>;
};
