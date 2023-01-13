import clx from 'classnames';
import { isNumber, isBoolean } from 'lodash';
import { FC, cloneElement, isValidElement } from "react";
import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import { useTextStyles, useTextInputIconStyles } from "./styles";
import { TextAreaProps, TextFieldProps, InputIconProps } from "./types";

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

/** TODO --  fix components success and error state */

export const TextInput: FC<TextFieldProps> = ({
    className,
    label,
    errors,
    isError,
    isSuccess,
    helperText,
    hideLabel = false,
    info,
    name,
    onChange,
    onFocus,
    onEnter,
    onBlur,
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
    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    const classes = useTextStyles({
        width,
        height,
        background,
        color,
        borderWidth,
        borderColor,
        borderStyle,
        borderRadius,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange?.({
                name: (e.target as HTMLInputElement).name ?? '',
                value: (e.target as HTMLInputElement).value ?? ''
            });
        }
    };
    const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (onEnter && (e.key === 'Enter')) {
            onEnter?.({
                name: (e.target as HTMLInputElement).name ?? '',
                value: (e.target as HTMLInputElement).value ?? ''
            });
        }
    };

    const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
        setIsFocused(() => true);
        if (onFocus) {
            onFocus?.({
                name: (e.target as HTMLInputElement).name ?? '',
                value: (e.target as HTMLInputElement).value ?? ''
            });
        }
    };

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        setIsFocused(() => false);
        if (onBlur) {
            onBlur?.({
                name: (e.target as HTMLInputElement).name ?? '',
                value: (e.target as HTMLInputElement).value ?? ''
            });
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
                {showCC && (<span className={clx(classes.wordCount, classes.label)}>
                    {props?.value && props?.value.length > 0 && props?.value.length}
                </span>)}
            </div>
            <div className={clx(
                classes.baseInput,
                classes.defaultInput,
                isSuccess && classes.successInput,
                (isError || errors) && classes.errorInput,
                isFocused && classes.focusedInput
            )}>
                {leftIcon && (
                    <InputIcon marginRight={iconSpacing}>
                        {leftIcon}
                    </InputIcon>
                )}
                <input
                    type={type}
                    className={classes.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={handleOnKeyDown}
                    {...props}
                />
                {rightIcon && (
                    <InputIcon marginLeft={iconSpacing}>
                        {rightIcon}
                    </InputIcon>
                )}
            </div>
            {helperText && (<span className={clx(
                classes.helperTextDefault,
                isSuccess && classes.helperTextSuccess,
                isError && classes.helperTextError
            )}>
                {helperText}
            </span>)}
        </div>
    )
};

