import { CommonProps } from "types";

export type SchedulerProps = CommonProps & {
  label?: string;
  gap?: string;
  multiple?: boolean;
  value?: Schedule[];
  orientation?: "horizontal" | "vertical";
};

export type Schedule = {
  day: string;
  start_time: string;
  end_time: string;
  name?: string;
};
