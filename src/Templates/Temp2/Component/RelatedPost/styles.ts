import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRelatedPostStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
   fontFamily:theme.include.styles.fontFamily,
    width: "100%",
    height: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(5, 0),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 10,
  },
  date: {
    marginRight: theme.spacing(2),
  },
  imageContainer: {
    justifyContent: "center",
    height: "260px",
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  rightContent: {
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  image: {
    height: "260px",
    width: "100%",
  },
  stats: {
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2, 0),
  },
  views: {
    display: "flex",
  },
  details: {
    padding: theme.spacing(1, 0),
  },
  btn: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 2),
    borderColor: theme.design.colors.terracotta,
   fontFamily:theme.include.styles.fontFamily,
    color: theme.design.colors.terracotta,
    fontSize: theme.typography.fontSize + 6,
    fontWeight: theme.typography.fontWeightBold,
    "&:hover": {
      color: theme.design.colors.white,
      background: theme.design.colors.terracotta,
      borderColor: theme.design.colors.terracotta,
    },
  },
}));
