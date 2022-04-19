import { CommonProps } from "types";

export type SchedulerProps = CommonProps & {
    label?: string;
    gap?: string;
    multiple?: boolean;
    value?: Schedule[];
}

export type Schedule = {
    day: string;
    start_time: string;
    end_time: string;
}
