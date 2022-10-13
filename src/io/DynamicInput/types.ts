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
        handleSetQuestion: (question: QuestionProps) => void;
        handleDelete: () => void;
        handleDuplicate: () => void;
        defaultQuestion?: QuestionProps;
        handleOpenLibrary: () => void;
    };

export type InputComponentProps = {
    name: string;
    component: JSX.Element;
};

export type Any = string | number | boolean;

export type QuestionProps = {
    text: string | JSX.Element;
    type: string;
    supportImage?: { name: string; value: any } | null;
    options: string[];
    required: boolean;
    answers: Any[];
    point: number;
    media?: { name: string; value: any };
};
