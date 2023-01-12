import clx from 'classnames';
import { isNumber } from 'lodash';
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
    const [isFocused, setIsFocused] = React.useState<boolean>(false)
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
                {showCC && <span className={clx(classes.wordCount, classes.label)}>
                    {props?.value && props?.value?.length && props?.value.length > 0 && props?.value.length}
                </span>}
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
