/// <reference types="react" />
import { CommonProps } from "../../types";
export declare type TextInputProps = TextFieldProps;
export declare type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>;
declare type TextBaseProps = CommonProps & {
    helperText?: string;
    hideLabel?: boolean;
    info?: string;
    label?: string;
    name: string;
    required?: boolean;
    showCC?: boolean;
    value?: string;
    errors?: {
        message: string;
    }[];
};
export declare type TextFieldProps = Omit<BaseInputProps, "onChange"> & TextBaseProps;
export declare type EmailInputProps = Omit<BaseInputProps, "onChange"> & TextBaseProps;
export declare type TextAreaProps = Omit<React.HTMLProps<HTMLTextAreaElement>, "onChange"> & TextBaseProps & {
    type?: 'textarea';
};
export {};
