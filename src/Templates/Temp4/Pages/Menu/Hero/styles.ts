import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useHeroStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "70vh",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
    [theme.breakpoints.down("md")]: {
      height: "40vh"
    },
  },
  image: {
    width: "100%",
    height: "70vh",
    position: "relative",
    top: 0,
    [theme.breakpoints.down("md")]: {
      height: "40vh"
    },
  },
  overlay: {
    background: "rgba(17, 17, 17, 0.6)",
    position: "absolute",
    height: "70vh",
    width: "100%",
    top: 0,
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      height: "40vh"
    },
  },
  description: {
    margin: theme.spacing(3, 0),
    fontSize: theme.typography.fontSize + 21,
    color: theme.design.colors.white,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 6,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 3,
    },
  },
  heroContent: {
    width: "60%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
  },
  heroTextContainer: {
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
    position: "absolute",
    top: "25%",
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
    fontSize: theme.typography.fontSize * 5,
    color: theme.design.colors.white,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 24,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 6,
    }, 
  },
}));