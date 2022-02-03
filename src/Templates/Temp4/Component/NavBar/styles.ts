import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useNavStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 2,
    background: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    display: "flex",
    padding: theme.spacing(3.5, 0),
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "0 auto",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    fontSize: theme.typography.fontSize + 8,
    lineHeight: "28px",
    color: theme.design.colors.white,
  },
  links: {
    width: "40%",
    display: "flex",
    justifyContent: "space-between",
  },
  navlogo: {
    lineHeight: "49px",
    fontSize: theme.typography.fontSize + 16,
    fontFamily: "Pacifico",
    textDecoration: "none",
    color: theme.design.colors.white,
  },
  icon: {
    width: "10%",
    display: "flex",
    justifyContent: "space-between",
    color: theme.design.colors.white,
  },
  navActive: {
    color: theme.design.colors.darkOrange,
  },
}));
