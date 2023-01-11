import clx from 'classnames';
import { isNumber } from 'lodash';
import { FC, cloneElement, isValidElement } from "react";
import React, { ChangeEvent, useCallback, useState } from "react";
import { useTextStyles, useTextInputIconStyles } from "./styles";
import { TextAreaProps, TextFieldProps } from "./types";
import { TextInputIconProps } from "./types";

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
export const TextInput: FC<TextFieldProps> = ({
    className,
    label,
    errors,
    helperText,
    hideLabel = false,
    info,
    name,
    onChange,
    required = false,
    showCC,
    type = "text",
    leftIcon,
    rightIcon,
    iconSpacing,
    width,
    height,
    color,
    background,
    borderWidth,
    borderColor,
    borderStyle,
    borderRadius,
    ...props
}) => {
    const classes = useTextStyles({
        width,
        height,
        background,
        color,
        borderWidth,
        borderColor,
        borderStyle,
        borderRadius
    });

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
            <div className={clx(classes.inputContainer, errors && classes.error)}>
                {leftIcon && (<TextInputIcon marginRight={iconSpacing}>{leftIcon}</TextInputIcon>)}
                    <input type={type} className={classes.input} onChange={handleChange} {...props} />
                {rightIcon && (<TextInputIcon marginLeft={iconSpacing}>{rightIcon}</TextInputIcon>)}
            </div>
        </div>
    )
};

function TextInputIcon({ children, marginLeft, marginRight, ...rest }: TextInputIconProps) {
    const classes = useTextInputIconStyles({ marginLeft, marginRight });
    const _className = clx(classes.root, classes.iconSpacing);
    const _children = isValidElement(children) ? cloneElement(children, {}) : children

    return (
        <span {...rest} className={_className}>
            {_children}
        </span>
    )
}

export const TextArea: FC<Omit<TextAreaProps, "type">> = ({
    className,
    label,
    helperText,
    hideLabel = false,
    info,
    name,
    onChange,
    required = false,
    showCC,
    ...props
}) => {
    const classes = useTextStyles({});

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(name, e.target.value);
        onChange?.({ name: name ?? "", value: e.target.value });
    }, []);

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
                {showCC && <span className={clx(classes.wordCount, classes.label)}>{props?.value && props?.value?.length && props?.value.length > 0 && props?.value.length}</span>}
            </div>
            <textarea className={clx(classes.input, classes.textAreaInput)} onChange={handleChange} rows={5} {...props} />
        </div>
    )
};
const validateEmail = (email: string): boolean => {
    const validator = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

    return !(validator == null);
};

export const EmailInput: FC<Omit<TextFieldProps, "type">> = ({
    name,
    errors,
    onChange,
    ...props
}) => {
    let sErrors;
    const [emailErrors, setEmailErrors] = useState<{ message: string }[]>();

    const handleChange = useCallback(({ name, value }: { name: string, value: any }) => {
        (validateEmail(value) || value == "") ? setEmailErrors(undefined) : setEmailErrors([{ message: 'Invalid email !!' }]);

        if (onChange) {
            onChange?.({ name, value });
        }
    }, [errors, setEmailErrors]);

    if (errors || emailErrors) {
        sErrors = errors ? errors : undefined;
        sErrors = emailErrors ? (errors) ? [...errors, ...emailErrors] : emailErrors : undefined;
    }

    return <TextInput type="email" name={name} errors={sErrors} onChange={handleChange} {...props} />
}

export const NumberInput: FC<Omit<TextFieldProps, "type">> = ({
    name,
    errors,
    onChange,
    showCC,
    ...props
}) => {
    let sErrors;
    const [numberErrors, setNumberErrors] = useState<{ message: string }[]>();

    const handleChange = useCallback(({ name, value }: { name: string, value: any }) => {
        (isNumber(value) || value == "") ? setNumberErrors(undefined) : setNumberErrors([{ message: 'Invalid number !!' }]);

        if (onChange) {
            onChange?.({ name, value });
        }
    }, [errors, setNumberErrors]);

    if (errors || numberErrors) {
        sErrors = errors ? errors : undefined;
        sErrors = numberErrors ? (errors) ? [...errors, ...numberErrors] : numberErrors : undefined;
    }

    return <TextInput type="number" name={name} errors={sErrors} showCC={false} onChange={handleChange} {...props} />
}
