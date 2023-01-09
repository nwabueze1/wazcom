import React, { useState, useCallback, useEffect } from "react";
import { useSchedulerStyles } from "./styles";
import { InputLabel } from "@mui/material";
import { SchedulerProps } from "./types";
import { fields } from "../../helpers/data";
import { useScheduleData } from "./hooks";
import clx from "classnames";
import { FiPlus } from "react-icons/fi";
import { days, filterDaysOptions } from "./DayPicker/helper";
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
    const availableOption = filterDaysOptions(days, initialScheduleValue);

    const handleChange = useCallback(
        (event: any, index: number, remove = false) => {
            const {
                target: { name, value },
            } = event;
            const newValue = [...(initialScheduleValue as Schedule[])];
            if (remove && newValue.length > 1) {
                newValue.splice(index, 1);
            } else {
                newValue[index] = { day: name, start_time: value, end_time: value };
            }
            onChange?.({ name: componentName as string, value: newValue });
        },
        [initialScheduleValue],
    );

    const addNewRow = useCallback(() => {
        const nextFieldId = days.filter(
            (item) =>
                item.id != 0 &&
                !initialScheduleValue.some((option) => Number(option.day) == item.id),
        )[0].id;
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
            timeDivider: clx(classes.timeDivider, classNames?.timeDivider),
            closeIcon: clx(classes.closeIcon, classNames?.closeIcon),
            hiddenCloseIcon: clx(classes.hidden, classNames?.hidden),
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
                hiddenCloseIcon: classes.hidden,
            },
        );
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
                            return <span key={Math.random() + index}>{row?.[name]}</span>
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
