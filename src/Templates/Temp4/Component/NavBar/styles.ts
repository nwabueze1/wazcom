import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useNavStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 2,
    background: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    display: "flex",
    padding: theme.spacing(3.5, 0),
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "0 auto",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      padding: theme.spacing(1.5, 0),
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      padding: theme.spacing( 0),
    },
  },
  link: {
    textDecoration: "none",
    fontSize: theme.typography.fontSize + 8,
    lineHeight: "28px",
    color: theme.design.colors.white,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 2
    },
  },
  links: {
    width: "40%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navlogo: {
    lineHeight: "49px",
    fontSize: theme.typography.fontSize + 16,
    fontFamily: "Pacifico",
    textDecoration: "none",
    color: theme.design.colors.white,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 3
    },
  },
  menu: {
    color: theme.design.colors.white,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  menuIcon: {
    color: theme.design.colors.white,
  },
  icon: {
    width: "10%",
    display: "flex",
    justifyContent: "space-between",
    color: theme.design.colors.white,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navActive: {
    color: theme.design.colors.darkOrange,
  },
  mobileNav: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    justifyContent: "space-between",
    background: theme.design.colors.black,
    zIndex: 5,
    right: 0,
    transition: "right 0.5s ease-in",
  },
  mobileContainer: {
    height: "32vh",
    display: "flex",
    right: "-100vw",
    margin: theme.spacing(5, 0, 0, 3),
    justifyContent: "space-between",
    flexDirection: "column",
  },
  removeSidebar: {
    right: "-100vw",
    position: "fixed"
  },
}));
