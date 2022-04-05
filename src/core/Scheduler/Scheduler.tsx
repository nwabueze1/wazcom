import React, { useState, useCallback, useEffect } from "react";
import { useSchedulerStyles } from "./styles";
import { InputLabel } from "@mui/material";
import { SchedulerProps } from "./types";
import { fields } from "./data";
import { useScheduleData } from "./hooks";
import clx from "classnames";
import { FiPlus } from "react-icons/fi";

export const Scheduler: React.FC<SchedulerProps> = ({
  className,
  name: componentName,
  label,
  labelClassName,
  gap = useSchedulerStyles().dayContainer,
  multiple = true,
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

  const addNewRow = useCallback(() => {
    onChange?.({
      name: componentName as string,
      value: [
        ...initialScheduleValue,
        { day: "0", start_time: "00:00", end_time: "12:00" },
      ],
    });
  }, [initialScheduleValue]);

  const [scheduleValue, setScheduleValue] = useState<{ [key: string]: any }[]>(
    parseSchedulevalue(initialScheduleValue, handleChange, {
      timeSection: classes.timeContainer,
      timeDivider: classes.timeDivider,
      dayContainer: gap,
      closeIcon: classes.closeIcon,
      hiddenCloseIcon: classes.hiddenCloseIcon
    }),
  );

  useEffect(() => {
    const newScheduleValue = parseSchedulevalue(
      initialScheduleValue,
      handleChange,
      {
        timeSection: classes.timeContainer,
        timeDivider: classes.timeDivider,
        dayContainer: gap,
        closeIcon: classes.closeIcon,
        hiddenCloseIcon: classes.hiddenCloseIcon
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
              return row?.[name];
            })}
          </div>
        );
      })}
      {multiple && (
        <div className={classes.button} onClick={addNewRow}>
          <p className={classes.buttonText}>
            <FiPlus className={classes.addIcon} /> Add Schedule
          </p>
        </div>
      )}
    </div>
  );
};
