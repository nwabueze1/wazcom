import { DayPicker } from "./DayPicker/DayPicker";
import { TimeSelector } from "./TimePicker/TimePicker";
import { Schedule } from "./types";
import CloseIcon from "@mui/icons-material/Close";

export const useScheduleData = () => {
  return (
    scheduleData: Schedule[],
    handleChange: (
      event: React.ChangeEvent<{ name?: string; value?: unknown }>,
      index: number,
      remove?: boolean,
    ) => void,
  ) => {
    const data: { [key: string]: JSX.Element }[] = [];
    scheduleData.forEach((schedule, index) => {
      const parsedSchedule: { [key: string]: any } = {};
      parsedSchedule["day"] = (
        <DayPicker
          name={"day"}
          label={"Enter Site Name"}
          value={schedule.day}
          onChange={(event: any) => handleChange(event, index)}
        />
      );
      parsedSchedule["start_time"] = (
        <TimeSelector
          name={"start_time"}
          value={schedule.start_time}
          onChange={(event) => handleChange(event, index)}
        />
      );
      parsedSchedule["end_time"] = (
        <TimeSelector
          name={"end_time"}
          value={schedule.end_time}
          onChange={(event) => handleChange(event, index)}
        />
      );
      parsedSchedule["action"] = (
        <CloseIcon
          onClick={(event: any) => handleChange(event, index, true)}
          style={{ cursor: "pointer" }}
          color={"secondary"}
        />
      );
      data.push(parsedSchedule);
    });
    return data;
  };
};
