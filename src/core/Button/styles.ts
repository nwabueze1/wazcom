import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useButtonStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    position: "relative",
  },
  button: {
    textTransform: "capitalize",
    color: theme.design.colors.waz_white,
    backgroundColor: theme.design.colors.waz_primaryColor100,
    boxShadow: "none",
    cursor: "pointer",
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,
    "&:hover": {
      backgroundColor: theme.design.colors.waz_primaryColor100,
      opacity: "70%",
      boxShadow: "none",
    },
  },
  sizeLarge: {
    padding: `${theme.spacing(0.5)} ${theme.spacing(2.5)}`,
  },
  loader: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.design.colors.waz_white,
    zIndex: 5,
    opacity: 1,
    background: theme.design.colors.waz_primaryColor100,
  },
}));
