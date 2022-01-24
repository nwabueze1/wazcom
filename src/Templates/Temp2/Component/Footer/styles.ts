import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";


export const useFooterStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    fontFamily: "Cormorant Garamond",
    height: "100%",
    maxWidth: theme.include.styles.maxWidth,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width:"95%"
    },
  },
  link: {
    display: "flex",
  },
  container: {
    height: "10vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-between",
      height: "33vh",
      paddingBottom: theme.spacing(5)
    },
  },
  icon: {
    marginLeft: theme.spacing(4),
  },
  anchor: {
    textDecoration: "none",
    fontSize: theme.typography.fontSize + 6,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.design.colors.black,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 4,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 8,
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  nav: {
    width: "40%",
    display: "flex",
    fontWeight: theme.typography.fontWeightBold,
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-between",
       height: "26vh"
    },
  },
  footerHeader: {
    fontSize: theme.typography.fontSize * 3,
    fontWeight: theme.typography.fontWeightBold,
    fontStyle: "italic",
    textDecoration: "none",
    color: theme.design.colors.black,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 10,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 12,
      fontWeight: theme.typography.fontWeightBold, 
    },
  },
}));

