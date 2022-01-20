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
  data,
  onChange,
}) => {
  const classes = useSchedulerStyles();
  const parseScheduleData = useScheduleData();

  const handleChange = useCallback(
    (event, index, remove = false) => {
      const {
        target: { name, value },
      } = event;
      if (remove && data.length > 1) {
        data.splice(index, 1);
      } else {
        data[index][name] = value;
      }
      onChange?.({ name: componentName as string, value: data });
    },
    [data],
  );

  const [tableData, setTableData] = useState<{ [key: string]: any }[]>(
    parseScheduleData(data, handleChange),
  );

  useEffect(() => {
    const newTableData = parseScheduleData(data, handleChange);
    setTableData(newTableData);
  }, [data]);

  const addNewRow = () => {
    onChange?.({
      name: componentName as string,
      value: [...data, { day: "1", start_time: "00:00", end_time: "12:00" }],
    });
  };

  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={componentName}>
          {label}
        </InputLabel>
      )}
      <Table headers={tableHeaders} data={tableData} />
      <div className={classes.button} onClick={addNewRow}>
        <AddIcon className={classes.addIcon} />
        <p className={classes.buttonText}>Add more</p>
      </div>
    </div>
  );
};
