import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "90%",
    marginTop: theme.spacing(14),
    display: "flex",
    justifyContent: "flex-end",
    fontFamily: theme.include.styles.font.lato,
  },

  leftContainer: {
    width: "50%",
    position: "absolute",
    justifyContent: "center",
    fontFamily: theme.include.styles.font.lato,

    "& img": {
      display: "flex",
      margin: "auto",
      width: "78%",
      height: "60vh",
    },
  },
  post: { width: "80%", margin: "auto" },
  head: {
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    width: "98%",
    marginTop: theme.spacing(2),
  },
  info: { width: "100%" },

  containerImage: {
    width: "50%",
    height: "40vh",
  },
  container: {
    width: "45%",
    display: "flex",
  },
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    margin: "auto",
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  containerInfo: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
    width: "100%",
  },
  date: { display: "flex " },
}));
