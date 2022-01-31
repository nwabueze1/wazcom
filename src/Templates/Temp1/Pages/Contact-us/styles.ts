import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const useContactUsStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    fontFamiy: "Raleway, san-serif",
    [theme.breakpoints.down("md")]: {
      maxWidth: theme.include.styles.templates.tabmaxWidth,
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      margin: "auto",
    },
  },
  container: {
    maxWidth: theme.include.styles.templates.maxWidth,
    margin: "0 auto",
  
  },
  header: {
    textAlign: "center",
    fontSize: theme.typography.fontSize * 2 + 4,
    marginTop: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 10,
    },
  },
  parent: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(6, 0),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse"
    },
  },
  leftColumn: {
    width: "45%",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
  },
  rightColumn: {
    width: "45%",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
  },
  titleParent: {
    marginTop: theme.spacing(5),
  },
  title: {
    fontSize: theme.typography.fontSize + 6,
  },
  details: {
    marginTop: theme.spacing(2.5),
  },
  textField: {
    width: "100%",
  },
  btn: {
    background: theme.design.colors.black,
    color: theme.design.colors.white,
    padding: theme.spacing(1, 2),
  },
  btnContainer: {
    width: "100%",
    margin: theme.spacing(7, 0),
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
  },
}));
