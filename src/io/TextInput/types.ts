import React from 'react'
import { CommonProps } from "../../types";

export type TextInputProps = TextFieldProps;

export type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>;

type TextBaseProps = CommonProps & {
    helperText?: string;
    hideLabel?: boolean;
    info?: string;
    label?: string;
    name?: string;
    required?: boolean;
    showCC?: boolean;
    errors?: {
        message: string;
    }[];
    value?: any;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    iconSpacing?: string | number;
    children?: React.ReactNode;
}

export type TextFieldProps = Omit<BaseInputProps, "onChange"> & TextBaseProps;
export type EmailInputProps = Omit<BaseInputProps, "onChange"> & TextBaseProps;
export type NumberInputProps = Omit<BaseInputProps, "onChange"> & TextBaseProps;

export type TextAreaProps = Omit<React.HTMLProps<HTMLTextAreaElement>, "onChange"> & TextBaseProps & {
    type?: 'textarea';
    minRows?: number;
}

export type TextInputContentProps = {
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    iconSpacing?: string | number;
    children?: React.ReactNode;
};

export type TextInputIconProps = {
    className?: object;
    children?: React.ReactNode;
    iconSpacing?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
};

export type TextInputIconStyleProps = {
    props?: object | string;
    marginLeft?: string | number;
    marginRight?: string | number;
}