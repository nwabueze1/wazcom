import React from "react";
import { SelectProps } from "@mui/material";
import { BlogSchedule } from "..";
interface DayPickerProps extends SelectProps {
    value?: string;
    scheduleData: BlogSchedule[];
}
export declare const DayPicker: React.FC<DayPickerProps>;
export {};
