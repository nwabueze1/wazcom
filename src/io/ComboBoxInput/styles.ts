import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useComboBoxStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
  },
  helperText: {
    marginTop: theme.spacing(2),
    fontSize: theme.typography.fontSize,
  },
}));
