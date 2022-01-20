import React, { useState, useCallback, useEffect } from "react";
import { Table } from "../Table";
import { useSchedulerStyles } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import { SchedulerProps, Row } from "./types";
import { tableHeaders } from "./data";
import { useScheduleData } from "./hooks";

export const defaultRow = new Row();

export const Scheduler: React.FC<SchedulerProps> = ({
  name,
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
      onChange?.({ name: name as string, value: data });
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
    alert('leke');
    onChange?.({ name: name as string, value: [...data, new Row()] });
  };

  return (
    <div className={classes.tableContainer}>
      <Table headers={tableHeaders} data={tableData} />
      <div className={classes.button} onClick={addNewRow}>
        <AddIcon className={classes.addIcon} />
        <p className={classes.buttonText}>Add more</p>
      </div>
    </div>
  );
};
