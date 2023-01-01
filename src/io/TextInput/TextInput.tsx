import React, { FC } from "react";
import { useTextStyles } from "./styles";
import { TextInputProps } from "./types";
import clx from 'classnames';

/**
 * Text Input IO Component
 * 
 * - Should follow the following constraints;
 * -- labels are optional (should show or hide if its provided but can be manually turned off. Manual turn off/on takes precedence over if provided or not).
 * -- startIcons and endIcons
 * -- should expose the following events: onFocus, onEnter
 * -- helperText
 * -- info
 */
export const TextInput: FC<TextInputProps> = ({
    className,
    label,
    helperText,
    hideLabel = false,
    info,
    onChange,
    required = false,
    value,
}) => {
    const textClasses = useTextStyles();

    const name = `${Math.floor(Math.random() * 1000)}-text-field`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={clx(textClasses.root, className)}>
            { 
                !hideLabel && 
                label && 
                <label htmlFor={name} className={textClasses.label}>
                    { label }
                    { required && <span className={textClasses.required}>*</span> }
                </label>
            } 
            <input
                name={name}
                value={value}
                onChange={handleChange}
                className={textClasses.input}
            />
        </div>
    );
};
