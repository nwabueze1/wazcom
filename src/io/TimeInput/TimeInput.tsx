import React from "react";
import clx from 'classnames';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import { BiTimeFive } from "react-icons/bi";

import { useTimeInputStyles } from "./styles";
import { TimeInputProps } from "./types";

export const TimeInput: React.FC<TimeInputProps> = ({
    className,
    popupClassName,
    label,
    hideLabel = false,
    name,
    showSecond = false,
    use12Hours = true,
    format = 'h:mm a',
    onChange,
    required = false,
    ...props
}) => {
    const classes = useTimeInputStyles();

    const handleChange = ({ name, value }: any) => {
        if (onChange) onChange?.({ name, value });
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
                    showSecond={showSecond}
                    use12Hours={use12Hours}
                    format={format}
                    onChange={(value) => handleChange({ name, value })}
                    className={classes.input}
                    popupClassName={clx(classes.containerDiv, popupClassName)}
                    {...props}
                />
            </div>
        </div>
    )
};