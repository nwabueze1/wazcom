import React from "react";
import clx from 'classnames';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import { BiTimeFive } from "react-icons/bi";

import { useTimeInputStyles } from "./styles";
import { TimeInputProps } from "./types";

export const TimeInput: React.FC<TimeInputProps> = ({
    variant = 'time_picker',
    className,
    popupClassName,
    label,
    hideLabel = false,
    name,
    startTimeName,
    endTimeName,
    onChange,
    required = false,
    ...props
}) => {
    const classes = useTimeInputStyles();

    const handleChange = (event: any) => {
        if (onChange) onChange?.({ name: event?.name ?? '', value: event?.value?.format() ?? '' });
    };

    return (
        <div className={clx(classes.root, className)}>
            <div className={classes.labelWrapper}>
                {!hideLabel && label && (
                    <label htmlFor={name} className={classes.label}>
                    {label}
                    {required && <span className={classes.required}>*</span>}
                </label>
            )}
            </div>
            <div className={classes.baseInput}>
                <BiTimeFive width={16} height={16} />
                <TimePicker
                    showSecond={false}
                    use12Hours={true}
                    format={'h:mm a'}
                    onChange={(value) => handleChange({ name, value })}
                    className={classes.input}
                    popupClassName={clx(classes.containerDiv, popupClassName)}
                    defaultValue={moment().hour(0).minute(0)}
                    {...props}
                />
            </div>
        </div>
    )
};