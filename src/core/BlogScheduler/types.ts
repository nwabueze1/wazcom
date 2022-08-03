import { CommonProps } from "types";

export type BlogSchedulerProps = CommonProps & {
    label?: string;
    gap?: string;
    multiple?: boolean;
    value?: BlogSchedule[];
    orientation?: "horizontal" | "vertical";
}

export type BlogSchedule = {
    day: string;
    start_time: string;
    end_time: string;
}
