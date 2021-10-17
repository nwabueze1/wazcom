import * as React from "react";
import { FormLabel, OutlinedInput } from "@mui/material";
import { useEmailStyles } from "./styles";
import { EmailFieldsProps } from "./types";

export const Email: React.FC<EmailFieldsProps> = ({
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
  const classes = useEmailStyles(props);

  return (
    <div className={classes.nameContainer}>
      <FormLabel className={classes.label}>{siteName}</FormLabel>
      <div className={classes.input_parent}>
        <OutlinedInput
          placeholder={placeholder}
          name={name}
          type="email"
          rows={rows}
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
