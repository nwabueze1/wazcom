import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const useHomePageStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: "Raleway",
  },
}));
