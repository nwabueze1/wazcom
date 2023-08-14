import { FC, useEffect, useState } from "react";
import { useComboBoxStyles } from "./styles";
import { ClickAwayListener } from "@mui/base";
import { ComboBoxInputProps, ComboBoxInputOptionProps } from "./types";
import { TextInput } from "../TextInput";
import clx from "classnames";
import { BiSearch } from "react-icons/bi";

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
    if (!value) {
      setFilter("");
    } else {
      const valueLabel = options?.find((option) => option.value === value)?.label;
      setFilter(valueLabel || value);
    }
  }, [value, options]);

  const handleSelect = (option: ComboBoxInputOptionProps) => {
    setFilter(option?.value);
    onChange?.({ name: String(name), value: option?.value });
    setShowOptions(false);
  };

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
    let displayedOptions = isFocused
      ? options
      : options.filter((option) => option?.label?.toLowerCase()?.includes(filter.toLowerCase()));

    if (displayedOptions.length === 0) {
      if (isAdd) {
        displayedOptions = [{ label: "Add " + filter, value: filter }];
      } else {
        displayedOptions = [{ label: "Nothing Found", value: "nothing_found" }];
      }
    }

    return displayedOptions.map(({ label, value, subText }, index) => (
      <div
        key={index}
        className={`${classes.comboBoxOption} ${value === "nothing_found" ? "unclickable" : ""}`}
        onClick={() => {
          if (value !== "nothing_found") {
            handleSelect({ label, value, subText });
          }
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
          placeholder={placeholder}
          isError={isError}
          height={"auto"}
          width={"auto"}
          isSuccess={isSuccess}
          helperText={helperText}
          rightIcon={<BiSearch />}
        />
        {showOptions && <div className={classes.comboBoxOptions}>{renderOptions()}</div>}
      </div>
    </ClickAwayListener>
  );
};
