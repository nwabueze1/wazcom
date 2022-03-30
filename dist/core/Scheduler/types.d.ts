import { CommonProps } from "types";
export declare type SchedulerProps = CommonProps & {
    label?: string;
    labelClassName?: string;
    value?: Schedule[];
};
export declare type Schedule = {
    day: string;
    start_time: string;
    end_time: string;
};
