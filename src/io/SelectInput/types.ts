import { CommonProps } from "../../types";
import type StateManagedSelect from "react-select";
import React from "react";

export type SelectInputOptionsProps = {
    label: string;
    value: string;
    subText?: string;
    icon?: React.FC<{ [key: string]: any }>;
};

type SelectProps = CommonProps & {
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
    options?: SelectInputOptionsProps[];
}

export type SelectInputProps = Omit<StateManagedSelect, "onChange"> & SelectProps;