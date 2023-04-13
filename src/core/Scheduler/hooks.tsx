import { Schedule } from "./types";
import CloseIcon from "@mui/icons-material/Close";
import clx from "classnames";
import { TimeInput, SelectInput } from "../../io";
import { useSchedulerStyles } from "./styles";

export const dayOptions = [
  { value: "0", label: "Everyday" },
  { value: "1", label: "Sunday" },
  { value: "2", label: "Monday" },
  { value: "3", label: "Tuesday" },
  { value: "4", label: "Wednesday" },
  { value: "5", label: "Thursday" },
  { value: "6", label: "Friday" },
  { value: "7", label: "Saturday" },
  { value: "8", label: "Weekdays" },
  { value: "9", label: "Weekends" },
];

export const useScheduleData = () => {
  const classes = useSchedulerStyles();

  return (
    scheduleData: Schedule[],
    handleChange: (name: string, value: any, index: number, remove?: boolean) => void,
    classNames?: { [key: string]: string },
  ) => {
    const data: { [key: string]: JSX.Element }[] = [];
    scheduleData.forEach((schedule, index) => {
      const parsedSchedule: { [key: string]: any } = {};

      parsedSchedule["day"] = (
        <SelectInput
          name={"day"}
          value={schedule.day}
          options={dayOptions}
          onChange={({ name, value }: { name: string; value: string }) =>
            handleChange(name, value, index)
          }
        />
      );
      parsedSchedule["time_section"] = (
        <div className={classNames?.timeSection}>
          <TimeInput
            name={"start_time"}
            value={dayDelimiter + " " + schedule.start_time}
            onChange={({ name, value }: { name: string; value: any }) =>
              handleChange(name, value, index)
            }
            className={classes.timeInput}
          />
          <p className={classes.timeDivider}>TO</p>
          <TimeInput
            name={"end_time"}
            value={dayDelimiter + " " + schedule.end_time}
            onChange={({ name, value }: { name: string; value: any }) =>
              handleChange(name, value, index)
            }
            className={classes.timeInput}
          />
          <CloseIcon
            onClick={() => handleChange("", "", index, true)}
            className={clx(
              scheduleData.length > 1 ? classNames?.closeIcon : classNames?.hiddenCloseIcon,
            )}
            color={"secondary"}
          />
        </div>
      );
      data.push(parsedSchedule);
    });
    return data;
  };
};

export const dayDelimiter = "2023-04-14";
