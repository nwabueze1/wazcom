import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useHeroStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "70vh",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
  },
  image: {
    width: "100%",
    height: "70vh",
    position: "relative",
    top: 0,
  },
  overlay: {
    background: "rgba(17, 17, 17, 0.6)",
    position: "absolute",
    height: "70vh",
    width: "100%",
    top: 0,
    zIndex: 1,
  },
  description: {
    margin: theme.spacing(3, 0),
    fontSize: theme.typography.fontSize + 21,
    color: theme.design.colors.white,
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
    top: "20%",
    width: "100%",
  },
  imageContainer: {
    position: "relative",
  },
  heroHeader: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize * 5,
    color: theme.design.colors.white,
  },
}));