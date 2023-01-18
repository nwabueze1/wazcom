import clx from 'classnames';
import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { PostTitleInputProps } from './types';
import { usePostTitleStyles } from './styles';

export const PosTitleInput: FC<PostTitleInputProps> = ({
    className,
    label,
    errors,
    helperText,
    hideLabel = false,
    info,
    name,
    onChange,
    required,
    showCC,
    type = "text",
    ...props
}) => {
    const classes = usePostTitleStyles();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange?.({ name: name ?? "", value: e.target.value });
        }
    };

    return (
        <div className={clx(classes.root, className)}>
            <div className={classes.labelWrapper}>
                {
                    !hideLabel &&
                    label &&
                    <label htmlFor={name} className={classes.label}>
                        {label}
                        {required && <span className={classes.required}>*</span>}
                    </label>
                }
                {showCC && <span className={clx(classes.wordCount, classes.label)}>{props?.value && props?.value.length > 0 && props?.value.length}</span>}
            </div>
            <input type={type} className={clx(classes.input, errors && classes.error)} onChange={handleChange} {...props} />
        </div>
    )
};