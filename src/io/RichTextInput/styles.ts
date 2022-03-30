import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRichInputStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  label: {
    marginBottom: theme.spacing(1),
    fontSize: "1rem",
    color: theme.design.colors.black,
  },
  editor: {},
  editorError: {
    border: "1px solid red",
  },
}));
