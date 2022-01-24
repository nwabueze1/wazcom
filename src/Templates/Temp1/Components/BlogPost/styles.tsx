import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const usePostStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamiy: "Raleway, san-serif",
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
    fontFamiy: "Raleway, san-serif",
    fontWeight: "bold",
    fontSize: theme.typography.fontSize * 2,
    marginTop: theme.spacing(11),
    [theme.breakpoints.down("md")]: {},
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 1294,
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      marginTop: "24px",
    },
  },
  variant: {
    flexDirection: "row-reverse",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
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
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 6,
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "30ch",
      margin: theme.spacing(1.5, 0),
      fontSize: "20px",
    },
  },
  moreInfo: {
    marginTop: theme.spacing(10),
    fontSize: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    display: "flex",
    justifyContent: "space-between",
    width: "25%",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "40%",
      fontSize: theme.spacing(1) + 6,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: theme.spacing(1.5,0)
    },
  },
  article: {
    fontSize: theme.typography.fontSize * 2,
    width: "45%",
  },
  date: {
    marginTop: theme.spacing(3),
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
