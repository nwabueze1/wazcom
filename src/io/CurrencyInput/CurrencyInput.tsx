// import { FC } from 'react';
// import MaskedInput from 'react-text-mask';
// import createNumberMask from 'text-mask-addons/dist/createNumberMask';

// import { CurrencyInputProps, InputProps } from "./types";

// const defaultMaskOptions = {
//   prefix: '',
//   suffix: '',
//   includeThousandsSeparator: true,
//   thousandsSeparatorSymbol: ',',
//   allowDecimal: true,
//   decimalSymbol: '.',
//   decimalLimit: 2, // how many digits allowed after the decimal
//   integerLimit: 7, // limit length of integer numbers
//   allowNegative: false,
//   allowLeadingZeroes: false,
// }

// export const CurrencyInputField: FC<CurrencyInputProps> = ({ maskOptions, ...inputProps }: InputProps) => {
//   const currencyMask = createNumberMask({ ...defaultMaskOptions, ...maskOptions });

//   return (
//       <>
//         <MaskedInput mask={currencyMask} {...inputProps} />
//       </>
//   )
// }

import clx from 'classnames';
import { isArray } from 'lodash';
import { FC, cloneElement, isValidElement } from "react";
import React, { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';


import { useCurrencyInputStyles, useTextInputIconStyles } from "./styles";
import { CurrencyInputProps, CurrencyIconProps } from "./types";

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

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
}

export const CurrencyInputField: FC<CurrencyInputProps> = ({
    maskOptions,
    inputProps,
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
    const currencyMask = createNumberMask({ ...defaultMaskOptions, ...maskOptions });
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
                    <SelectIcon marginRight={iconSpacing}>
                        {leftIcon}
                    </SelectIcon>
                )}
                <MaskedInput
                    type={type}
                    className={classes.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={handleOnKeyDown}
                    {...props}
                    mask={currencyMask}
                    {...inputProps}
                />
                {rightIcon && (
                    <SelectIcon marginLeft={iconSpacing}>
                        {rightIcon}
                    </SelectIcon>
                )}
            </div>
        </div>
    )
};

function SelectIcon({ children, marginLeft, marginRight, ...rest }: CurrencyIconProps) {
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