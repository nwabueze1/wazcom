import { CommonProps } from "types";
export declare type BlogSchedulerProps = CommonProps & {
    label?: string;
    gap?: string;
    value?: BlogSchedule[];
    orientation?: "horizontal" | "vertical";
};
export declare type BlogSchedule = {
    day: string;
    time: string;
};
