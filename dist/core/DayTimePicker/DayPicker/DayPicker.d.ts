import React from "react";
import { SelectProps } from "@mui/material";
import { DayTimePickerFields } from "..";
interface DayPickerProps extends SelectProps {
    value?: string;
    scheduleData: DayTimePickerFields[];
}
export declare const DayPicker: React.FC<DayPickerProps>;
export {};
