import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useNavStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    background: theme.design.colors.black,
    fontFamily: "Cormorant Garamond",
    margin: "0 auto",
    zIndex: 4,
    top: 0,
    position: "sticky",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      position: "sticky",
      top: 0,
    },
  },
  link: {
    display: "flex",
  },
  container: {
    padding: theme.spacing(3, 0),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.design.colors.black,
    maxWidth: theme.include.styles.maxWidth,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "0 auto",
      position: "sticky",
      top: 0,
    },
  },
  icon: {
    marginLeft: theme.spacing(4),
    color: theme.design.colors.white
  },
  anchor: {
    textDecoration: "none",
    fontSize: theme.typography.fontSize + 6,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.design.colors.white,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 4,
    },
  },
  nav: {
    width: "40%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
      flexDirection: "colunm",
    },
  },
  menu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  navHeader: {
    fontSize: theme.typography.fontSize * 3,
    fontStyle: "italic",
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: "none",
    color: theme.design.colors.white,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 10,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 6,
    },
  },
  mobileNav: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    justifyContent: "space-between",
    background: theme.design.colors.white,
    // zIndex: 5,
    right: 0,
    transition: "right 0.5s ease-in",
  },
  removeSidebar: {
    display: "none",
    right: "-100vw",
  },
  mobileContainer: {
    height: "50vh",
    display: "flex",
    right: "-100vw",
    margin: theme.spacing(5, 0, 0, 5),
    justifyContent: "space-between",
    flexDirection: "column",
  },
  closeIcon: {
    fontSize: "40px",
  },
}));
