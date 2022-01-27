import { FC } from "react";
import { TextInputProps } from "./types";
import { OutlinedInput, InputLabel } from "@mui/material";
import { useTextStyles } from "./styles";
import Typography from "@mui/material/Typography";
import clx from 'classnames';

export const TextInput: FC<TextInputProps> = ({
  label,
  feedback,
  ...props
}) => {
  const classes = useTextStyles();

  const getFeedbackVariant = () => {
    let feedbackVariant;

    switch (feedback.status) {
      case "success":
        feedbackVariant = classes.feedbackSuccess;
        break;
      case "error":
        feedbackVariant = classes.feedbackError;
        break;
      case "neutral":
        feedbackVariant = classes.feedbackNeutral;
        break;
      default:
        feedbackVariant = classes.feedbackNeutral;
    }

    return feedbackVariant;
  }

  return (
    <div className={classes.root}>
      {label && (
        <InputLabel className={classes.label} htmlFor={props.name}>
          {label}
        </InputLabel>
      )}
      <OutlinedInput {...props} />
      {feedback && <Typography className={clx(classes.feedback, getFeedbackVariant())}>{feedback.text}</Typography>}
    </div>
  );
};
