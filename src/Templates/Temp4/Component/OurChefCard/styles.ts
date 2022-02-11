import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useOurChefCardStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "357px",
    fontFamily: theme.include.styles.template4.font,
    [theme.breakpoints.down("md")]: {
      width: "174px",
    },
  },
  imgContainer: {
    height: "475px",
    width: "100%",
    overflow: "hidden",
    borderRadius: theme.spacing(2, 2, 0, 0),
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "232px",
    },
  },
  container: {
    width: "357px",
    [theme.breakpoints.down("md")]: {
      width: "174px",
    },
  },
  chefName: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 21,
    color: theme.design.colors.white,
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 8,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 6,
    },
  },
  chefDetails: {
    fontSize: theme.typography.fontSize + 12,
    color: theme.design.colors.white,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 4,
    },
  },
}));
