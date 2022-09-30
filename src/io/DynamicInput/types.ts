import { CommonProps } from "../../types";
import { SelectProps as MuiSelectProps } from "@mui/material";
import React from "react";

export type DynamicInputProps = CommonProps &
    Omit<MuiSelectProps, "onChange"> & {
        labelClassName?: string;
        options?: {
            label: string;
            value: string;
            subText?: string;
            icon?: React.FC<any>;
        }[];
    };

export type DefaultInputsStateProps = {
    input: (() => JSX.Element) | React.FC<any>;
    defaultCount: number;
    defaultValue: string;
};
