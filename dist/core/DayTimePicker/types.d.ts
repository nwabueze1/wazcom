import { CommonProps } from "types";
export declare type DayTimePickerProps = CommonProps & {
    label?: string;
    gap?: string;
    value?: DayTimePickerFields[];
    orientation?: "horizontal" | "vertical";
};
export declare type DayTimePickerFields = {
    day: string;
    time: string;
};
