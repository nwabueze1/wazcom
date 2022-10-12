import { CommonProps } from "../../types";
import { SelectProps as MuiSelectProps } from "@mui/material";
import React from "react";
export declare type DynamicInputProps = CommonProps & Omit<MuiSelectProps, "onChange"> & {
    labelClassName?: string;
    options?: {
        label: string;
        value: string;
        subText?: string;
        icon?: React.FC<any>;
    }[];
    handleSetQuestion: (question: QuestionProps) => void;
    handleDelete: () => void;
    handleDuplicate: () => void;
    defaultQuestion?: QuestionProps;
};
export declare type InputComponentProps = {
    name: string;
    component: JSX.Element;
};
export declare type Any = string | number | boolean;
export declare type QuestionProps = {
    text: string | JSX.Element;
    type: string;
    options: string[];
    required: boolean;
    answers: Any[];
    point: number;
};
