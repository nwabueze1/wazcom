import React, { useState, useCallback, useEffect } from "react";
import { useSchedulerStyles } from "./styles";
import { InputLabel } from "@mui/material";
import { SchedulerProps } from "./types";
import { fields } from "./data";
import { useScheduleData } from "./hooks";
import clx from "classnames";
import { FiPlus } from "react-icons/fi";
import { days } from "./DayPicker/helper";
import { Schedule } from ".";

export const Scheduler: React.FC<SchedulerProps> = ({
  className,
  classNames,
  name: componentName,
  label,
  multiple = true,
  value: initialScheduleValue = [
    { day: "0", start_time: "00:00", end_time: "12:00" },
  ],
  onChange,
  orientation = "horizontal"
}) => {
  const classes = useSchedulerStyles();
  const parseSchedulevalue = useScheduleData();
  // const [selectedOptions, setSelectedOptions] = useState<Schedule[]>([{ day: "0", start_time: "00:00", end_time: "12:00" }])
  const isEverydaySelected = initialScheduleValue?.some((value) => value?.day == "0");
  console.log("isEverydaySelected", isEverydaySelected)

  const handleChange = useCallback(
    (event, index, remove = false) => {
      const {
        target: { name, value },
      } = event;
      const newValue = [...(initialScheduleValue as Schedule[])];
      if (remove && newValue.length > 1) {
        newValue.splice(index, 1);
      } else {
        newValue[index][name] = value;
      }
      onChange?.({ name: componentName as string, value: newValue });
      // setSelectedOptions(newValue)
    },
    [initialScheduleValue],
  );

  const addNewRow = useCallback(() => {
    const nextFieldId = days.filter((item) => item.id != 0 && !initialScheduleValue.some((option) => Number(option.day) == item.id))[0].id
    onChange?.({
      name: componentName as string,
      value: [
        ...initialScheduleValue,
        {day: String(nextFieldId), start_time: "01:00", end_time: "12:00"},
      ],
    });
    
    // setSelectedOptions([...(selectedOptions as Schedule[]), {day: String(nextFieldId), start_time: "01:00", end_time: "12:00"}])
  }, [initialScheduleValue]);

  const [scheduleValue, setScheduleValue] = useState<{ [key: string]: any }[]>(
    parseSchedulevalue(initialScheduleValue as Schedule[], handleChange, {
      timeSection: classes.timeContainer,
      timeDivider: classes.timeDivider,
      closeIcon: classes.closeIcon,
      hiddenCloseIcon: classes.hiddenCloseIcon,
    }),
  );

  useEffect(() => {
    const newScheduleValue = parseSchedulevalue(
      initialScheduleValue as Schedule[],
      handleChange,
      {
        timeSection: classes.timeContainer,
        timeDivider: classes.timeDivider,
        closeIcon: classes.closeIcon,
        hiddenCloseIcon: classes.hiddenCloseIcon,
      },
    );
    setScheduleValue(newScheduleValue);
  }, [initialScheduleValue]);

  return (
    <div className={clx(classes.root, className)}>
      {label && (
        <InputLabel
          className={(classNames?.label as string) ?? ""}
          htmlFor={componentName}
        >
          {label}
        </InputLabel>
      )}
      {scheduleValue?.map((row: any, index: number) => {
        return (
          <div className={`${classes.schedulerContainer} ${orientation == "vertical" && classes.verticalContainer}`} key={index}>
            {fields.map(({ name }) => {
              return row?.[name];
            })}
          </div>
        );
      })}
      {multiple && !isEverydaySelected && (
        <div className={classes.button} onClick={addNewRow}>
          <p className={classes.buttonText}>
            <FiPlus className={classes.addIcon} /> Add Schedule
          </p>
        </div>
      )}
    </div>
  );
};
