import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useBrowserStyles = makeStyles((theme: Theme) => ({
  root: {},
  drawer: {
    backgroundColor: theme.palette.primary.dark,
  },
  sidebarList: {},
  sidebarIcon: {
    marginRight: theme.spacing(1),
  },
  sidebarLabel: {
    fontWeight: 500,
    lineHeight: "21px",
    paddingRight: theme.spacing(1.8),
  },
  sidebarItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1.5),
    borderLeft: `${theme.spacing(0.8)} solid transparent`,
    transition: theme.transitions.create(["border", "color"]),
    color: theme.palette.primary.contrastText,
    margin: `${theme.spacing(2.5)} 0`,
    boxSizing: "border-box",
    borderRadius: theme.spacing(0.5),
    "&:hover": {
      cursor: "pointer",
      color: theme.design.colors.paleGrey,
      borderLeftColor: theme.design.colors.white,
    },
  },
  sidebarItemIsActive: {
    borderLeftColor: theme.palette.primary.light,
    "&:hover": {
      borderLeftColor: theme.palette.primary.light,
    },
  },
  main: {
    marginTop: theme.spacing(8),
  },
  componentWrapper: {
    marginBottom: theme.spacing(5),
  },
  well: {
    padding: theme.spacing(2),
    backgroundColor: theme.design.colors.paleGrey,
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.design.colors.white,
    fontWeight: 500,
  },
  title: {},
}));
