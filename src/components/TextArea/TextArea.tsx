import React from "react";
import { FormLabel, OutlinedInput } from "@material-ui/core";
import { useTextareaStyles } from "./styles";
import { TextareaProps } from "./types";
import { IsRequired } from "../Common/isRequired/isRequired";

export const TextArea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  name,
  onChange,
  error,
  errorMessage,
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
      {disabled ? null : (
        <IsRequired error={error} errorMessage={errorMessage} name={name} />
      )}
    </div>
  );
};
