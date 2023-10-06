import { FormikProps } from "formik";
import { ReactNode } from "react";
import { TextInputProps } from "../../TextInput";
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
export type FormikTextInputPropsType = Partial<Omit<TextInputProps, "label" | "errorMessage" | "isError">> & {
    formikProps?: FormikProps<Record<string, any>>;
    isRequired?: boolean;
    name: string;
    classNames?: Partial<TextInputClassNamesPropsType>;
};
export type FormikRadioOrCheckBoxPropsType = Omit<RadioButtonInputPropsType, "isError" | "errorMessage" | "label" | "placeholder" | "classNames"> & {
    name: string;
    options: {
        label: string;
        value: string;
    }[];
    formikProps?: FormikProps<Record<string, any>>;
    classNames?: Record<"radioButtonInput" | "optionContainer" | "label" | "errorMessage" | "legend" | "fieldset", string>;
};
export type FormikCheckBoxInputPropsType = Omit<RadioButtonInputPropsType, "isError" | "errorMessage" | "optionContainer" | "label" | "placeholder" | "children" | "classNames" | "control"> & {
    classNames?: Record<"checkboxInput" | "label" | "errorMessage" | "legend" | "fieldset", string>;
    name: string;
    options: {
        label: string;
        value: string;
    }[];
    formikProps?: FormikProps<Record<string, any>>;
};
