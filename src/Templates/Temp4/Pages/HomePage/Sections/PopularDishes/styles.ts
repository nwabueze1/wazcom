import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const usePopularDishesStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "auto",
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down("md")]: {
      maxWidth: "90%",
    },
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 28,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 6,
    },
  },
  viewMore: {
    color: theme.design.colors.darkOrange,
    fontSize: theme.typography.fontSize + 16,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 12,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 4,
    },
  },
  details: {
    fontSize: theme.typography.fontSize + 12,
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 4,
    },
  },
  dishes: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(4),
    padding: theme.spacing(6, 0),
    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(2.5),
    },
  },
}));
