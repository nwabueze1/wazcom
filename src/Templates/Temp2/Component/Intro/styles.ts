import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useIntroStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
   fontFamily:theme.include.styles.templates.font.garamond,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    height: "520px",
    maxWidth: theme.include.styles.templates.maxWidth,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      height: "675px"
    },
  },
  imageBox: {
    width: "50%",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
        width: "90%",
        margin: "auto"
      },
  },
  textBox: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        width: "95%",
        margin: "auto"
      },
  },
  text: {
    padding: theme.spacing(8),
    background: theme.design.colors.terracotta,
  },
  img: {
    height: "520px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
        height: "327px"
      },
  },
  introHeader: {
    fontSize: theme.typography.fontSize * 3,
    color: theme.design.colors.white,
  },
  introDetails: {
    marginTop: theme.spacing(2),
    color: theme.design.colors.white,
    fontSize: theme.typography.fontSize + 6,
  },
}));
