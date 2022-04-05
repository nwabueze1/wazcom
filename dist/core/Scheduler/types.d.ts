import { CommonProps } from "types";
export declare type SchedulerProps = CommonProps & {
    label?: string;
    labelClassName?: string;
    gap?: string;
    value?: Schedule[];
};
export declare type Schedule = {
    day: string;
    start_time: string;
    time_divider: string;
    end_time: string;
};
