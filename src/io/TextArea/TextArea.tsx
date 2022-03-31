import React, { FC } from "react";
import { InputLabel } from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { useTextAreaStyles } from "./styles";
import { TextAreaProps } from "./types";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";

export const TextArea: FC<TextAreaProps> = ({
  name,
  className,
  classNames,
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
    <div className={clx(className, classes.root)}>
      {label && (
        <InputLabel
          className={classNames?.label as string ?? ""}
          htmlFor={name ?? ""}
        >
          {label}
        </InputLabel>
      )}
      <TextareaAutosize
        minRows={minRows ?? 5}
        name={name}
        value={value}
        onChange={handleChange}
        {...props}
        className={clx(
          classNames?.textArea,
          classes.textarea,
          error && classes.error,
        )}
      />
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
