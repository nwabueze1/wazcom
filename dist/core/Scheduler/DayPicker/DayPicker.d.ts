import React from "react";
import { SelectProps } from "@mui/material";
import { Schedule } from "..";
interface DayPickerProps extends SelectProps {
    value?: string;
    scheduleData: Schedule[];
}
export declare const DayPicker: React.FC<DayPickerProps>;
export {};
