import { RadioProps } from "@mui/material";
import { CommonProps } from "../../types";

/** !!-- Remember to update the interface name !! */
export type RadioButtonInputProps = CommonProps &
    Omit<RadioProps, "onChange"> & {
        label?: string;
        value?: boolean;
    };
