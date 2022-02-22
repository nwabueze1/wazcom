import React, { useState, useCallback, useEffect } from "react";
import { Table } from "../Table";
import { useSchedulerStyles } from "./styles";
import { InputLabel } from "@mui/material";
import { SchedulerProps } from "./types";
import { tableHeaders } from "./data";
import { useScheduleData } from "./hooks";

export const Scheduler: React.FC<SchedulerProps> = ({
  name: componentName,
  label,
  value: initialScheduleValue = [
    { day: "0", start_time: "00:00", end_time: "12:00" },
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
    parseSchedulevalue(initialScheduleValue, handleChange),
  );

  useEffect(() => {
    const newScheduleValue = parseSchedulevalue(
      initialScheduleValue,
      handleChange,
    );
    setScheduleValue(newScheduleValue);
  }, [initialScheduleValue]);

  const addNewRow = useCallback(() => {
    onChange?.({
      name: componentName as string,
      value: [
        ...initialScheduleValue,
        { day: "0", start_time: "00:00", end_time: "12:00" },
      ],
    });
  }, [initialScheduleValue]);

  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={componentName}>
          {label}
        </InputLabel>
      )}
      <Table headers={tableHeaders} value={scheduleValue} />
      <div className={classes.button} onClick={addNewRow}>
        <p className={classes.buttonText}>Add more</p>
      </div>
    </div>
  );
};
