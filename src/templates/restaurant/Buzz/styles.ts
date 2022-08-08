import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useBuzzStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    fontFamily: theme.design.font.openSans,
  },
  restaurant: {
    position: "relative",
  },
  nav: {
    position: "absolute",
    top: 20,
  },
}));
