import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useNavStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    background: theme.design.colors.black,
    margin: "0 auto",
    top: 0,
    position: "sticky",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      position: "sticky",
      top: 0,
    },
    [theme.breakpoints.down("sm")]: {
      height: "10px",
    },
  },
  logo: {
    color: theme.design.colors.white,
    fontSize: "24px",
    fontFamily: "Limelight",
    width: "40%",
    marginLeft: "6%",
    textDecoration: "none",
    "&:hover": {
      color: theme.design.colors.white,
      background: theme.design.colors.terracotta,
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "18px",
      marginLeft: "10%",
    },
  },
  link: {
    display: "flex",
  },
  navMenu: {
    [theme.breakpoints.down("sm")]: {
      height: "40px",
    },
  },
  container: {
    padding: theme.spacing(3, 0),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    background: "#C58575",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      position: "sticky",
      top: 0,
    },
  },
  icon: {
    marginLeft: theme.spacing(4),
    color: theme.design.colors.white,
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
    display: "flex",
    marginRight: "50%",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "DM Sans",
    fontSize: "21px",
    fontWeight: "bold",
    width: "55%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      width: "55%",
      marginRight: "7%",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
      flexDirection: "colunm",
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
  navHeader: {
    fontSize: theme.typography.fontSize * 3,
    // fontStyle: "italic",
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: "none",
    color: theme.design.colors.white,
    width: "30%",
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
    background: "#C58575",
    zIndex: 5,
    right: 0,
    transition: "right 0.5s ease-in",
  },
  removeSidebar: {
    right: "-100vw",
    position: "fixed",
  },
  mobileContainer: {
    height: "32vh",
    display: "flex",
    right: "-100vw",
    margin: theme.spacing(5, 0, 0, 3),
    justifyContent: "space-between",
    flexDirection: "column",
  },
  closeIcon: {
    fontSize: "40px",
  },
}));
