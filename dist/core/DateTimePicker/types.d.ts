import { CommonProps } from "types";
import { InputProps } from "@mui/material";
export declare type DateTimePickerProps = CommonProps & {
    label?: string;
    gap?: string;
    value?: DateTimePickerFields[];
    orientation?: "horizontal" | "vertical";
};
export declare type DateTimePickerFields = {
    day: string;
    time: string;
};
export interface DatePickerProps extends InputProps {
    value?: string;
    scheduleData: DateTimePickerFields[];
}
