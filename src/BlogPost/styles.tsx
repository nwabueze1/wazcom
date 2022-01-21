import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useBlogStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: "Raleway",
  },
  menuItem: {
    justifyContent: "space-between",
    maxWidth: 1294,
    margin: "auto",
    [theme.breakpoints.down("md")]: {},

    [theme.breakpoints.down("sm")]: {
      width: "95%",
      margin: "auto",
    },
  },
  header: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Raleway",
    fontWeight: "bold",
    fontSize: theme.typography.fontSize * 2,
    marginTop: theme.spacing(11),
    [theme.breakpoints.down("md")]: {},
  },
  container: {
    marginTop: theme.spacing(22),
    display: "flex",
    width: "78%",
    justifyContent: "space-around",
    margin: "auto",
    flexDirection: "row-reverse",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      marginTop: "24px",
    },
  },

  menuBox: {
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  image: {
    width: "90%",
    height: "400px",
    [theme.breakpoints.down("md")]: {
      height: "246px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  BlogText: {
    width: "90%",
    fontSize: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      fontSize: theme.spacing(2) + 4,
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "30ch",
      fontSize: "20px",
    },
  },
  moreInfo: {
    fontSize: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    display: "flex",
    justifyContent: "space-between",
    width: "25%",
    alignItems: "center",
    // marginTop: theme.typography.fontSize * 4,
    [theme.breakpoints.down("md")]: {
      width: "40%",
      fontSize: theme.spacing(1) + 6,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  article: {
    fontSize: theme.typography.fontSize * 2,
    width: "45%",
    // marginTop: "40px",
  },
  date: {
    margin: theme.spacing(3, 0, 4, 0),
    fontSize: theme.spacing(2),
  },

  BlogArticle: {
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));
