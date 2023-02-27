import { FC, useEffect, useState } from "react";
import { useComboBoxStyles } from "./styles";
import { ClickAwayListener } from "@mui/base";
import { ComboBoxInputProps, ComboBoxInputOptionProps } from "./types";
import { TextInput } from "../TextInput";
import clx from "classnames";

export const ComboBoxInput: FC<ComboBoxInputProps> = ({
    name,
    isAdd = true,
    onChange,
    options: initialOptions,
    label,
    isError,
    isSuccess,
    helperText,
    required,
    placeholder,
    className,
}) => {
    const classes = useComboBoxStyles();
    const [filter, setFilter] = useState("");
    const [options, setOptions] = useState(initialOptions);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        setOptions(initialOptions);
    }, [initialOptions]);

    const handleSelect = (option: ComboBoxInputOptionProps) => {
        setFilter(option?.label);
        onChange?.({ name: String(name), value: option?.value });
        setShowOptions(false);
    };

    const handleFilterChange = ({ value: filter }: { name: string; value: string }) => {
        setFilter(filter);
    };

    const renderOptions = () => {
        const displayedOptions = options.filter((option) =>
            option?.label?.toLowerCase()?.includes(filter.toLowerCase()),
        );
        displayedOptions.length === 0 &&
            isAdd &&
            displayedOptions.push({ label: "Add " + filter, value: filter });

        return displayedOptions.map(({ label, value, subText }, index) => (
            <div
                key={index}
                className={classes.comboBoxOption}
                onClick={() => {
                    handleSelect({ label, value, subText });
                }}
            >
                <p className="label">{label}</p>
                {subText && <p className="subText">{subText}</p>}
            </div>
        ));
    };

    return (
        <ClickAwayListener
            onClickAway={() => {
                setShowOptions(false);
            }}
        >
            <div className={clx(classes.root, className)}>
                {label && (
                    <label htmlFor={name} className={classes.comboBoxLabel}>
                        {label}
                        {required && <span className={classes.comboBoxRequired}>*</span>}
                    </label>
                )}
                <TextInput
                    value={filter}
                    onChange={handleFilterChange}
                    onFocus={() => {
                        setShowOptions(true);
                    }}
                    placeholder={placeholder}
                    isError={isError}
                    isSuccess={isSuccess}
                    helperText={helperText}
                />
                {showOptions && <div className={classes.comboBoxOptions}>{renderOptions()}</div>}
            </div>
        </ClickAwayListener>
    );
};
