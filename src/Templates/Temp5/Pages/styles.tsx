import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  containerPost: {
    width: "45%",
  },
}));
