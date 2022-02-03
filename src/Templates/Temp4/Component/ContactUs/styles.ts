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
    padding: theme.spacing(10, 0),
  },
  header: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize * 3,
    textAlign: "center",
  },
  contactText: {
    textAlign: "center",
    padding: theme.spacing(3, 0),
  },
  contactContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  leftContainer: {
    width: "45%",
  },
  rightContainer: {
    width: "45%",
  },
  btn: {
    color: theme.design.colors.white,
    background: theme.design.colors.darkOrange,
    padding: theme.spacing(1, 4),
    margin: theme.spacing(5, 0),
  },
}));
