import { CommonProps } from "types";
export declare type BlogSchedulerProps = CommonProps & {
    label?: string;
    gap?: string;
    multiple?: boolean;
    value?: Schedule[];
    orientation?: "horizontal" | "vertical";
};
export declare type Schedule = {
    day: string;
    start_time: string;
    end_time: string;
};
