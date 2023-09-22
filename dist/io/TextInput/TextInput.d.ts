import { FC } from "react";
import React from "react";
import { TextFieldProps } from "./types";
/**
 * Text Input IO Component
 *
 * - Should follow the following constraints;
 * -- labels are optional (should show or hide if its provided but can be manually turned off. Manual turn off/on takes precedence over if provided or not).
 * -- startIcons and endIcons
 * -- should expose the following events: onFocus, onEnter
 * -- helperText
 * -- info
 */
export declare const TextInput: React.ForwardRefExoticComponent<Omit<import("./types").BaseInputProps, "onFocus" | "onChange" | "onEnter"> & import("../../types").CommonProps & {
    classNames?: {
        [key: string]: string;
    } | undefined;
    helperText?: string | undefined;
    hideLabel?: boolean | undefined;
    info?: string | undefined;
    label?: string | JSX.Element | undefined;
    name?: string | undefined;
    required?: boolean | undefined;
    showCC?: boolean | undefined;
    isFocused?: boolean | undefined;
    isError?: boolean | undefined;
    isSuccess?: boolean | undefined;
    isValidated?: boolean | undefined;
    hasSlideUpLabel?: boolean | undefined;
    errors?: {
        message: string;
    }[] | undefined;
    rows?: string | number | undefined;
    value?: any;
    leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    rightIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    iconSpacing?: string | number | undefined;
    children?: React.ReactNode;
    width?: string | number | undefined;
    height?: string | number | undefined;
    background?: string | undefined;
    color?: string | undefined;
    borderWidth?: string | number | undefined;
    borderStyle?: string | undefined;
    borderColor?: string | undefined;
    borderRadius?: string | number | undefined;
    onFocus?: ((...args: any[]) => void) | undefined;
    onEnter?: ((...args: any[]) => void) | undefined;
    onBlur?: ((...args: any[]) => void) | undefined;
    onChange?: ((...args: any[]) => void) | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export declare const EmailInput: FC<Omit<TextFieldProps, "type">>;
export declare const URLInput: FC<Omit<TextFieldProps, "type">>;
export declare const NumberInput: FC<Omit<TextFieldProps, "type">>;
