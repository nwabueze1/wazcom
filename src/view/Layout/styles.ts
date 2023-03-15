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
    fontSize: '1.6rem',
    marginLeft: '10px',
    marginTop: '5px',
    cursor: 'pointer',

    "@media (min-width: 1080px)": {
      display: 'none'
    }
  },
  menuButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.6rem',
    marginRight: '15px',
    cursor: 'pointer',
    marginTop: '7px',

    "@media (min-width: 1080px)": {
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
    padding: "7px 24px",
    paddingBottom: '70px',
    width: '100%',
    background: theme.design.colors.waz_white100,
    borderRadius: theme.spacing(0.5),

    "@media (min-width: 1080px)": {
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

    "@media (max-width: 600px)": {
      width: '50px'
    }
  },
  logoTitle: {
    "@media (max-width: 600px)": {
      display: 'none'
    }
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
    padding: "10px 40px",
  },
  appBarComponents: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    "@media (min-width: 1080px)": {
      marginLeft: '60px'
    }
  },
  notificationWrapper: {
    width: 24,
    height: 24,
    marginLeft: '20px'
  },
  notoficationIcon: {
    width: 18,
    height: 21,
  },

  drawer: {
    width: `${drawerWidth}px`,
    padding: "22px 19px",
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
    marginBottom: 50,

    "&[data-show='true']": {
      transform: 'translateX(0)'
    },

    "@media (min-width: 1080px)": {
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
