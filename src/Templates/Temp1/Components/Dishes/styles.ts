import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const useDishesStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: theme.include.styles.template2.tabMaxwidth,
      width: "95%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "auto"
    },
  },
  mealContent: {
    fontWeight: theme.typography.fontWeightLight
  },
  container: {
    width: "400px",
    height: "60vh",
    [theme.breakpoints.down("md")]: {
      width: "340px",
    },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "auto"
      },
  },
  header: {
    fontSize: theme.typography.fontSize * 2,
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(6, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 6,
    },
  },
  menuBox: {
    height: "40vh",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    objectFit: "cover",
    backgroundPosition: "center",
  },
  meal: {
    display: "flex",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.fontSize + 6,
    justifyContent: "space-between",
    margin: theme.spacing(1.5, 0),
  },
  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  
  },
}));
