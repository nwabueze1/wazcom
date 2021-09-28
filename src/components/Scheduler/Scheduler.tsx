import { Table } from "../Table";
import { useState, useCallback, useEffect } from "react";
import * as React from "react";
import { useSchedulerStyles } from "./styles";
import AddIcon from "@material-ui/icons/Add";
import { SchedulerProps, RowType } from "./types";
import { TimeSelector } from "./TimePicker/TimePicker";
import { DayPicker } from "./DayPicker/DayPicker";
import CloseIcon from "@material-ui/icons/Close";
class Row implements RowType {
  day = "0";
  start_time = `00:00:00`;
  end_time = `12:00:00`;
}

export const defaultRow = new Row();

export const Scheduler: React.FC<SchedulerProps> = ({
  data,
  onChange,
}) => {
  const classes = useSchedulerStyles();
  const parseScheduleData = (scheduleData:{ [key: string]: any }[]) => {
    const data:{ [key:string]: any }[] = [];
    scheduleData.forEach((schedule, index) => {
      const parsedSchedule:{ [key:string]: any } = {};
      parsedSchedule['day'] = (
        <DayPicker
          name={"day"}
          label={"Enter Site Name"}
          value={schedule['day']}
          onChange={(event:any) => handleChange(event, index)}
        />
      );
      parsedSchedule['start_time'] = (
        <TimeSelector
          name={"start_time"}
          value={schedule["start_time"]}
          onChange={(event) => handleChange(event, index)}
        />
      );
      parsedSchedule['end_time'] = (
        <TimeSelector
          name={"end_time"}
          value={schedule["end_time"]}
          onChange={(event) => handleChange(event, index)}
        />
      );
      parsedSchedule['action'] = (
        <CloseIcon
          onClick={() => (handleChange(event, index, true))}
          style={{ cursor: "pointer" }}
          color={"secondary"}
        />
      )
      data.push(parsedSchedule);
    })
    return data;
  }
  const [tableData, setTableData] = useState<{ [key:string]: any }[]>(parseScheduleData(data));

  useEffect(() => {
    // console.log(data);
    const newTableData = parseScheduleData(data);
    setTableData(newTableData);
  }, [data]);

  const handleChange = useCallback(
    ({ target: { name, value } }, index, remove=false) => {
        if(remove && data.length > 1) {
          data.splice(index, 1);
        }
        else {
          data[index][name] = value;
        }
        onChange([...data]);
    },
    [data],
  );

  const addNewRow = () => {
    onChange([...data, new Row()]);
  };
  const tableHeaders = [
    {
      name: 'day',
      label: 'Days/ No. of Days'
    },
    {
      name: 'start_time',
      label: "Start Time"
    },
    {
      name: 'end_time',
      label: "End Time"
    },
    {
      name: 'action',
      label: "Action"
    }
  ]; 

  return (
    <div className={classes.tableContainer}>
      <Table
        headers={tableHeaders}
        data={tableData}
      />
      <div className={classes.button} onClick={addNewRow}>
        <AddIcon style={{ fontSize: 19 }} />
        <p className={classes.buttonText}>Add more</p>
      </div>
    </div>
  );
};