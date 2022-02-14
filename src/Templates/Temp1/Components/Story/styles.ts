import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const useStoryStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: theme.include.styles.template2.maxWidthMd,
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  header: {
    fontSize: theme.typography.fontSize * 2,
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 6,
    },
  },
  container: {
    display: "flex",
    lineHeight: "28px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  imageParent: {
    width: "46.5%",
    height: 400,
    [theme.breakpoints.down("md")]: {
      width: "80%",
      margin: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "auto",
    },
  },
  image: {
    width: "100%",
    height: 400,
    objectFit: "cover",
  },
  content: {
    width: "46.5%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  story: {
    fontWeight: theme.typography.fontWeightLight,
  },
  bottomText: {
    marginTop: theme.spacing(1.5),
    fontWeight: theme.typography.fontWeightLight,
  },
}));
