import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useHeroStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "90vh",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
    [theme.breakpoints.down("md")]: {
      height: "50vh"
     },
  },
  image: {
    width: "100%",
    height: "90vh",
    position: "relative",
    top: 0,
    [theme.breakpoints.down("md")]: {
     height: "50vh"
    },
  },
  overlay: {
    background: "rgba(17, 17, 17, 0.6)",
    position: "absolute",
    height: "90vh",
    width: "100%",
    top: 0,
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      height: "50vh"
     },
  },
  description: {
    margin: theme.spacing(3, 0),
    fontSize: theme.typography.fontSize + 21,
    color: theme.design.colors.white,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 6,
     },
  },
  heroContent: {
    width: "57%",
    textAlign: "center",
  },
  heroTextContainer: {
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
    position: "absolute",
    top: "30%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      top: "15%",
     },
  },
  imageContainer: {
    position: "relative",
  },
  heroHeader: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize * 6,
    color: theme.design.colors.white,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize * 3,
     },
  },
  btn: {
    color: theme.design.colors.white,
    background: theme.design.colors.darkOrange,
    padding: theme.spacing(1, 4),
    margin: theme.spacing(5, 0),
  },
}));
