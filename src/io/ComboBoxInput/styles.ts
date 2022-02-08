import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useComboBoxStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
  label: {
    marginBottom: 9,
    fontSize: "1rem",
    fontWeight: 700,
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
