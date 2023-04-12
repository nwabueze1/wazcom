import { DayPicker } from "./DayPicker/DayPicker";
import { Schedule } from "./types";
import CloseIcon from "@mui/icons-material/Close";
import clx from "classnames";
import { TimeInput } from "../../io";
import { useSchedulerStyles } from "./styles";

export const useScheduleData = () => {
  const classes = useSchedulerStyles();

  return (
    scheduleData: Schedule[],
    handleChange: (
      event: React.ChangeEvent<{ name?: string; value?: unknown }>,
      index: number,
      remove?: boolean,
    ) => void,
    classNames?: { [key: string]: string },
  ) => {
    const data: { [key: string]: JSX.Element }[] = [];
    scheduleData.forEach((schedule, index) => {
      const parsedSchedule: { [key: string]: any } = {};

      parsedSchedule["day"] = (
        <div className={classNames?.dayContainer}>
          <DayPicker
            name={"day"}
            label={"Enter Site Name"}
            value={schedule.day}
            scheduleData={scheduleData}
            onChange={(event: any) => handleChange(event, index)}
          />
        </div>
      );
      parsedSchedule["time_section"] = (
        <div className={classNames?.timeSection}>
          <TimeInput
            name={"start_time"}
            value={'2023-04-14 ' + schedule.start_time}
            onChange={(event) => handleChange(event, index)}
          />
          <p className={classes.timeDivider}>TO</p>
          <TimeInput
            name={"end_time"}
            value={'2023-04-14 ' + schedule.end_time}
            onChange={(event) => handleChange(event, index)}
          />
          <CloseIcon
            onClick={(event: any) => handleChange(event, index, true)}
            className={clx(index !== 0 ? classNames?.closeIcon : classNames?.hiddenCloseIcon)}
            color={"secondary"}
          />
        </div>
      );
      data.push(parsedSchedule);
    });
    return data;
  };
};
