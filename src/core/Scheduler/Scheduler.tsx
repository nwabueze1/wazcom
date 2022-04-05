import React, { useState, useCallback, useEffect } from "react";
import { useSchedulerStyles } from "./styles";
import { InputLabel } from "@mui/material";
import { SchedulerProps } from "./types";
import { fields } from "./data";
import { useScheduleData } from "./hooks";
import clx from "classnames";

export const Scheduler: React.FC<SchedulerProps> = ({
  className,
  name: componentName,
  label,
  labelClassName,
  gap = useSchedulerStyles().dayContainer,
  value: initialScheduleValue = [
    { day: "0", start_time: "00:00", time_divider: "to", end_time: "12:00" },
  ],
  onChange,
}) => {
  const classes = useSchedulerStyles();
  const parseSchedulevalue = useScheduleData();

  const handleChange = useCallback(
    (event, index, remove = false) => {
      const {
        target: { name, value },
      } = event;
      const newValue = [...initialScheduleValue];
      if (remove && newValue.length > 1) {
        newValue.splice(index, 1);
      } else {
        newValue[index][name] = value;
      }
      onChange?.({ name: componentName as string, value: newValue });
    },
    [initialScheduleValue],
  );

  const [scheduleValue, setScheduleValue] = useState<{ [key: string]: any }[]>(
    parseSchedulevalue(initialScheduleValue, handleChange, {
      timeSection: classes.timeContainer,
    }),
  );
  console.log(scheduleValue);
  useEffect(() => {
    const newScheduleValue = parseSchedulevalue(
      initialScheduleValue,
      handleChange,
      {
        timeSection: classes.timeContainer,
        timeDivider: classes.timeDivider,
        dayContainer: gap,
      },
    );
    setScheduleValue(newScheduleValue);
  }, [initialScheduleValue]);
  return (
    <div className={clx(classes.root, className)}>
      {label && (
        <InputLabel
          className={clx(classes.label, labelClassName)}
          htmlFor={componentName}
        >
          {label}
        </InputLabel>
      )}
      {scheduleValue?.map((row: any, index: number) => {
        return (
          <div className={classes.schedulerContainer} key={index}>
            {fields.map(({ name }) => {
              console.log(row?.[name]);
              return row?.[name];
            })}
          </div>
        );
      })}
    </div>
  );
};
