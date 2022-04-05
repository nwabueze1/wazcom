import { CommonProps } from "types";

export type SchedulerProps = CommonProps & {
    label?: string;
    labelClassName?: string;
    gap?: string;
    value?: Schedule[];
}

export type Schedule = {
    day: string;
    start_time: string;
    time_divider: string;
    end_time: string;
}
