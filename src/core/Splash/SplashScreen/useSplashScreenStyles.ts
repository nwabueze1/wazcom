import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";

export const useSplashScreenStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: theme.spacing(5, 28),
    background: theme.design.colors.waz_white,
    textAlign: "center",
    color: theme.design.colors.grey800,
  },
  heading: {
    fontSize: theme.typography.fontSize + 5,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.fontFamily,
    margin: 0,
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.fontSize + 10,
    },
  },
  subheading: {
    fontSize: theme.typography.fontSize - 2,
    fontFamily: theme.typography.fontFamily,
    margin: theme.spacing(1, 0, 0),
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.fontSize,
    },
  },
  body: {
    display: "flex",
    flexDirection: "column",
    background: theme.design.colors.waz_white,
    padding: theme.spacing(5, 0),
    alignItems: "center",
    flex: 1,
    marginTop: theme.spacing(1),
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(8, 0),
    },
    [theme.breakpoints.up("xl")]: {
      padding: theme.spacing(12, 0),
    },
  },
  image: {
    height: "auto",
    display: "block",
    marginBottom: theme.spacing(3),
  },
  bodyTextContainer: {
    maxWidth: 364,
    margin: theme.spacing(0, "auto"),
    textAlign: "center",
  },
  button: {
    height: 35,
    width: "auto",
    padding: theme.spacing(0, 3),
    borderRadius: 4,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: theme.spacing(3),
    fontFamily: theme.typography.fontFamily,
  },
  bodySubtitle: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  track: {
    width: 60,
    height: 10,
    background: theme.design.colors.waz_primary700,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: theme.spacing(2.5),
  },
  trackLoader: {
    width: 0,
    height: 10,
    background: theme.design.colors.waz_primary200,
    animation: "$trackLoading 2s ease-in-out infinite",
    borderRadius: 20,
  },
  "@keyframes trackLoading": {
    "0%": {
      width: 0,
    },
    "50%": {
      width: "50%",
    },
    "100%": {
      width: "100%",
    },
  },
}));
