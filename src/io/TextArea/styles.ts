import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useTextAreaStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  textarea: {
    borderColor: "rgba(0, 0, 0, 0.23)",
    padding: theme.spacing(1.5),
    borderRadius: 4,
    boxSizing: "border-box",
    width: "100%",
  },
  error: {
    border: `1px solid ${theme.design.colors.red70}`,
  },
  label: {
    marginBottom: theme.spacing(1),
    fontSize: "1rem",
  },
  feedback: {
    marginTop: 16,
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
}));
