import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "90%",
    margin: "auto",
    marginTop: theme.spacing(14),
    display: "flex",
    justifyContent: "flex-end",
    fontFamily: theme.include.styles.font.lato,
  },
  containerImage: {
    width: "50%",
    height: "40vh",
  },
  container: {
    width: "50%",
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
}));
