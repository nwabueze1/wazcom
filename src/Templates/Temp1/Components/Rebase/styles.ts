import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material/styles";

export const useRebaseStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    maxWidth: theme.include.styles.maxWidth,
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: theme.include.styles.tabMaxWidth,
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-between",
      height: 130,
    },
  },
  header: {
    fontSize: theme.typography.fontSize * 2,
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(3, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 10,
    },
  },
  content: {
    width: "46.5%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  buttonContainer: {
    width: "46.5%",
  },
  button: {
    background: theme.design.colors.black,
    color: theme.design.colors.white,
    padding: theme.spacing(1, 1),
  },
  line: {
    height: 1,
    background: theme.design.colors.black,
  },
  articleParent: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: theme.spacing(2),
    },
  },
  articleDetails: {
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
  },
  body: {
    fontWeight: theme.typography.fontWeightLight,
  },
  blogBase: {
    padding: theme.spacing(4, 0),
    display: "flex",
    borderBottom: `1px solid ${theme.design.colors.grayline}`,
    "&:first-child": {
      borderTop: `1px solid ${theme.design.colors.grayline}`,
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  blogList: {
    margin: theme.spacing(6, 0),
  },
  blogDate: {
    flex: 0.3,
    fontWeight: theme.typography.fontWeightLight
  },
}));
