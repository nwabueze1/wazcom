import { FC } from "react";
import { TextInputProps } from "./types";
import { OutlinedInput, InputLabel } from "@mui/material";
import { useTextStyles } from "./styles";
import Typography from "@mui/material/Typography";
import clx from 'classnames';
import { getFeedbackVariant } from "../../helpers/io";

export const TextInput: FC<TextInputProps> = ({
  label,
  feedback,
  ...props
}) => {
  const classes = useTextStyles();

  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={props.name}>
          {label}
        </InputLabel>
      )}
      <OutlinedInput {...props} />
      {feedback && <Typography className={clx(classes.feedback, getFeedbackVariant(classes, feedback))}>{feedback.text}</Typography>}
    </div>
  );
};
