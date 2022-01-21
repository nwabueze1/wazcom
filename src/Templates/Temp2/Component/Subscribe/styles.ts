import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useSubscribeStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: "Cormorant Garamond",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
  },
  info: {
    margin: theme.spacing(1, 0),
  },
  title: {
    fontSize: theme.typography.fontSize * 2.5,
    fontWeight: theme.typography.fontWeightBold,
  },
  input: {
    marginTop: theme.spacing(5),
  },
  btn: {
    background: theme.design.colors.terracotta,
    borderRadius: 0,
    right: 0,
    padding: theme.spacing(0.9, 3),
    fontSize: theme.typography.fontSize + 8,
  },
}));
