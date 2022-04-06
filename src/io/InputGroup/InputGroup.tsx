import { FC } from "react";
import { useInputGroupStyles } from "./styles";
import { InputGroupProps } from "./types";
import { InputLabel } from "@mui/material";
import { TextInput } from "../TextInput";
import { displayFeedback } from "helpers/io";
import clx from "classnames";

export const InputGroup: FC<InputGroupProps> = ({
  className,
  classNames,
  inputText,
  feedback,
  label,
  ...props
}) => {
  const classes = useInputGroupStyles();

  return (
    <div className={clx(classes.root, className)}>
      {label && (
        <InputLabel
          className={
            classNames?.label ? (classNames?.label as string) : undefined
          }
          htmlFor={props.name}
        >
          {label}
        </InputLabel>
      )}
      <div className={clx(classes.inputGroup, classNames?.inputGroup)}>
        <TextInput
          {...props}
          classNames={{
            textInput: clx(classes.textInput, classNames?.textInput),
          }}
        />
        <div className={clx(classes.inputText, classNames?.inputText)}>
          {inputText}
        </div>
      </div>
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
