import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "90%",
    height: "100%",
    fontFamily: theme.include.styles.template2.font.lato,
    margin: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "center ",
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(9),
    fontSize: theme.typography.fontSize * 3,
  },
  images: {
    width: "90vw",
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },

  firstColumn: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(13),
    width: "30%",
    height: "6vh",
  },
  secondColumn: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(9),
    width: "30%",
  },
  thirdColumn: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(13),
    width: "30%",
    height: "6vh",
  },
}));
