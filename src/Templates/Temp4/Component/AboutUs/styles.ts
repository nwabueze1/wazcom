import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";
import { borderRadius } from "@mui/system";

export const useAboutUsStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
  },
  rightContainer: {
    width: "45%",
  },
  leftContainer: {
    width: "45%",
    padding: theme.spacing(2, 0)
  },
  img: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
      height: "444px",
      borderRadius: theme.spacing(2)
  },
  link: {
    textDecoration: "none",
    display: "flex",
    color: theme.design.colors.darkOrange,
    padding: theme.spacing(5, 0)
  },
  header: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize * 3
  }
}));
