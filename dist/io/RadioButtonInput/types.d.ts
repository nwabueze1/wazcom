import { RadioProps } from "@mui/material";
import { CommonProps } from "../../types";
import { ChangeEventHandler, FocusEventHandler } from "react";
export type RadioButtonProps = {
    isDisabled?: boolean;
};
/** !!-- Remember to update the interface name !! */
export type RadioButtonInputProps = CommonProps & Omit<RadioProps, "onChange"> & RadioButtonProps & {
    label?: string;
    value?: boolean;
    onFormikChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    labelPlacement?: "right" | "left";
};
