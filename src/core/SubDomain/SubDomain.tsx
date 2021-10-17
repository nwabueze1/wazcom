import * as React from "react";
import { FormLabel, OutlinedInput } from "@mui/material";
import { useSubDomainStyles } from "./styles";
import { SubDomainProps } from "./types";
import { IsRequired } from "../Common/isRequired/isRequired";

export const SubDomain: React.FC<SubDomainProps> = ({
  label,
  placeholder,
  name,
  onChange,
  multiline,
  props,
  rows,
  error,
  errorMessage,
  showInformation,
  information,
  type,
  value,
  maxLength,
  disabled,
}) => {
  const classes = useSubDomainStyles(props);

  return (
    <div className={classes.root}>
      <FormLabel className={classes.label}>{label}</FormLabel>
      <div className={classes.input_parent}>
        <OutlinedInput
          placeholder={value ? value : placeholder}
          name={name}
          rows={rows}
          multiline={multiline}
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
