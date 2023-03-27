import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const drawerWidth = 224;

export const useLayoutStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    fontFamily: theme.design.font.openSans,
    width: "100%",
    background: theme.design.colors.waz_white100,
    "&::before": {
      content: "''",
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      background: theme.design.colors.waz_white100,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: `${drawerWidth}px`,
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  collapseButton: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: theme.typography.fontSize * 2,
    marginTop: theme.spacing(0.7),
    cursor: "pointer",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  menuButton: {
    all: 'unset',
    backgroundColor: "transparent",
    border: "none",
    fontSize: theme.typography.fontSize * 2,
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(0.5),
    cursor: "pointer",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  componentWrapper: {
    marginBottom: theme.spacing(5),
  },
  logo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: theme.design.colors.waz_black,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h3.fontSize,
    width: 91,
    height: 27,
    textTransform: "uppercase",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  logoTop: {
    width: `${drawerWidth}px`,
    [theme.breakpoints.down("md")]: {
      width: "50px",
    },
  },
  logoTitle: {
    fontSize: theme.typography.fontSize + 4,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  main: {
    padding: theme.spacing(2, 3),
    maxWidth: "100%",
  },
  appBarWrapper: {
    position: "sticky",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    height: 50,
    boxShadow: "0px 1px 25px rgba(0, 0, 0, 0.05)",
    background: theme.design.colors.waz_white,
    padding: theme.spacing(0.5, 5),
    zIndex: 5,
  },
  appBarComponents: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  appBarSearch: {
    position: "relative",
    width: "100%",
    maxWidth: "450px",
  },
  appSearchBox: {
    position: "absolute",
    width: "98%",
    background: theme.design.colors.waz_white,
    boxShadow: "0px 1px 25px rgba(0, 0, 0, 0.05)",
    padding: theme.spacing(2.5, 2, 3, 2),
    minHeight: 60,
    maxHeight: 500,
    overlow: "hidden",
    overflowY: "auto",
  },
  appSearchIcon: {
    fontSize: theme.typography.fontSize + 6,
  },
  appSearchBoxList: {
    listStyle: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.design.colors.waz_black100,
    padding: theme.spacing(3.5, 3),
    marginBottom: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
  },
  appSearchBoxItem: {
    width: "100%",
    fontSize: theme.typography.fontSize,
    textAlign: "left",
    padding: theme.spacing(0, 2.5),
    textDecoration: "none",
    color: theme.design.colors.waz_primaryBlack,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  notificationButton: {
    all: 'unset',
    width: 24,
    height: 24,
    display: "inline-block",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    marginLeft: theme.spacing(4),
  },
  notificationIcon: {
    width: 18,
    height: 21,
  },
  searchBox: {
    width: "100%",
  },
}));
