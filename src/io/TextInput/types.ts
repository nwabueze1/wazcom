import React from 'react'
import { CommonProps } from "../../types";

export type TextInputProps = TextFieldProps;

export type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type TextBaseProps = CommonProps & {
    helperText?: string;
    hideLabel?: boolean;
    info?: string;
    label?: string;
    name?: string;
    required?: boolean;
    showCC?: boolean;
    isActive?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    errors?: {
        message: string;
    }[];
    value?: any;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    iconSpacing?: string | number;
    children?: React.ReactNode;

    width?: string | number;
    height?: string | number;
    background?: string;
    color?: string;
    borderWidth?: string | number;
    borderStyle?: string;
    borderColor?: string;
    borderRadius?: string | number;
}

export type TextFieldProps = Omit<BaseInputProps, "onChange" | "onFocus" | "onEnter"> & TextBaseProps;
export type EmailInputProps = Omit<BaseInputProps, "onChange" | "onFocus" | "onEnter"> & TextBaseProps;
export type NumberInputProps = Omit<BaseInputProps, "onChange" | "onFocus" | "onEnter"> & TextBaseProps;

export type TextAreaProps = Omit<React.HTMLProps<HTMLTextAreaElement>, "onChange"|"onFocus"|"onEnter"> & TextBaseProps & {
    type?: 'textarea';
    minRows?: number;
}

export type TextInputContentProps = {
    leftIcon?: React.ReactNode | React.ReactElement | string;
    rightIcon?: React.ReactNode | React.ReactElement | string;
    iconSpacing?: string | number;
    children?: React.ReactNode | React.ReactElement | string;
};

export type TextInputIconProps = {
    className?: object;
    children?: React.ReactNode | React.ReactElement | string;
    iconSpacing?: string | number;
    marginLeft?: string | number;
    marginRight?: string | number;
};

export type TextInputIconStyleProps = {
    props?: object | string;
    marginLeft?: string | number;
    marginRight?: string | number;
}