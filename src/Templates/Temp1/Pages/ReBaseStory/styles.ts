import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const useRebaseStoryStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamiy: "Raleway, san-serif",
  },
  header: {
    textAlign: "center",
    fontSize: theme.typography.fontSize * 2 + 4,
    marginTop: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 10,
    },
  },
  rebasePage: {
    margin: theme.spacing(10, 0)
  }
}));