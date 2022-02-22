import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useButtonStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    textTransform: "capitalize",
    color: theme.design.colors.white,
    backgroundColor: theme.design.colors.red70,
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,
  },
  sizeSmall: {
    // padding: `${theme.spacing(1.6)} ${theme.spacing(8.12)}`,
  },
  sizeLarge: {
    padding: `${theme.spacing(0.5)} ${theme.spacing(2.5)}`,
  },
}));
