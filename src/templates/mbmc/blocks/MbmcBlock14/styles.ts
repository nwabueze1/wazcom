import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock14Styles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.design.colors.waz_greyColor50,
    minHeight: "90vh",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      minHeight: "unset",
    },
  },
  block14Container: {
    boxSizing: "border-box",
    padding: theme.spacing(8.5, 0),
    maxWidth: 1720,
    width: "85%",
    margin: "0 auto",

    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 0),
    },
  },
  block14Title: {
    fontFamily: theme.design.font.lostaMasta,
    fontSize: theme.typography.fontSize * 4,
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize * 3,
    },

    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize * 2.5,
      marginBottom: theme.spacing(2),
    },
  },
  block14CartContent: {
    display: "flex",
    gap: theme.spacing(8),
    justifyContent: "space-between",
  },
  block14Divider: {
    borderLeft: `solid 1px ${theme.design.colors.waz_greyColor150}`,
    margin: theme.spacing(2, 0),

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  block14Action: {
    display: "none",
    position: "sticky",
    left: 0,
    bottom: 0,
    width: "100%",
    background: theme.design.colors.waz_white,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2, 0),

    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
}));
