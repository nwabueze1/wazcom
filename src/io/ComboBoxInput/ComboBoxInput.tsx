import { FC } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { InputLabel, TextField } from "@mui/material";
import { useComboBoxStyles } from "./styles";
import { ComboBoxInputProps } from "./types";

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

  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={name}>
          {label}
        </InputLabel>
      )}
      <Autocomplete
        options={options ?? [""]}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        onChange={onChange}
        value={value}
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
