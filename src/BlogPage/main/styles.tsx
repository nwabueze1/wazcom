import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useBlogStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: "Raleway",
  },

  header: {
    marginTop: theme.spacing(4),
    fontFamily: "Raleway",
    fontSize: theme.typography.fontSize + 20,
    LineHeight: "48px",
    maxWidth: "38%",
    minWidth: "47%",
    margin: "auto",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      maxWidth: "90%",
      fontSize: theme.typography.fontSize + 20,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
      fontSize: theme.typography.fontSize + 8,
    },
  },
  children: {
    marginTop: theme.spacing(4),
    color: theme.design.colors.Grey,
    fontFamily: "Raleway",
    lineHeight: "28px",
    margin: "auto",
    maxWidth: "47%",
    fontSize: theme.typography.fontSize + 4,
    [theme.breakpoints.down("md")]: {
      maxWidth: "90%",
      fontSize: theme.typography.fontSize + 4,
      lineHeight: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
      fontSize: theme.typography.fontSize + 4,
      lineHeight: "24px",
      marginButtom:'1px'
    },
  },
  slide: {
    marginBottom: theme.spacing(20) + 8,
    display: "flex",
    justifyContent: "space-around",
    fontSize: theme.typography.fontSize * 2,
    fontFamily: "Raleway",
    width: "auto",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 4,
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },

  leftSlide: {
    display: "flex",
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(15),
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      marginLeft: "14%",
      width: "100%",
    },
  },
  leftArrow: {
    width: "100%",
    transform: "rotate(180deg)",
    height: "3vh",
  },
  rightArrow: {
    width: "100%",
    height: "3vh",
  },

  rightSlide: {
    display: "flex",
    alignSelf: "center",
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      marginLeft: "14%",
      height: "3vh",
    },
  },
}));
