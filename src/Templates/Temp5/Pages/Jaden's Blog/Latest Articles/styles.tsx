import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "94%",
    marginTop: theme.spacing(14),
    display: "flex",
    justifyContent: "flex-end",
    fontFamily: theme.include.styles.template2.font.lato,
  },
  latestArticlePost: {
    margin: "auto",
  },
  leftContainer: {
    width: "50%",
    position: "absolute",
    justifyContent: "center",
    fontFamily: theme.include.styles.template2.font.lato,
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
  time: {
    display: "flex ",
    width: "55%",
    justifyContent: "flex-end",
  },
  sight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  info: {
    width: "100%",
  },
  containerImage: {
    width: "50%",
    height: "40vh",
  },
  container: {
    width: "45%",
    height: "35vh",
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
  containerParagraph: {
    marginBottom: theme.spacing(2),
  },
  containerInfo: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
    width: "100%",
  },
  date: {
    display: "flex ",
    width: "55%",
    justifyContent: "flex-end",
  },
  views: {
    display: "flex",
    justifyContent: "flex-end",
  },
  readmoreBtn: {
    textDecoration: "none",
    color: theme.design.colors.black,
    width: "26%",
    height: "2vh",
    marginTop: theme.spacing(2),
    borderBottom: `2px solid  ${theme.design.colors.black}`,
    paddingBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
}));
