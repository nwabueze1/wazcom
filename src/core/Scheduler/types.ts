import { CommonProps } from "types";

export type SchedulerProps = CommonProps & {
    identifier?: string | number;
    data: Schedule[];
}

export type Schedule = {
    day: string;
    start_time: string;
    end_time: string;
}

export interface RowType {
    day: string;
    start_time: string;
    end_time: string;
}

export class Row implements RowType {
  day = "0";
  start_time = `00:00:00`;
  end_time = `12:00:00`;
}
