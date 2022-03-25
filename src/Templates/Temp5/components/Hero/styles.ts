import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useHeroStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: theme.include.styles.template2.font.lato,
    color: theme.design.colors.white,
  },
  image: {
    width: "100%",
    height: "60vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: theme.spacing(3.5),
  },
  heroText: {
    marginTop: theme.spacing(20),
    position: "absolute",
    width: "100%",
  },
  welcome: {
    fontSize: theme.typography.fontSize * 5,
    display: "flex",
    justifyContent: "center",
  },
  content: {
    fontSize: theme.typography.fontSize + 8,
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(3, "auto"),
    textAlign: "center",
    width: "55vw",
  },
}));
