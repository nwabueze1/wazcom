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
  required: {
    color: theme.design.colors.dangerColor100,
    margin: theme.spacing(0.5, 0, 0, 0.5),
  },
  error: {
    border: `1px solid ${theme.design.colors.dangerColor100}`,
  },
}));
