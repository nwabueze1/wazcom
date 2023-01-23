import React from "react";
export type TabProps = {
    children?: React.ReactNode;
    variant?: string;
    backgroundColor?: string;
    width?: string | number;
    height?: string | number;
    borderWidth?: string | number;
    borderColor?: string;
    borderStyle?: string;
    borderRadius?: string | number;
    controls: {
        name: string;
        title: string;
        component: React.ReactNode;
    }[];
};
export type TabStyleProps = {
    variant?: string;
    backgroundColor?: string;
    color?: string;
    borderWidth?: string | number;
    borderColor?: string;
    borderStyle?: string;
    borderRadius?: string | number;
    width?: string | number;
    height?: string | number;
};
