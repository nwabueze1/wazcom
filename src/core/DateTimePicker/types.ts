import { CommonProps } from "types";
import { InputProps } from "@mui/material";

export type DateTimePickerProps = CommonProps & {
    label?: string;
    gap?: string;
    value?: DateTimePickerFields[];
    orientation?: "horizontal" | "vertical";
}

export type DateTimePickerFields = {
    day: string;
    time: string;
}
export interface DatePickerProps extends InputProps {
    value?: string;
    scheduleData: DateTimePickerFields[];
  }