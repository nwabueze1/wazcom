import React, { useState, useCallback } from "react";
import { useSchedulerStyles } from "./styles";
import { SchedulerProps } from "./types";
import { dayOptions } from "./hooks";
import { TimeInput, SelectInput } from "../../io";
import { Button } from "../../core";
import { FaTimes } from "react-icons/fa";
import clx from "classnames";

export const Scheduler: React.FC<SchedulerProps> = ({
  className,
  name,
  label,
  value = [],
  onChange,
  required = false,
}) => {
  const classes = useSchedulerStyles();
  const [schedule, setSchedule] = useState<{ [key in "day" | "start_time" | "end_time"]: string }>({
    day: "2",
    start_time: "9:00",
    end_time: "17:00",
  });
  const dayDelimiter = "2023-08-23";

  const handleAdd = useCallback(() => {
    const parsedValue = value.map((scheduleValue) => JSON.stringify(scheduleValue));

    if (parsedValue.includes(JSON.stringify(schedule))) return;

    if (convertToMinutes(schedule.end_time) <= convertToMinutes(schedule.start_time)) return;

    onChange?.({ name: name as string, value: [...value, schedule] });
  }, [schedule]);

  const convertToMinutes = (time: string) => {
    const [hour, minutes] = time.split(":");
    return Number(hour) * 60 + Number(minutes);
  };

  const handleRemove = (index: number) => {
    const newValue = value?.filter((_, valueIndex) => valueIndex !== index);

    if (required && newValue.length === 0) return;

    onChange?.({ name: name as string, value: newValue });
  };

  const handleScheduleChange = (key: "day" | "start_time" | "end_time", value: string) => {
    let parsedValue = value;
    if (key.includes("time")) {
      parsedValue = value.split(dayDelimiter + "T")[1];
      parsedValue = parsedValue.split("+")[0];
    }
    const updatedSchedule = { ...schedule, [key]: parsedValue };
    setSchedule(updatedSchedule);
  };

  const parseTime = (time: string) => {
    const timeSplits = time.split(":");
    const hour = Number(timeSplits[0]);
    return `${hour > 12 ? hour - 12 : hour}:${timeSplits[1]}`;
  };

  const getTimeExtension = (time: string) => {
    const timeSplits = time.split(":");
    const hour = Number(timeSplits[0]);
    return hour > 11 ? "pm" : "am";
  };

  const renderSchedules = () =>
    value.map(({ day, start_time, end_time }, index) => (
      <p className={classes.schedule} key={index}>
        <span>
          {dayOptions.find(({ value }) => value === day)?.label} ({parseTime(start_time)}{" "}
          {getTimeExtension(start_time)} - {parseTime(end_time)} {getTimeExtension(end_time)}){" "}
        </span>
        <FaTimes
          className={classes.scheduleIcon}
          onClick={() => {
            handleRemove(index);
          }}
        />
      </p>
    ));

  return (
    <div className={clx(classes.root, className)}>
      <SelectInput
        name={"day"}
        label={label}
        value={schedule.day}
        options={dayOptions.filter(
          ({ value: dayIndex }) => !value.map(({ day }) => day).includes(dayIndex),
        )}
        className={classes.selectInput}
        onChange={({ value }: { name: string; value: string }) =>
          handleScheduleChange("day", value)
        }
      />
      {value.length > 0 && <div className={classes.scheduleContainer}>{renderSchedules()}</div>}
      <div className={classes.timeContainer}>
        <TimeInput
          name={"start_time"}
          label="SET TIME"
          value={dayDelimiter + " " + schedule.start_time}
          className={classes.timeInput}
          onChange={({ value }: { name: string; value: string }) =>
            handleScheduleChange("start_time", value)
          }
        />
        <p className={classes.timeDivider}>TO</p>
        <TimeInput
          name={"end_time"}
          value={dayDelimiter + " " + schedule.end_time}
          className={classes.timeInput}
          onChange={({ value }: { name: string; value: string }) =>
            handleScheduleChange("end_time", value)
          }
        />
      </div>

      <Button className={classes.scheduleButton} onClick={handleAdd} type={"button"}>
        Add
      </Button>
    </div>
  );
};
