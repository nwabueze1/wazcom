import { DayPicker } from "./DayPicker/DayPicker";
import { TimeSelector } from "./TimePicker/TimePicker";
import { DayTimePickerFields } from "./types";

export const useScheduleData = () => {
  return (
    scheduleData: DayTimePickerFields[],
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
        <div className={classNames?.dayContainer}>
          <DayPicker
            name={"day"}
            value={schedule.day}
            scheduleData={scheduleData}
            onChange={(event: any) => handleChange(event, index)}
          />
        </div>
      );
      parsedSchedule["time"] = (
        <div className={classNames?.timeSection}>
          <TimeSelector
            name={"time"}
            value={schedule.time}
            onChange={(event) => handleChange(event, index)}
          />
        </div>
      );
      data.push(parsedSchedule);
    });
    return data;
  };
};
