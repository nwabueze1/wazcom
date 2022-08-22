import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useBuzzStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    fontFamily: theme.design.font.openSans,
  },
  restaurant: {
    position: "relative",
  },
  body: {
    top: 345,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: 0,
    },
  },
  nav: {
    zIndex: 20,
    top: 20,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: 0,
    },
  },
  layout: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  left: {
    width: '70%',
    [theme.breakpoints.down("md")]: {
      width:"100%"
    },
  },
  right: {
    width: '30%',
    border: `1px solid ${theme.design.colors.waz_grey300}`,
    height: "100%",
    minHeight: "100vh",
    position: "sticky",
    top: 0,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "none"
    },
  },

}));
