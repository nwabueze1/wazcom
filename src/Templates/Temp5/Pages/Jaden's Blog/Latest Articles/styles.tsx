import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "90%",
    margin: "auto",
    fontFamily: "Lato",
  },
  img: { width: "47%", height: "40vh" },
  header: {
    marginTop: "47px",
    fontSize: "32px",
  },
  allContainer: {
    marginTop: "120px",
    display: "flex",
  },
  container: {
    flex: 1.5,
  },
}));
