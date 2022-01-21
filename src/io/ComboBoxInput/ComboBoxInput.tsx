import { FC, useCallback, useEffect, useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { InputLabel, TextField } from "@mui/material";
import { useComboBoxStyles } from "./styles";
import { ComboBoxInputProps, ComboBoxInputOptionProps } from "./types";

const filter = createFilterOptions<ComboBoxInputOptionProps>();

export const ComboBoxInput: FC<ComboBoxInputProps> = ({
  name,
  onChange,
  options: initialOptions,
  label,
  value,
  placeholder,
  helperText,
}) => {
  const classes = useComboBoxStyles();
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  const handleChange = (selectedOption: ComboBoxInputOptionProps) => {
    const value = options.find(
      (option) =>
        option?.label.toLowerCase() === selectedOption?.label.toLowerCase(),
    )?.value;
    onChange?.({ name: String(name), value: value ?? selectedOption.label });
  };

  const handleFilterOptions = (
    options: ComboBoxInputOptionProps[],
    params: any,
  ) => {
    const filtered = filter(options, params);
    const { inputValue } = params;
    // Suggest the creation of a new value
    const isExisting = options.some(
      (option: any) => inputValue === option.label,
    );
    if (inputValue !== "" && !isExisting) {
      filtered.push({
        value: inputValue,
        label: `Add ${inputValue}`,
      });
    }

    return filtered;
  };

  const getValue = useCallback(() => {
    const label = (options as ComboBoxInputOptionProps[])?.find(
      (option) => option.value.toLowerCase() == value,
    )?.label;
      console.log(value);
    if (label) return { label, value };
    
    return { label: "", value: "" };
    
  }, [options, value]);

  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={name}>
          {label}
        </InputLabel>
      )}
      <Autocomplete
        options={options ?? []}
        getOptionLabel={(option) => {
          return option?.label ?? "";
        }}
        style={{ width: 300 }}
        value={getValue()}
        onChange={(_, selectedOption) => {
          handleChange(selectedOption as ComboBoxInputOptionProps);
        }}
        filterOptions={handleFilterOptions}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            variant="outlined"
          />
        )}
      />
      {helperText && <p className={classes.helperText}>{helperText}</p>}
    </div>
  );
};
