import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const usePostStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    fontFamily: "Cormorant Garamond",
    [theme.breakpoints.down("md")]: {
      maxWidth: 760,
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
    fontFamily: "Cormorant Garamond",
    color: theme.design.colors.terracotta,
    fontSize: theme.typography.fontSize + 6,
    fontWeight: theme.typography.fontWeightBold
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
