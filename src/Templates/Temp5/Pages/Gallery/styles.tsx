import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "90%",
    height: "100%",
    fontFamily: "Lato",
    margin: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "center ",
    marginBottom: "40px",
    marginTop: "72px",
    fontSize: "32px",
  },
  images: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "auto",
    height: "100%",
  },

  firstColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "30%",
    height: "59px",
  },
  secondColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    width: "30%",
  },
  thirdColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "30%",
    height: "59px",
  },
}));
