import { CommonProps } from "types";

export type BlogSchedulerProps = CommonProps & {
    label?: string;
    gap?: string;
    value?: BlogSchedule[];
    orientation?: "horizontal" | "vertical";
}

export type BlogSchedule = {
    day: string;
    time: string;
}
