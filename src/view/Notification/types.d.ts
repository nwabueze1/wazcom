import React from "react";
import { CommonProps } from "../../types";

export type NotificationProps = CommonProps & {
    variant?: string;
    backgroundColor?: string;
    borderWidth?: string | number;
    borderColor?: string;
    borderStyle?: string;
    borderRadius?: string | number;
    width?: string | number;
    height?: string | number;
};
