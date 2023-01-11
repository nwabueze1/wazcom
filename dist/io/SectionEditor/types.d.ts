import { CommonProps } from "../../types";
import { SelectProps as MuiSelectProps } from "@mui/material";
import React from "react";
export declare type SectionEditorProps = CommonProps & Omit<MuiSelectProps, "onChange"> & {
    labelClassName?: string;
    options?: {
        label: string;
        value: string;
        subText?: string;
        icon?: React.FC<any>;
    }[];
    title?: string;
    description?: string;
    handleSetSection?: (section: {
        title: string | JSX.Element;
        description: string | JSX.Element;
    }) => void;
};
