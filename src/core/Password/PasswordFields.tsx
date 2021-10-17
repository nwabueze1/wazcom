import * as React from "react";
import { FormLabel, OutlinedInput } from "@mui/material";
import { useStyles } from "./styles";
import { PasswordFieldsProps } from "./types";

export const PasswordFields: React.FC<PasswordFieldsProps> = ({
  siteName,
  placeholder,
  name,
  onChange,
  multiline,
  props,
  rows,
  error,
  showInformation,
  information,
}) => {
  const classes = useStyles(props);

  return (
    <div className={classes.nameContainer}>
      <FormLabel className={classes.label}>{siteName}</FormLabel>
      <div className={classes.input_parent}>
        <OutlinedInput
          placeholder={placeholder}
          name={name}
          rows={rows}
          type={"password"}
          multiline={multiline}
          onChange={onChange}
          className={(classes.input, classes.customTextField)}
        />
        {showInformation && (
          <div className={classes.information}>{information}</div>
        )}
      </div>
      {error && (
        <p className={classes.error_message}>
          {name?.replace(/_/g, " ")} is required
        </p>
      )}
    </div>
  );
};
