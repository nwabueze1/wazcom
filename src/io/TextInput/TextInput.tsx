import { FC } from "react";
import { TextInputProps } from "./types";
import {
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useTextStyles } from "./styles";
import clx from "classnames";
import { displayFeedback } from "../../helpers/io";

export const TextInput: FC<TextInputProps> = ({
  className,
  classNames,
  label,
  feedback,
  icon,
  ...props
}) => {
  const classes = useTextStyles();

  return (
    <div className={clx(classes.root, className)}>
      {label && (
        <InputLabel
          className={clx(classes.label, classNames?.label)}
          htmlFor={props.name}
        >
          {label}
        </InputLabel>
      )}
      <OutlinedInput
        {...props}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              {icon}
            </IconButton>
          </InputAdornment>
        }
        className={
          classNames?.textInput ? (classNames.textInput as string) : ""
        }
        classes={
          classNames?.classes
            ? (classNames.classes as { [key: string]: string })
            : {}
        }
      />
      {feedback && displayFeedback(feedback)}
    </div>
  );
};
