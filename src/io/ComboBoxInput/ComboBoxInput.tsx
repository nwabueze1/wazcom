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
  onEnter,
  options: initialOptions,
  label,
  isError,
  isSuccess,
  helperText,
  required,
  placeholder,
  value,
  className,
}) => {
  const classes = useComboBoxStyles();
  const [filter, setFilter] = useState("");
  const [options, setOptions] = useState(initialOptions);
  const [showOptions, setShowOptions] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  useEffect(() => {
    if (!value) return;
    const filter = options?.find((option) => option.value === value)?.label ?? "";
    setFilter(filter);
  }, [value]);

  const handleSelect = (option: ComboBoxInputOptionProps) => {
    setFilter(option?.label);
    onChange?.({ name: String(name), value: option?.value });
    setShowOptions(false);
  };

  const handleOnEnter = ({ name, value }: { name: string, value: string }) => {
    if (onEnter) {
      handleSelect({ label: name, value })
      onEnter?.({ name, value });
    }
  }

  const handleFilterChange = ({ value: filter }: { name: string; value: string }) => {
    setFilter(filter);
    setIsFocused(false);
  };

  const handleFocus = () => {
    const optionLabels = options?.map(({ label }) => label?.toLowerCase());
    optionLabels?.includes(filter?.toLowerCase()) && setIsFocused(true);
    setShowOptions(true);
  };

  const renderOptions = () => {
    const displayedOptions = isFocused
      ? options
      : options.filter((option) => option?.label?.toLowerCase()?.includes(filter.toLowerCase()));
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
        setIsFocused(false);
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
          onFocus={handleFocus}
          onEnter={handleOnEnter}
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
