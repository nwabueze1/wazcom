import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useCardStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  leftAlign: {
    textAlign: "left",
    alignItems: "left",
  },
  centerAlign: {
    textAlign: "center",
    alignItems: "center",
  },
  rightAlign: {
    textAlign: "right",
    alignItems: "right",
  },
  regtext: {
    color: theme.design.colors.sunRed,
    fontWeight: "bold",
    fontSize: theme.typography.fontSize,
    margin: theme.spacing(2, 0),
  },
  text: {
    textAlign: "justify",
    padding: theme.spacing(0, 2),
    fontSize: theme.typography.fontSize,
  },
}));
