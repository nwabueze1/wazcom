import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useFeedbackStyles = makeStyles((theme: Theme) => ({
  feedback: {
    marginTop: 8,
  },
  feedbackSuccess: {
    color: "green",
  },
  feedbackError: {
    color: "red",
  },
  feedbackNeutral: {
    color: "black",
  },
  error: {
    border: `2px solid ${theme.design.colors.dangerColor100}`,
  },
}));
