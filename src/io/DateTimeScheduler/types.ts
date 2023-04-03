import { CommonProps } from "../../types";

export type ScheduleProps = CommonProps & {
  onChange?: (...args: any) => void;
};
