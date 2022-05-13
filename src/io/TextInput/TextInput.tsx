import React, { FC } from "react";
import { TextInputProps } from "./types";
import { TextField, InputLabel } from "@mui/material";
import { useTextStyles } from "./styles";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";

export const TextInput: FC<TextInputProps> = ({
  className,
  classNames,
  label,
  variant,
  onChange,
  feedback,
  helperText,
  icon,
  ...props
}) => {
  const classes = useTextStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.({ name: props.name ?? "", value: e.target.value });
  };

  return (
    <div className={clx(className, classes.root)}>
      {label && (
        <InputLabel
          className={classNames?.label ? (classNames?.label as string) : ""}
          htmlFor={props.name}
        >
          {label}
          <p>{props.required ? " *" : ""}</p>
        </InputLabel>
      )}
      <TextField
        {...props}
        variant={variant ?? "outlined"}
        onChange={handleChange}
        className={
          classNames?.textInput ? (classNames.textInput as string) : ""
        }
        classes={
          classNames?.classes
            ? (classNames.classes as { [key: string]: string })
            : {}
        }
      />
      {helperText}
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
