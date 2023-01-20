import clx from 'classnames';
import { isArray } from 'lodash';
import { FC, useState, cloneElement, isValidElement } from "react";
import React, { ChangeEvent, KeyboardEvent } from "react";
import { NumericFormat } from 'react-number-format';
import { AiFillCaretDown, AiOutlineInfoCircle } from "react-icons/ai";
import { SelectInput } from "io";
import Select from 'react-select'


import { useCurrencyInputStyles, useTextInputIconStyles } from "./styles";
import { CurrencyInputProps, CurrencyIconProps } from "./types";
import currencies from "./currencies.json";

export const CurrencyInputField: FC<CurrencyInputProps> = ({
    variant = 'vertical',
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
    const [selectedCurrency, setSelectedCurrency] = React.useState<any>({});
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

    const _currencies = currencies?.map(currency => ({
        ...currency,
        label: currency.code,
        value: currency.code
    }));

    console.log('CURRENCIES', _currencies)

    return (
        <div className={clx(classes.root, className)}>
            {(variant !== 'basic') && (
                <div className={classes.selectContainer}>
                    <SelectInput
                        options={_currencies}
                        label={<SelectLabel />}
                    />
                </div>
            )}
            <div className={clx(classes.currencyContainer)}>
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
                    {currency && (
                        <CurrencyIcon marginRight={iconSpacing}>
                            {currency}
                        </CurrencyIcon>
                    )}
                    <NumericFormat
                        className={clx(classes.input)}
                        thousandSeparator=","
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onKeyDown={handleOnKeyDown}
                    />
                    {/* <Select options={options} /> */}
                </div>
            </div>
        </div>
    )
};

function CurrencyIcon({ children, marginLeft, marginRight, ...rest }: CurrencyIconProps) {
    const [toggle, setToggle] = useState<boolean>(false);
    const classes = useTextInputIconStyles({ marginLeft, marginRight });
    const _className = clx(classes.root, classes.iconSpacing);
    const CURRENCIES = currencies?.map(currency => ({
        label: currency.symbol,
        value: currency.symbol
    }));

    const handleChange = (value: any) => {
        console.log('HANDLEE_CHANGE', value)
    }

    const _children = isValidElement(children) ? cloneElement(children, {}) : (
        !isArray(children) ? (<div className={classes.currencySingle}>{children}</div>) : (
            <div className={classes.currencyMultiple}>
                {/* <span>{children}</span>
                <AiFillCaretDown /> */}
                 {/* <SelectInput options={CURRENCIES} /> */}
                {/* <select onChange={handleChange}>
                    {currencies.map(child => (<option value={child.symbol}>{child.name}</option>))}
                </select> */}
            </div>
        )
    )

    return (
        <span {...rest} className={_className}>
            {_children}
        </span>
    );
}

const SelectLabel = () => {
    const classes = useCurrencyInputStyles({});
    return (
        <span className={classes.selectLabel}>
            DISPLAY CURRENCY <AiOutlineInfoCircle />
        </span>
    );
}