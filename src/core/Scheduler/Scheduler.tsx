import React, { useState, useCallback, useEffect } from "react";
import { useSchedulerStyles } from "./styles";
import { InputLabel } from "@mui/material";
import { SchedulerProps } from "./types";
import { fields } from "../../helpers/data";
import { useScheduleData, dayDelimiter, dayOptions } from "./hooks";
import { filterDayOptions } from "./helpers";
import clx from "classnames";
import { FiPlus } from "react-icons/fi";
import { Schedule } from ".";

export const Scheduler: React.FC<SchedulerProps> = ({
  className,
  classNames,
  name: componentName,
  label,
  multiple = false,
  value: initialScheduleValue = [{ day: "0", start_time: "00:00", end_time: "12:00" }],
  onChange,
  orientation = "horizontal",
}) => {
  const classes = useSchedulerStyles();
  const parseSchedulevalue = useScheduleData();
  const isEverydaySelected = initialScheduleValue?.some((value) => value?.day == "0");
  const availableOption = filterDayOptions(dayOptions, initialScheduleValue);

  const handleChange = useCallback(
    (name: string, value: any, index: number, remove = false) => {
      const newScheduleValue = [...(initialScheduleValue as Schedule[] | any)];
      let parsedValue = value;

      console.log(newScheduleValue.find(({ day }) => day == value));
      if (name === "day" && newScheduleValue.find(({ day }) => day == value)) return;

      if (name.includes("time")) {
        parsedValue = (value as string).split(dayDelimiter + "T")[1];
        parsedValue = parsedValue.split("+")[0];
      }

      if (remove && newScheduleValue.length > 1) {
        newScheduleValue.splice(index, 1);
      } else {
        newScheduleValue[index][name] = parsedValue;
      }
      onChange?.({ name: componentName as string, value: newScheduleValue });
    },
    [initialScheduleValue],
  );

  const addNewRow = useCallback(() => {
    const nextFieldId = dayOptions.filter(
      (item) =>
        Number(item.value) != 0 &&
        !initialScheduleValue.some((option) => Number(option.day) == Number(item.value)),
    )[0].value;
    onChange?.({
      name: componentName as string,
      value: [
        ...initialScheduleValue,
        { day: String(nextFieldId), start_time: "01:00", end_time: "12:00" },
      ],
    });
  }, [initialScheduleValue]);

  const [scheduleValue, setScheduleValue] = useState<{ [key: string]: any }[]>(
    parseSchedulevalue(initialScheduleValue as Schedule[], handleChange, {
      timeSection: clx(classes.timeContainer, classNames?.timeContainer),
      timeDivider: classes.timeDivider,
      closeIcon: clx(classes.closeIcon, classNames?.closeIcon),
      hiddenCloseIcon: clx(classes.hidden, classNames?.hidden),
    }),
  );

  useEffect(() => {
    const newScheduleValue = parseSchedulevalue(initialScheduleValue as Schedule[], handleChange, {
      timeSection: classes.timeContainer,
      closeIcon: classes.closeIcon,
      hiddenCloseIcon: classes.hidden,
    });
    setScheduleValue(newScheduleValue);
  }, [initialScheduleValue]);

  return (
    <div className={clx(classes.root, className)}>
      {label && (
        <InputLabel className={(classNames?.label as string) ?? ""} htmlFor={componentName}>
          {label}
        </InputLabel>
      )}

      {scheduleValue?.map((row: any, index: number) => {
        return (
          <div
            className={`${classes.schedulerContainer} ${
              orientation == "vertical" && classes.verticalContainer
            }`}
            key={index}
          >
            {fields.map(({ name }) => {
              return row?.[name];
            })}
          </div>
        );
      })}

      {multiple && !isEverydaySelected && (
        <div
          className={`${classes.button} ${availableOption.length == 0 && classes.hidden}`}
          onClick={addNewRow}
        >
          <p className={classes.buttonText}>
            <FiPlus className={classes.addIcon} /> Add Schedule
          </p>
        </div>
      )}
    </div>
  );
};