export const TextArea: FC<Omit<TextAreaProps, "type">> = ({
    className,
    label,
    rows,
    helperText,
    hideLabel = false,
    isSuccess,
    isError,
    errors,
    info,
    name,
    width,
    height,
    background,
    color,
    borderWidth,
    borderColor,
    borderStyle,
    borderRadius,
    onChange,
    onFocus,
    onEnter,
    onBlur,
    required = false,
    showCC,
    ...props
}) => {
    const [isFocused, setIsFocused] = React.useState<boolean>(false)
    const classes = useTextStyles({
        rows,
        width,
        height,
        background,
        color,
        borderWidth,
        borderColor,
        borderStyle,
        borderRadius,
    });

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange?.({
                name: (e.target as HTMLTextAreaElement).name ?? '',
                value: (e.target as HTMLTextAreaElement).value ?? ''
            });
        }
    };
    const handleOnKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (onEnter && (e.key === 'Enter')) {
            onEnter?.({
                name: (e.target as HTMLTextAreaElement).name ?? '',
                value: (e.target as HTMLTextAreaElement).value ?? ''
            });
        }
    };

    const handleFocus = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setIsFocused(() => true);
        if (onFocus) {
            onFocus?.({
                name: (e.target as HTMLTextAreaElement).name ?? '',
                value: (e.target as HTMLTextAreaElement).value ?? ''
            });
        }
    };

    const handleBlur = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setIsFocused(() => false);
        if (onBlur) {
            onBlur?.({
                name: (e.target as HTMLTextAreaElement).name ?? '',
                value: (e.target as HTMLTextAreaElement).value ?? ''
            });
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
                {showCC && (<span className={clx(classes.wordCount, classes.label)}>
                    {props?.value && props?.value.length > 0 && props?.value.length}
                </span>)}
            </div>
            <div className={classes.textAreaContainer}>
                <textarea
                    className={clx(
                        classes.baseTextArea,
                        classes.defaultInput,
                        isSuccess && classes.successInput,
                        (isError || errors) && classes.errorInput,
                        isFocused && classes.focusedInput
                    )}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleOnKeyDown}
                    rows={rows || 5}
                    {...props}
                />
            </div>
            {helperText && (<span className={clx(
                classes.helperTextDefault,
                isSuccess && classes.helperTextSuccess,
                isError && classes.helperTextError
            )}>
                {helperText}
            </span>)}
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
    isSuccess,
    isError,
    onChange,
    onBlur,
    onFocus,
    onEnter,
    ...props
}) => {
    let sErrors;
    const [emailErrors, setEmailErrors] = useState<{ message: string }[]>();
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

    const handleChange = useCallback(({ name, value }: { name: string, value: any }) => {
        setIsValidEmail(() => validateEmail(value));
        (validateEmail(value) || value == "") ? setEmailErrors(undefined) : setEmailErrors([{ message: 'Invalid email !!' }]);

        if (onChange) {
            onChange?.({ name, value });
        }
    }, [errors, setEmailErrors]);

    if (errors || emailErrors) {
        sErrors = errors ? errors : undefined;
        sErrors = emailErrors ? (errors) ? [...errors, ...emailErrors] : emailErrors : undefined;
    }

    return (
        <TextInput
            type="email"
            name={name}
            isSuccess={isValidEmail || isSuccess}
            isError={!!sErrors || isError}
            errors={sErrors}
            onChange={handleChange}
            onFocus={onFocus}
            onEnter={onEnter}
            onBlur={onBlur}
            {...props}
        />
    )
}

export const NumberInput: FC<Omit<TextFieldProps, "type">> = ({
    name,
    errors,
    isValidated,
    isError,
    onChange,
    onBlur,
    onFocus,
    onEnter,
    showCC,
    ...props
}) => {
    let sErrors;
    const [isValidNumber, setIsValidNumber] = useState<boolean>(false);
    const [numberErrors, setNumberErrors] = useState<{ message: string }[]>();

    const handleChange = useCallback(({ name, value }: { name: string, value: any }) => {
        (isNumber(parseFloat(value)) || value == "") ? setNumberErrors(undefined) : setNumberErrors([{ message: 'Invalid number !!' }]);

        if (onChange) {
            onChange?.({ name, value });
        }

        if (isBoolean(isValidated)) {
            (isValidated && isNumber(parseFloat(value))) ? setIsValidNumber(true) : setIsValidNumber(false);
        } else {
            isNumber(parseFloat(value)) ? setIsValidNumber(true) : setIsValidNumber(false);
        }
    }, [errors, setNumberErrors, isValidated]);

    if (errors || numberErrors) {
        sErrors = errors ? errors : undefined;
        sErrors = numberErrors ? (errors) ? [...errors, ...numberErrors] : numberErrors : undefined;
    }

    return (
        <TextInput
            type="number"
            name={name}
            errors={sErrors}
            showCC={showCC}
            isSuccess={isValidNumber}
            isError={!!sErrors || isError}
            onChange={handleChange}
            onFocus={onFocus}
            onEnter={onEnter}
            onBlur={onBlur}
            {...props}
        />
    )
}

function InputIcon({ children, marginLeft, marginRight, ...rest }: InputIconProps) {
    const classes = useTextInputIconStyles({ marginLeft, marginRight });
    const _className = clx(classes.root, classes.iconSpacing);
    const _children = isValidElement(children) ? cloneElement(children, {}) : children

    return (
        <span {...rest} className={_className}>
            {_children}
        </span>
    )
}
