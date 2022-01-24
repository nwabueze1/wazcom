import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useBlogPageStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamiy: "Raleway, san-serif",
  },
  container: {
    maxWidth: theme.include.styles.maxWidth,
    margin: "0 auto",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(2),
    },
  },
  contentContainer: {
    width: "55%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  content: {
    fontWeight: theme.typography.fontWeightLight,
    lineHeight: "28px",
    fontSize: theme.typography.fontSize + 4,
  },
  header: {
    width: "90%",
    margin: theme.spacing(4, 0),
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.fontSize * 2.5,
  },
  image: {
    width: 720,
    height: "400px",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },
  slide: {
    margin: theme.spacing(10, 0),
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    },
  },
  rightSlide: {
    display: "flex",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.fontSize + 4,
    justifyContent: "space-between",
    alignItems: "center",
    width: "21%",
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  navContainer: {
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "auto"
    },
    
  },
  rightArrow: {
    height: "3vh",
  },
  leftArrow: {
    transform: "rotate(180deg)",
  },
}));
