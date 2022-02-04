import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    fontFamily: "Lato",
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
    fontFamily: theme.include.styles.font.lato,
    lineHeight: "28px",
    marginTop: theme.spacing(2),
  },
  btn: {
    color: "#ffffff",
    background: "#000000",
    marginTop: "40px",
    borderRadius: 0,
    fontFamily: theme.include.styles.font.garamond,
    fontWeight: "bold",
    width: "129px",
    fontSize: theme.typography.fontSize + 8,
  },
  header: {
    marginTop: theme.spacing(10),
  },
  img: {
    width: "40%",
    height: "48vh",
  },
}));
