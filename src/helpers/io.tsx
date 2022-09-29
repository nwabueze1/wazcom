import { isValidElement, FC } from "react";
import Typography from "@mui/material/Typography";
import clx from "classnames";
import { useFeedbackStyles } from "./styles";

export const getFeedbackVariant = (status: Feedback["status"]) => {
  let feedbackVariant;
  const classes = useFeedbackStyles();

  switch (status) {
    case "success":
      feedbackVariant = clx(classes.feedback, classes.feedbackSuccess);
      break;
    case "error":
      feedbackVariant = clx(classes.feedback, classes.feedbackError);
      break;
    case "neutral":
      feedbackVariant = clx(classes.feedback, classes.feedbackNeutral);
      break;
    default:
      feedbackVariant = clx(classes.feedback, classes.feedbackNeutral);
  }

  return feedbackVariant;
};

export type Feedback = {
  text: string | string[] | JSX.Element;
  status?: "success" | "neutral" | "error";
};

const TextFeedback: FC<{
  text: string;
  status: Feedback["status"];
}> = ({ text, status }) => (
  <Typography className={getFeedbackVariant(status)}>{text}</Typography>
);

export const displayFeedback = (feedback: Feedback) => {
  if (!isValidElement(feedback.text)) {
    return typeof feedback.text === "string" ? (
      <TextFeedback status={feedback.status} text={feedback.text} />
    ) : (
      (feedback.text as string[]).map((text: string, index: number) => (
        <TextFeedback key={index} status={feedback.status} text={text} />
      ))
    );
  }

  return <>{feedback.text}</>;
};
