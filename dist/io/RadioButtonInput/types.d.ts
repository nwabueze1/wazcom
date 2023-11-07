import { RadioProps } from "@mui/material";
import { CommonProps } from "../../types";
import { FocusEventHandler } from "react";
export type RadioButtonProps = {
    isDisabled?: boolean;
};
/** !!-- Remember to update the interface name !! */
export type RadioButtonInputProps = CommonProps & Omit<RadioProps, "onChange"> & RadioButtonProps & {
    label?: string;
    value?: boolean;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    labelPlacement?: "right" | "left";
    isBooleanValue?: boolean;
};
