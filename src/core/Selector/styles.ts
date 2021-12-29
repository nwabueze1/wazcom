import { BaseTheme } from "theme";
import makeStyles from "@mui/styles/makeStyles";

export const useSelectorStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    padding: 0,
    borderRadius: 4,
    color: theme.design.colors.grey,
  },

  error_message: {
    color: theme.design.colors.red70,
    margin: "0.8vh 0 0 0",
  },
}));
