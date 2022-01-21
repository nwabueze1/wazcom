import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const useNavStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    fontFamily: "Raleway",
    top: 0,
    position: "sticky",
    [theme.breakpoints.down("md")]: {
      width: "95%",
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
    background: theme.design.colors.white,
    maxWidth: theme.include.styles.maxWidth,
    margin: "0 auto",
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
  },
  nav: {
    width: "70%",
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
    fontSize: theme.typography.fontSize * 2,
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: "none",
    color: theme.design.colors.black,
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
    // [theme.breakpoints.down("sm")]: {
    //   display: "block"
    // },
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
