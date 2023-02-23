import clx from "classnames";
import React, { useMemo, cloneElement, isValidElement } from "react";
import Select, { SingleValue, components } from 'react-select';
import { AiFillCaretDown } from "react-icons/ai";
import theme from "../../theme";
import { useSelectStyles } from "./styles";
import { SelectInputOptionsProps, SelectInputProps } from "./types";

export const SelectInput: React.FC<SelectInputProps> = ({
    onChange,
    options,
    name,
    className,
    containerClass,
    label,
    value,
    errors,
    isSuccess,
    isError,
    hideLabel = false,
    info,
    required = false,
    width,
    height,
    helperText,
    backgroundColor,
    borderWidth,
    borderColor,
    borderStyle,
    menuIsOpen,
    classNames,
    ...props
}) => {
    const classes = useSelectStyles();

    const handleChange = (e: SingleValue<SelectInputOptionsProps>) => {
        if (onChange) {
            onChange?.({ ...e, name: name ?? "", value: e?.value });
        }
    };

    const selectValue = useMemo(() => options?.find((option) => option.value == value), [value]);
    const labelElement = isValidElement(label) ? cloneElement(label, {}) : label;

    const DropdownIndicator = (props: any) => (
        <components.DropdownIndicator {...props}>
            <AiFillCaretDown />
        </components.DropdownIndicator>
    )

    return (
        <div className={clx(classes.root, className)}>
            <span className={classes.labelWrapper}>
                {
                    !hideLabel &&
                    labelElement &&
                    <label htmlFor={name} className={classes.label}>
                        {labelElement}
                        {required && <span className={classes.required}>*</span>}
                    </label>
                }
            </span>
            <Select
                menuIsOpen={menuIsOpen}
                components={{
                    DropdownIndicator,
                    IndicatorSeparator: () => null
                }}
                styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        minHeight: 34,
                        height: height || 34,
                        width: width || '100%',
                        backgroundColor: backgroundColor || theme.design.colors.waz_white100,
                        borderWidth: borderWidth ?? 1,
                        borderStyle: borderStyle ?? 'solid',
                        borderColor: borderColor ?? (
                            isSuccess ? theme.design.colors.waz_primary100 :
                            isError ? theme.design.colors.error : theme.design.colors.waz_primary700
                        ),
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 400,
                        fontSize: theme.typography.fontSize,
                        boxShadow: 'none',

                        '&:hover': {
                            borderColor: theme.design.colors.primary600,
                        },
                        '&:focus': {
                            borderColor: theme.design.colors.primary500,
                        },
                        '&:hover:focus': {
                            borderColor: theme.design.colors.primary500,
                        }
                    }),
                    indicatorsContainer: (baseStyles) => ({
                        ...baseStyles,
                        "> div": {
                            padding: 6,
                        }
                    }),
                    option: (baseStyles, { isFocused, data }) => {
                        return {
                            ...baseStyles,
                            color: theme.design.colors.grey100,
                            fontSize: theme.typography.fontSize,
                            backgroundColor: data?.value == value?.value && !isFocused ? theme.design.colors.primary500 : theme.design.colors.white
                        };
                    },
                    menu: (baseStyles) => {
                        return {
                            ...baseStyles,
                            borderColor: theme.design.colors.primary500,
                            boxShadow: 'none',
                            '&:hover': {
                                borderColor: theme.design.colors.primary600,
                            },
                        };
                    },
                    menuList: (baseStyles) => {
                        return {
                            ...baseStyles,
                            padding: 0,
                            boxShadow: '0px 3px 6px #00000014',
                            borderRadius: 4
                        };
                    },
                }}
                classNames={{
                    container: () => (clx(classes.container, containerClass, classNames?.container)),
                    control: ({ isDisabled, isFocused }) => (clx(!isDisabled && isFocused && classes.control, classNames?.control)),
                    option: ({ isDisabled, isFocused }) => (clx(!isDisabled && isFocused && classes.option))
                }}
                value={selectValue}
                options={options}
                onChange={handleChange}
                {...props}
            />
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