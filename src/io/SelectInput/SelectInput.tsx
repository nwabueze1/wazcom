import clx from "classnames";
import { FC, useMemo, cloneElement, isValidElement } from "react";
import Select, { SingleValue, components } from 'react-select';
import { AiFillCaretDown } from "react-icons/ai";
import theme from "../../theme";
import { useSelectStyles } from "./styles";
import { SelectInputOptionsProps, SelectInputProps } from "./types";

export const SelectInput: FC<SelectInputProps> = ({
    onChange,
    options,
    name,
    className,
    containerClass,
    label,
    value,
    errors,
    hideLabel = false,
    info,
    required = false,
    width,
    height,
    backgroundColor,
    borderWidth,
    borderColor,
    borderStyle,
    menuIsOpen,
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
                        backgroundColor: backgroundColor || '',
                        borderWidth: borderWidth ?? 1,
                        borderStyle: borderStyle ?? 'solid',
                        borderColor: borderColor ?? theme.design.colors.primary700,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 400,
                        fontSize: theme.typography.fontSize,
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
                    container: () => (clx(classes.container, containerClass)),
                    control: ({ isDisabled, isFocused }) => (clx(!isDisabled && isFocused && classes.control)),
                    option: ({ isDisabled, isFocused }) => (clx(!isDisabled && isFocused && classes.option))
                }}
                value={selectValue}
                options={options}
                onChange={handleChange}
                {...props}
            />
        </div>
    )
};