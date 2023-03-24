import { FC, useState, useEffect } from "react";
import { useInputGroupStyles } from "./styles";
import { InputGroupProps } from "./types";
import { InputLabel } from "@mui/material";
import { TextInput } from "../TextInput";
import { displayFeedback } from "../../helpers/io";
import clx from "classnames";
import { truncate } from "../../utilities/Post";

export const InputGroup: FC<InputGroupProps> = ({
  className,
  classNames,
  text,
  feedback,
  label,
  icon,
  ...props
}) => {
  const classes = useInputGroupStyles();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setInputText(text ?? "");
  }, [text]);

  return (
    <div className={clx(classes.root, className)}>
      {label && (
        <InputLabel
          className={classNames?.label ? (classNames?.label as string) : undefined}
          htmlFor={props.name}
        >
          {label}
          <p className={classes.required}>{props.required ? "*" : ""}</p>
        </InputLabel>
      )}
      <div className={clx(classes.inputGroup, classNames?.inputGroup)}>
        <TextInput
          // {...props}
          value={""}
          className={clx(classes.textInput, classNames?.textInput)}
        />
        <div className={clx(classes.text, classNames?.text, !icon && classes.textPosition)}>
          {icon && <div className={clx(classes.icon, classNames?.groupIcon)}>{icon}</div>}
          <p>{truncate(inputText)}</p>
        </div>
      </div>
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
