import * as React from "react";
import { SchedulerProps, RowType } from "./types";
declare class Row implements RowType {
    day: string;
    start_time: string;
    end_time: string;
}
export declare const defaultRow: Row;
export declare const Scheduler: React.FC<SchedulerProps>;
export {};
