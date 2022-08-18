import { CommonProps } from "types";
import { InputProps } from "@mui/material";

export type DayTimePickerProps = CommonProps & {
    label?: string;
    gap?: string;
    value?: DayTimePickerFields[];
    orientation?: "horizontal" | "vertical";
}

export type DayTimePickerFields = {
    day: string;
    time: string;
}
export interface DayPickerProps extends InputProps {
    value?: string;
    scheduleData: DayTimePickerFields[];
  }