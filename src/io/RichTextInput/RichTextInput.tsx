import * as React from "react";
import { FormLabel, OutlinedInput } from "@mui/material";
import { useTextareaStyles } from "./styles";
import { RichTextInputProps } from "./types";

export const RichTextInput: React.FC<RichTextInputProps> = ({
  label,
  placeholder,
  name,
  onChange,
  error,
  showInformation,
  information,
  type,
  value,
  maxLength,
  disabled,
}) => {
  const classes = useTextareaStyles();

  return (
    <div className={classes.root}>
      {label && <FormLabel className={classes.label}>{label}</FormLabel>}
      <div className={classes.input_parent}>
        <OutlinedInput
          placeholder={value ? value : placeholder}
          name={name}
          rows={5}
          multiline
          onChange={onChange}
          type={type}
          error={error}
          value={value}
          disabled={disabled}
          className={(classes.input, classes.customTextField)}
          inputProps={{
            maxLength: maxLength,
          }}
        />
        {showInformation && (
          <div className={classes.information}>{information}</div>
        )}
      </div>
    </div>
  );
};
