import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const drawerWidth = 260;

export const useBrowserStyles = makeStyles((theme: Theme) => ({
  root: {},
  drawer: {
    padding: `0 ${theme.spacing(2)}`,
  },
  paper: {
    padding: `0 ${theme.spacing(2)}`,
    width: drawerWidth,
    boxSizing: "border-box",
  },
  sidebarList: {},
  sidebarIcon: {
    marginRight: theme.spacing(1),
  },
  sidebarLabel: {
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: theme.spacing(0.1),
  },
  sidebarItem: {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    padding: theme.spacing(0.5),
    // borderLeft: `${theme.spacing(0.8)} solid transparent`,
    // transition: theme.transitions.create(["border", "color"]),
    color: theme.design.colors.gray100,
    // backgroundColor: theme.design.colors.dangerColor,
    margin: `${theme.spacing(1)}`,
    boxSizing: "border-box",
    // borderRadius: theme.spacing(0.5),
    textTransform: "uppercase",
    "&:hover": {},
  },
  sidebarItemIsActive: {
    // borderLeftColor: theme.palette.primary.light,
    "&:hover": {
      borderLeftColor: theme.palette.primary.light,
    },
  },
  main: {
    marginTop: theme.spacing(8),
    width: "calc(100vw - 244px)",
    overflow: "hidden",
  },
  componentWrapper: {
    marginBottom: theme.spacing(5),
  },
  well: {
    padding: theme.spacing(2),
    backgroundColor: theme.design.colors.greyColor100,
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.design.colors.black,
    fontWeight: 500,
  },
  title: {},
  listItem: {},
  listItemButton: {
    width: "100%",
    textAlign: "left",
  },
}));
