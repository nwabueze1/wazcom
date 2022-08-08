import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useBuzzStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    fontFamily: theme.design.font.openSans,
  },
  restaurant: {
    position: "relative",
  },
  body: {
    position: "absolute",
    top: 345,
  },
  nav: {
    position: "absolute",
    top: 20,
  },
}));
