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

export type InputComponentProps = {
    name: string;
    component: JSX.Element;
};
