import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useContactUsStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%a",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "auto",
    padding: theme.spacing(8, 0),
  },
  header: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize * 3,
    textAlign: "center",
  },
  contactText: {
    textAlign: "center",
    padding: theme.spacing(3, 0),
    [theme.breakpoints.down("md")]: {
      width: "95%",
      margin: "auto",
    },
  },
  contactContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "95%",
      margin: "auto",
      flexDirection: "column",
    },
  },
  field: {
    borderRadius: theme.spacing(0.5),
    background: theme.design.colors.ash,
    border: "none",
  },
  leftContainer: {
    width: "45%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  rightContainer: {
    width: "45%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  btn: {
    color: theme.design.colors.white,
    background: theme.design.colors.darkOrange,
    padding: theme.spacing(1, 4),
    margin: theme.spacing(5, 0),
  },
}));
