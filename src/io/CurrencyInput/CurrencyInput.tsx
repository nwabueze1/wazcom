import clx from 'classnames';
import { isArray } from 'lodash';
import { FC, cloneElement, isValidElement } from "react";
import React, { ChangeEvent, KeyboardEvent } from "react";
import { NumericFormat } from 'react-number-format';


import { useCurrencyInputStyles, useTextInputIconStyles } from "./styles";
import { CurrencyInputProps, CurrencyIconProps } from "./types";

export const CurrencyInputField: FC<CurrencyInputProps> = ({
    className,
    currency,
    label,
    errors,
    isError,
    isSuccess,
    hideLabel = false,
    name,
    required = false,
    iconSpacing,
    width,
    height,
    color,
    background,
    borderWidth,
    borderColor,
    borderStyle,
    borderRadius,
    onChange,
    onFocus,
    onEnter,
    onBlur,
    ...props
}) => {
    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    const classes = useCurrencyInputStyles({
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
                {(!hideLabel && label) && (
                    <label htmlFor={name} className={classes.label}>
                        {label}
                        {required && <span className={classes.required}>*</span>}
                    </label>
                )}
            </div>
            <div className={clx(
                classes.baseInput,
                classes.defaultInput,
                isSuccess && classes.successInput,
                (isError || errors) && classes.errorInput,
                isFocused && classes.focusedInput
            )}>
                {currency && (<CurrencyIcon marginRight={iconSpacing}>{currency}</CurrencyIcon>)}
                <NumericFormat
                    className={clx(classes.input)}
                    thousandSeparator=","
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleOnKeyDown}
                />
            </div>
        </div>
    )
};

function CurrencyIcon({ children, marginLeft, marginRight, ...rest }: CurrencyIconProps) {
    const classes = useTextInputIconStyles({ marginLeft, marginRight });
    const _className = clx(classes.root, classes.iconSpacing);
    const _children = isValidElement(children) ? cloneElement(children, {}) : (
        !isArray(children) ? (<div className={classes.currencySymbol}>{children}</div>) : (
            <div className={classes.currencySymbol}>
                <select>
                    {children.map(child => (<option>{child}</option>))}
                </select>
            </div>
        )
    )

    return (
        <span {...rest} className={_className}>
            {_children}
        </span>
    )
}