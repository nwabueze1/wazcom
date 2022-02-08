import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useOurChefsStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
    background: theme.design.colors.richBlack,
    padding: theme.spacing(11, 0)
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "0 auto",
    paddingTop: theme.spacing(10),
    display: "flex",
    justifyContent: "space-between",
    color: theme.design.colors.white
  },
  header: {
    fontSize: theme.typography.fontSize + 28,
    color:theme.design.colors.white,
    fontWeight:theme.typography.fontWeightBold,
    textAlign: "center"
  },
  chefs: {
    display: "flex",
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "0 auto",
    paddingTop: theme.spacing(3)
  },
}));
