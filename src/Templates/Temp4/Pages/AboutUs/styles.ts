import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useAboutUsStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "0 auto",
    paddingTop: theme.spacing(10),
    display: "flex",
    justifyContent: "space-between",
  },
  chefs: {
    display: "flex",
  }
}));