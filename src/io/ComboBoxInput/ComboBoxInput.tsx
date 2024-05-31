import { FC, useEffect, useRef, useState } from "react";
import { useComboBoxStyles } from "./styles";
import { ClickAwayListener } from "@mui/base";
import { ComboBoxInputProps, ComboBoxInputOptionProps } from "./types";
import { TextInput } from "../TextInput";
import clx from "classnames";
import { debounce } from "lodash";
import { CircularProgress } from "@mui/material";

export const ComboBoxInput: FC<ComboBoxInputProps> = ({
  name,
  isAdd = true,
  onChange,
  handleAdd,
  options: initialOptions,
  label,
  isError,
  isSuccess,
  helperText,
  required,
  placeholder,
  value,
  className,
  isLoading,
  hasSearch = false,
}) => {
  const classes = useComboBoxStyles();
  const updateSearchValue = useRef(
    debounce(
      (search: string) =>
        onChange?.({
          value: search,
          type: "search",
        }),
      400,
    ),
  );

  const [filter, setFilter] = useState("");
  const [options, setOptions] = useState(initialOptions);
  const [showOptions, setShowOptions] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    console.log("inside the combobox with the options change", initialOptions);
    setOptions(initialOptions);
  }, [initialOptions]);

  useEffect(() => {
    if (!value || value === filter) return;
    setFilter("");
  }, [value]);

  const handleSelect = (option: ComboBoxInputOptionProps) => {
    setFilter(option?.label);
    onChange?.({ name: String(name), value: option?.value });
    setShowOptions(false);
  };

  const handleFilterChange = ({ value: filter }: { name: string; value: string }) => {
    setFilter(filter);
    if (hasSearch) updateSearchValue.current(filter);
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

    const isAddCondition = isAdd && filter.trim() !== "" && !(displayedOptions.find(({ label }) => label.toLowerCase() === filter.toLowerCase()));

    if (!isLoading && isAddCondition) {
      displayedOptions.unshift({ label: "Add " + filter, value: filter });
    }

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
          onEnter={({ value }) => {
            if (handleAdd) handleAdd(value);
          }}
          placeholder={placeholder}
          isError={isError}
          isSuccess={isSuccess}
          helperText={helperText}
          rightIcon={isLoading && <CircularProgress size={14} color="success" />}
        />
        {showOptions && <div className={classes.comboBoxOptions}>{renderOptions()}</div>}
      </div>
    </ClickAwayListener>
  );
};
