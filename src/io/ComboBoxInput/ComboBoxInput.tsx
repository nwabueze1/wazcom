import { FC } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { InputLabel, TextField } from "@mui/material";
import { useComboBoxStyles } from "./styles";
import { ComboBoxInputProps } from "./types";

export const ComboBoxInput: FC<ComboBoxInputProps> = ({
  name,
  onChange,
  error,
  comboData,
  label,
  value,
}) => {
  const classes = useComboBoxStyles();

  return (
    <div className={classes.root}>
      <InputLabel className={classes.label} htmlFor={name}>
        {label}
      </InputLabel>
      <Autocomplete
        options={comboData ?? [""]}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        onChange={onChange}
        value={value}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
      {error && (
        <p className={classes.error_message}>
          {name?.replace(/_/g, " ")} is required
        </p>
      )}
    </div>
  );
};
