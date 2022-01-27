export const getFeedbackVariant = (
  classes: any,
  feedback: { text: string, status?: string },
) => {
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
};
