import { DayPicker } from "./DayPicker/DayPicker";
import { TimeSelector } from "./TimePicker/TimePicker";
import { Schedule } from "./types";

export const useScheduleData = () => {
  return (
    scheduleData: Schedule[],
    handleChange: (
      event: React.ChangeEvent<{ name?: string; value?: unknown }>,
      index: number,
      remove?: boolean,
    ) => void,
    classNames?: { [key: string]: string} 
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
      parsedSchedule["time_section"] = (
        <div className={classNames?.timeSection}>
          <TimeSelector
            name={"start_time"}
            value={schedule.start_time}
            onChange={(event) => handleChange(event, index)}
          />
          <p className={classNames?.timeDivider}>to</p>
          <TimeSelector
            name={"end_time"}
            value={schedule.end_time}
            onChange={(event) => handleChange(event, index)}
          />
        </div>
      );
      // parsedSchedule["start_time"] = (
      //   <TimeSelector
      //     name={"start_time"}
      //     value={schedule.start_time}
      //     onChange={(event) => handleChange(event, index)}
      //   />
      // );
      // parsedSchedule["time_divider"] = (
      //   <p>to</p>
      // );
      // parsedSchedule["end_time"] = (
      //   <TimeSelector
      //     name={"end_time"}
      //     value={schedule.end_time}
      //     onChange={(event) => handleChange(event, index)}
      //   />
      // );
      data.push(parsedSchedule);
    });
    return data;
  };
};
