import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useOurChefsStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
    background: theme.design.colors.richBlack,
    padding: theme.spacing(11, 0),
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "0 auto",
    paddingTop: theme.spacing(10),
    display: "flex",
    justifyContent: "space-between",
    color: theme.design.colors.white,
  },
  header: {
    fontSize: theme.typography.fontSize + 28,
    color: theme.design.colors.white,
    fontWeight: theme.typography.fontWeightBold,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 4,
    },
  },
  chefs: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "0 auto",
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      overflow: "scroll",
      gap: theme.spacing(3),
      "-ms-overflow-style": "none" /* for Internet Explorer, Edge */,
      scrollbarWidth: "none" /* for Firefox */,
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
}));
