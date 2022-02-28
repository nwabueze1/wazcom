import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    fontFamily: theme.include.styles.template2.font.lato,
    marginBottom: theme.spacing(15),
  },
  post: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    marginTop: theme.spacing(25),
  },
  textContainer: {
    width: "50%",
  },
  title: {
    fontWeight: 400,
  },
  description: {
    fontSize: theme.typography.fontSize + 4,
    fontFamily: theme.include.styles.template2.font.lato,
    lineHeight: "28px",
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
  },
  btn: {
    color: theme.design.colors.white,
    background: theme.design.colors.black,
    marginTop: theme.spacing(5),
    borderRadius: 0,
    fontFamily: theme.include.styles.template2.font.garamond,
    fontWeight: theme.typography.fontWeightBold,
    width: "14vw",
    fontSize: theme.typography.fontSize + 8,
    "&:hover": {
      background: theme.design.colors.white,
      color: theme.design.colors.black,
      transition: "1s ",
    },
  },
  header: {
    marginTop: theme.spacing(10),
  },
  img: {
    width: "40%",
    height: "48vh",
  },
}));
