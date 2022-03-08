import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "90%",
    height: "100%",
    fontFamily: theme.include.styles.template2.font.lato,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "center ",
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(9),
    fontSize: theme.typography.fontSize * 3,
  },
  images: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "60vh",
  },
  centreImages: {
    height: "38vh",
  },
  firstColumn: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(10),
    width: "30%",
  },
  secondColumn: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(9),
    width: "33%",
  },
  thirdColumn: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(10),
    width: "30%",
  },
}));
