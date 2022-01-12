import { FC } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { InputLabel, TextField } from "@mui/material";
import { useComboBoxStyles } from "./styles";
import { ComboBoxInputProps, ComboBoxInputOptionProps } from "./types";

const filter = createFilterOptions<ComboBoxInputOptionProps>();

export const ComboBoxInput: FC<ComboBoxInputProps> = ({
  name,
  onChange,
  options,
  label,
  value,
  placeholder,
  helperText,
}) => {
  const classes = useComboBoxStyles();

  const handleChange = (selectedOption: string) => {
    const value = options.find(
      (option) => option.label === selectedOption,
    ).value;
    onChange?.({ name: String(name), value });
  };

  const handleFilterOptions = (options: ComboBoxInputOptionProps[], params: any) => {
    const filtered = filter(options, params);
    const { inputValue } = params;
    // Suggest the creation of a new value
    const isExisting = options.some(
      (option: any) => inputValue === option.label,
    );
    if (inputValue !== "" && !isExisting) {
      filtered.push({
        value: inputValue,
        label: `Add "${inputValue}"`,
      });
    }

    return filtered;
  };

  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={name}>
          {label}
        </InputLabel>
      )}
      <Autocomplete
        options={options ?? []}
        getOptionLabel={(option) => option.label}
        style={{ width: 300 }}
        onChange={(_, selectedOption) => {
          handleChange(selectedOption as string);
        }}
        filterOptions={handleFilterOptions}
        value={value}
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
