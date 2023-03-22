import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const drawerWidth = 260;

export const useLayoutStyles = makeStyles((theme: Theme) => ({
  root: {},
  paper: {
    padding: `0 ${theme.spacing(2)}`,
    width: drawerWidth,
    boxSizing: "border-box",
  },
  sidebarList: {},
  collapseButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: theme.typography.fontSize * 2,
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(.7),
    cursor: 'pointer',
    [theme.breakpoints.up("lg")]: {
      display: 'none'
    },
  },
  menuButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: theme.typography.fontSize * 2,
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(.5),
    cursor: 'pointer',
    [theme.breakpoints.up("lg")]: {
      display: 'none'
    }
  },
  sidebarIcon: {
    marginRight: theme.spacing(1),
  },
  sidebarLabel: {
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: theme.spacing(0.1),
  },
  sidebarItem: {
    display: "flex",
    padding: theme.spacing(0.5),
    color: theme.design.colors.gray100,
    margin: `${theme.spacing(1)}`,
    boxSizing: "border-box",
    textTransform: "uppercase",
  },
  sidebarItemIsActive: {
    "&:hover": {
      borderLeftColor: theme.palette.primary.light,
    },
  },
  main: {
    marginTop: theme.spacing(7),
    overflow: "hidden",
    padding: theme.spacing(1, 3),
    paddingBottom: theme.spacing(7),
    width: '100%',
    background: theme.design.colors.waz_white100,
    borderRadius: theme.spacing(0.5),
    [theme.breakpoints.up("lg")]: {
      marginLeft: `${drawerWidth}px`,
    }
  },
  componentWrapper: {
    marginBottom: theme.spacing(5),
  },
  well: {
    marginTop: theme.spacing(2),
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
  },
  logoTop: {
    width: `${drawerWidth}px`,
    [theme.breakpoints.down("md")]: {
      width: '50px'
    },
  },
  logoTitle: {
    [theme.breakpoints.down("md")]: {
      display: 'none'
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.design.colors.waz_black,
  },
  listItem: {},
  listItemButton: {
    width: "100%",
    textAlign: "left",
  },

  container: {
    display: "flex",
  },
  appBarWrapper: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    width: '100%',
    height: 60,
    boxShadow: "0px 1px 25px rgba(0, 0, 0, 0.05)",
    opacity: 1,
    background: theme.design.colors.waz_white,
    padding: theme.spacing(1, 5)
  },
  appBarComponents: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(6.8)
    }
  },
  notificationWrapper: {
    width: 24,
    height: 24,
    marginLeft: theme.spacing(2)
  },
  notoficationIcon: {
    width: 18,
    height: 21,
  },

  drawer: {
    width: `${drawerWidth}px`,
    padding: theme.spacing(3, 2.5),
    position: "fixed",
    height: '100%',
    minHeight: '100vh',
    top: 0,
    left: 0,
    zIndex: 500,
    transition: 'transform 450ms ease, width 450ms ease',
    transform: 'translateX(-100%)',
    background: theme.design.colors.waz_white,
    boxShadow: "0px 1px 25px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    marginBottom: theme.spacing(6),
    "&[data-show='true']": {
      transform: 'translateX(0)'
    },
    [theme.breakpoints.up("lg")]: {
      transform: 'translateX(0)'
    }
  },
  searchBox: {
    display: "flex",
    alignItems: "space-between",
    width: '100%',
    maxWidth: '480px'
  },
}));
