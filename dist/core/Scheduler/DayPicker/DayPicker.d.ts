import * as React from "react";
import { SelectProps } from "@mui/material";
import { SelectInputProps } from "@mui/material/Select/SelectInput";
declare type DayPickerProps = SelectProps & {
    value?: string;
    onChange: SelectInputProps["onChange"];
};
export declare const DayPicker: React.FC<DayPickerProps>;
export {};
