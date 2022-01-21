import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const useHomePageStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: "Cormorant Garamond",
  },
  container: {
    padding: theme.spacing(3, 0),
    maxWidth: theme.include.styles.maxWidth,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "95%",
      margin: "0 auto",
    },
  },
  header: {
      margin: theme.spacing(1,0),
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize * 3
  },
  post: {
marginTop: theme.spacing(3)
  },
  popularPost: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      },
  },
  intro: {
    margin: theme.spacing(10, 0)
  },
  subscribe: {
    margin: theme.spacing(10, 0)
  }
}));