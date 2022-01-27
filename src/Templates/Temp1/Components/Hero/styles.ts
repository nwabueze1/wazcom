import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const useHeroStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    maxWidth: theme.include.styles.maxWidth,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "95%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  hero: {
    height: "60vh",
    width: "100%",
    overflow: "hidden",
    backgroundPosition: "center",
    color: theme.design.colors.white,
    [theme.breakpoints.down("md")]: {
      height: "30vh",
    },
  },
  span: {
    color: theme.design.colors.grayline
  },
  header: {
    width: "60%",
    fontSize: theme.typography.fontSize * 3.5 + 3,
    lineHeight: "61px",
    margin: theme.spacing(10, 0, 6, 0),
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize * 2.5,
      width: "70%",
      lineHeight: "42px",
      margin: theme.spacing(10, 0, 6, 0),
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        fontSize: theme.typography.fontSize + 10,
        lineHeight: "24px",
        margin: theme.spacing(0, 0, 2, 0),
    },
  },
}));
