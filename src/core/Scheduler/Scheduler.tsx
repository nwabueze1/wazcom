import React, { useState, useCallback, useEffect } from "react";
import { Table } from "../Table";
import { useSchedulerStyles } from "./styles";
import { InputLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SchedulerProps } from "./types";
import { tableHeaders } from "./data";
import { useScheduleData } from "./hooks";

export const Scheduler: React.FC<SchedulerProps> = ({
  name: componentName,
  label,
  value:initialScheduleValue,
  onChange,
}) => {
  const classes = useSchedulerStyles();
  const parseSchedulevalue = useScheduleData();

  const handleChange = useCallback(
    (event, index, remove = false) => {
      const {
        target: { name, value },
      } = event;
      if (remove && value.length > 1) {
        value.splice(index, 1);
      } else {
        value[index][name] = value;
      }
      onChange?.({ name: componentName as string, value: value });
    },
    [],
  );

  const [scheduleValue, setScheduleValue] = useState<{ [key: string]: any }[]>(
    parseSchedulevalue(initialScheduleValue, handleChange),
  );

  useEffect(() => {
    const newScheduleValue = parseSchedulevalue(initialScheduleValue, handleChange);
    setScheduleValue(newScheduleValue);
  }, [initialScheduleValue]);

  const addNewRow = () => {
    onChange?.({
      name: componentName as string,
      value: [...scheduleValue, { day: "1", start_time: "00:00", end_time: "12:00" }],
    });
  };

  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={componentName}>
          {label}
        </InputLabel>
      )}
      <Table headers={tableHeaders} value={scheduleValue} />
      <div className={classes.button} onClick={addNewRow}>
        <AddIcon className={classes.addIcon} />
        <p className={classes.buttonText}>Add more</p>
      </div>
    </div>
  );
};
