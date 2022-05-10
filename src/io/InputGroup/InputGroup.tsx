import { FC } from "react";
import { useInputGroupStyles } from "./styles";
import { InputGroupProps } from "./types";
import { InputLabel } from "@mui/material";
import { TextInput } from "../TextInput";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";

export const InputGroup: FC<InputGroupProps> = ({
  className,
  classNames,
  text,
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
          InputProps={{
            className: classes.textInput
          }}
        />
        <div className={clx(classes.text, classNames?.text)}>{text}</div>
      </div>
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
