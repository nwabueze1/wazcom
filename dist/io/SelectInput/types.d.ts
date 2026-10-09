import { CommonProps } from "../../types";
import type StateManagedSelect from "react-select";
import React, { FocusEventHandler } from "react";
export type SelectInputOptionsProps = {
    label: string;
    value: string;
    subText?: string;
    icon?: React.FC<{
        [key: string]: any;
    }>;
};
type SelectProps = CommonProps & {
    width?: string | number;
    height?: string | number;
    borderWidth?: string | number;
    borderColor?: string;
    borderStyle?: string;
    backgroundColor?: string;
    helperText?: string;
    hideLabel?: boolean;
    info?: string;
    label?: string | React.ReactNode;
    name?: string;
    required?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
    showCC?: boolean;
    menuIsOpen?: boolean;
    errors?: {
        message: string;
    }[];
    value?: any;
    options?: SelectInputOptionsProps[];
    containerClass?: string;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
};
export type SelectInputProps = Omit<StateManagedSelect, "onChange"> & SelectProps & {
    placeholder?: string;
};
export {};
