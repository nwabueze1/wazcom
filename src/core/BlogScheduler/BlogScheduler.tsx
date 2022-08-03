import React, { useState, useCallback, useEffect } from "react";
import { useSchedulerStyles } from "./styles";
import { InputLabel } from "@mui/material";
import { BlogSchedulerProps } from "./types";
import { fields } from "./data";
import { useScheduleData } from "./hooks";
import clx from "classnames";
import { Schedule } from ".";

export const BlogScheduler: React.FC<BlogSchedulerProps> = ({
  className,
  classNames,
  name: componentName,
  label,
  value: initialScheduleValue = [
    { day: "0", time: "00:00"},
  ],
  onChange,
  orientation = "horizontal",
}) => {
  const classes = useSchedulerStyles();
  const parseSchedulevalue = useScheduleData();

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
    },
    [initialScheduleValue],
  );

  const [scheduleValue, setScheduleValue] = useState<{ [key: string]: any }[]>(
    parseSchedulevalue(initialScheduleValue as Schedule[],
       handleChange,
       {
      timeSection: classes.timeContainer,
      timeDivider: classes.timeDivider,
      closeIcon: classes.closeIcon,
      hiddenCloseIcon: classes.hidden,
      dayContainer: classes.dayContainer
    },
    ),
  );

  useEffect(() => {
    const newScheduleValue = parseSchedulevalue(
      initialScheduleValue as Schedule[],
      handleChange,
      {
        timeSection: classes.timeContainer,
        timeDivider: classes.timeDivider,
        closeIcon: classes.closeIcon,
        hiddenCloseIcon: classes.hidden,
        dayContainer: classes.dayContainer
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
            }).reverse()}
          </div>
        );
      })}
    </div>
  );
};
