import clx from "classnames";
import { FC, useMemo } from "react";
import Select, { SingleValue } from 'react-select';
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
    ...props
}) => {
    const classes = useSelectStyles();

    const handleChange = (e: SingleValue<SelectInputOptionsProps>) => {
        if ( onChange) {
            onChange?.({ name: name ?? "", value: e?.value });
        }
    };

    const selectValue = useMemo(() => options?.find((option) => option.value == value), [value]);

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
                styles={{
                    control: (baseStyles) => ({
                        ...baseStyles,
                        minHeight: 34
                    }),
                    indicatorsContainer: (baseStyles) => ({
                        ...baseStyles,
                        "> div": {
                            padding: 6
                        }
                    }),
                    option: (baseStyles, { isFocused, data }) => {
                        return {
                            ...baseStyles,
                            color: theme.design.colors.primary100,
                            fontSize: theme.typography.fontSize,
                            backgroundColor: data?.value == value?.value && !isFocused ? theme.design.colors.primary500 : theme.design.colors.white
                        };
                    },
                    menuList: (baseStyles) => {
                        return {
                            ...baseStyles,
                            padding: 0,
                            border: `1px solid ${theme.design.colors.primary600}`,
                            borderRadius: 4
                        };
                    },
                }}
                classNames={{ 
                    control: ({ isDisabled, isFocused }) => {
                        return clx(
                            classes.select,
                            !isDisabled && isFocused && classes.control
                        )
                    },
                    menu: () => classes.control,
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