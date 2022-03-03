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
  buttonParent: {
    position: "relative",
  },
  spinner: {
    width: "100%",
    height: "100%",
    top: 0,
    position: "absolute",
    color: theme.design.colors.white,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
    opacity: 0,
    transition: "opacity 0.5s ease-in",
  },
  spinnerActive: {
    zIndex: 5,
    opacity: 1,
  },
}));
