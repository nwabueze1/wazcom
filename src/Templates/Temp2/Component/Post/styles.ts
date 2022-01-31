import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const usePostStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
   fontFamily:theme.include.styles.template2.font.garamond,
    [theme.breakpoints.down("md")]: {
      maxWidth: theme.include.styles.template2.tabMaxwidth,
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "auto"
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 10,
  },
  date: {
    marginRight: theme.spacing(2)
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2, 0)
  },
  views: {
    display: "flex",
  },
  details: {
    padding: theme.spacing(1,0)
  },
  btn: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 2),
    borderColor: theme.design.colors.terracotta,
   fontFamily:theme.include.styles.template2.font.garamond,
    color: theme.design.colors.terracotta,
    background: theme.design.colors.white,
    fontSize: theme.typography.fontSize + 6,
    fontWeight: theme.typography.fontWeightBold,
    "&:hover" : {
      color: theme.design.colors.white,
      background: theme.design.colors.terracotta,
      borderColor: theme.design.colors.terracotta,
    }
  },
  container: {
    width: "400px",
    [theme.breakpoints.down("md")]: {
      width: "340px",
    },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "auto"
      },
  },
  image: {
    height: "100%",
    objectFit: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("md")]: {
      width: "340px",
    },
  },
}));
