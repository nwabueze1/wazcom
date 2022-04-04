import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRichInputStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  editor: {},
  editorError: {
    border: "1px solid red",
  },
}));
