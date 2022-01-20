import { CommonProps } from "types";
export declare type SchedulerProps = CommonProps & {
    identifier?: string | number;
    data: Schedule[];
};
export declare type Schedule = {
    day: string;
    start_time: string;
    end_time: string;
};
export interface RowType {
    day: string;
    start_time: string;
    end_time: string;
}
export declare class Row implements RowType {
    day: string;
    start_time: string;
    end_time: string;
}
