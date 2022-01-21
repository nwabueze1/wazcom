import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const usePageDishesStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: "Raleway",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "auto",
    },
  },
  container: {
    width: "100%",
    margin: "0 auto",
    maxWidth: 1280,
  },
  header: {
    textAlign: "center",
    fontSize: theme.typography.fontSize + 10,
    marginTop: theme.spacing(3),
  },
  menus: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: "95%",
      margin: "auto",
    },
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    gap: theme.spacing(12),
    margin: theme.spacing(3, 0),
    color: theme.design.colors.grayline,
    fontSize: theme.typography.fontSize + 6,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize,
      gap: theme.spacing(8),
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      gap: theme.spacing(7),
      margin: theme.spacing(3, "auto"),
      justifyContent: "flex-start",
      overflow: "scroll",

      "-ms-overflow-style": "none" /* for Internet Explorer, Edge */,
      scrollbarWidth: "none" /* for Firefox */,
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  active: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.design.colors.black,
  },
}));
