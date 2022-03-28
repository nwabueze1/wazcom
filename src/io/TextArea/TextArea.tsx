import React, { FC } from "react";
import { InputLabel, Typography } from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { useTextAreaStyles } from "./styles";
import { TextAreaProps } from "./types";
import clx from "classnames";
import { getFeedbackVariant } from "../../helpers/io";

export const TextArea: FC<TextAreaProps> = ({
  name,
  className,
  label,
  value,
  onChange,
  minRows,
  feedback,
  error,
  ...props
}) => {
  const classes = useTextAreaStyles();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.({ name: name ?? "", value: e.target.value });
  };

  return (
    <div className={clx(classes.root, className)}>
      {label && (
        <InputLabel className={classes.label} htmlFor={name ?? ""}>
          {label}
        </InputLabel>
      )}
      <TextareaAutosize
        minRows={minRows ?? 5}
        className={clx(classes.textarea, error && classes.error)}
        name={name}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {feedback && (
        <Typography
          className={clx(
            classes.feedback,
            getFeedbackVariant(classes, feedback),
          )}
        >
          {feedback.text}
        </Typography>
      )}
    </div>
  );
};
