import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useIntroStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    fontFamily: theme.include.styles.font.garamond,
  },
  container: {
    height: "fit-content",
  },
}));
