import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useHomePageStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
   fontFamily:theme.include.styles.fontFamily,
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
    margin: theme.spacing(1, 0),
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize * 3,
  },
  post: {
    marginTop: theme.spacing(3),
  },
  navigate: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    color: theme.design.colors.gray,
    borderColor: "transparent",
    marginRight: theme.spacing(2.5),
    "&:hover": {
      color: theme.design.colors.white,
      background: theme.design.colors.terracotta,
    },
  },
  postContainer: {
    display: "flex",
    overflow: "scroll",
    scrollBehavior: "smooth",
    gap: theme.spacing(4),
    "-ms-overflow-style": "none" /* for Internet Explorer, Edge */,
    scrollbarWidth: "none" /* for Firefox */,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      overflow: "scroll",
      gap: theme.spacing(4),
      "-ms-overflow-style": "none" /* for Internet Explorer, Edge */,
      scrollbarWidth: "none" /* for Firefox */,
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  navIcon: {
    fontSize: theme.typography.fontSize
  },
  navigateButton: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    
    },
  },
  intro: {
    margin: theme.spacing(10, 0),
  },
  subscribe: {
    margin: theme.spacing(10, 0),
  },
}));
