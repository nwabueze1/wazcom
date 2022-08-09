import { CommonProps } from "types";

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
