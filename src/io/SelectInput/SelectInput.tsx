import clx from "classnames";
import { FC, useMemo } from "react";
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
    label,
    value,
    errors,
    hideLabel = false,
    info,
    required = false,
    width,
    height,
    ...props
}) => {
    const classes = useSelectStyles();

    const handleChange = (e: SingleValue<SelectInputOptionsProps>) => {
        if ( onChange) {
            onChange?.({ name: name ?? "", value: e?.value });
        }
    };

    const selectValue = useMemo(() => options?.find((option) => option.value == value), [value]);

    const DropdownIndicator = (props: any) => (
        <components.DropdownIndicator {...props}>
            <AiFillCaretDown />
        </components.DropdownIndicator>
    )

    return (
        <div className={clx(classes.root, className)}>
            <div className={classes.labelWrapper}>
                { 
                    !hideLabel && 
                    label && 
                    <label htmlFor={name} className={classes.label}>
                        { label }
                        { required && <span className={classes.required}>*</span> }
                    </label>
                }
            </div>
            <Select
                components={{
                    DropdownIndicator,
                    IndicatorSeparator: () => null
                }}
                styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        minHeight: 34,
                        height: height || 34,
                        width: width || 187,
                        borderColor: theme.design.colors.primary700,
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
                    control: ({ isDisabled, isFocused }) => {
                        return clx(
                            !isDisabled && isFocused && classes.control
                        )
                    },
                    option: ({ isDisabled, isFocused }) => 
                        clx(
                            !isDisabled && isFocused && classes.option
                        ) 
                }}
                value={selectValue}
                options={options}
                onChange={handleChange}
                {...props}
            />
        </div>
    )
};