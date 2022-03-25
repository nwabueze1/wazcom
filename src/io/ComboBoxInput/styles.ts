import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useComboBoxStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
  },
  label: {
    marginBottom: theme.spacing(1),
    fontSize: "1rem",
  },
  helperText: {
    marginTop: theme.spacing(2),
    fontSize: theme.typography.fontSize,
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
