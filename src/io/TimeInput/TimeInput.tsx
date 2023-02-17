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
        <div className={classes.root}>
            <div className={classes.labelWrapper}>
                {!hideLabel && label && (
                    <label htmlFor={name} className={classes.label}>
                    {label}
                    {required && <span className={classes.required}>*</span>}
                </label>
            )}
            </div>
            {variant === 'time_picker' && (<TimePickerComponent name={name} onChange={(value) => handleChange({ name, value })} {...props} />)}
            {variant === 'time_range_picker' && (
                <div className={classes.timeRangeDiv}>
                    <TimePickerComponent name={startTimeName} onChange={(value) => handleChange({ name: startTimeName, value })} {...props} />
                    <span className={classes.timeRangeSeperator}>To</span>
                    <TimePickerComponent name={endTimeName} onChange={(value) => handleChange({ name: endTimeName, value })} {...props} />
                </div>
            )}
        </div>
    )
};

const TimePickerComponent = (props: TimeInputProps) => {
    const classes = useTimeInputStyles();

    return (
        <div className={classes.baseInput}>
            <BiTimeFive width={16} height={16} />
            <TimePicker
                showSecond={false}
                use12Hours={true}
                format={'h:mm a'}
                name={props.name}
                className={clx(classes.input, props.className)}
                popupClassName={clx(classes.containerDiv, props.popupClassName)}
                defaultValue={moment().hour(0).minute(0)}
                {...props}
            />
    </div>
    )
}