import { RadioProps } from "@mui/material";
import { CommonProps } from "../../types";
export type RadioButtonProps = {
    checkedBackground?: string;
    unCheckedBackground?: string;
    radioSize?: number;
    disabled?: boolean;
    position?: 'vertical' | 'horizontal';
};
/** !!-- Remember to update the interface name !! */
export type RadioButtonInputProps = CommonProps & Omit<RadioProps, "onChange"> & RadioButtonProps & {
    label?: string;
    value?: boolean;
};
