import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "90%",
    margin: "auto",
    fontFamily: theme.include.styles.font.lato,
  },
  img: { width: "47vw", height: "40vh" },
  header: {
    marginTop: theme.spacing(6),
    fontSize: theme.typography.fontSize *2.8,
  },
  allContainer: {
    marginTop: theme.spacing(15),
    display: "flex",
  },
  container: {
    flex: 1.5,
  },
}));
