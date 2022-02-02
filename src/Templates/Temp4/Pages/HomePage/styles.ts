import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useHomePageStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
  },
}));
