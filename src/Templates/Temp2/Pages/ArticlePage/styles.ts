import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticlePageStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
   fontFamily:theme.include.styles.fontFamily,
    maxWidth: theme.include.styles.maxWidth,
    margin: "0 auto",
  },
  container: {
    width: "60%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  articleMeta: {
    justifyContent: "space-between",
    display: "flex",
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing(10),
  },
  views: {
    width: "70%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
  },
  title: {
    fontSize: theme.typography.fontSize * 3,
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 12,
    },
  },
  text: {
    fontSize: theme.typography.fontSize + 8,
    lineHeight: "28px",
    margin: theme.spacing(6, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 4,
    },
  },
  subscribe: {
    margin: theme.spacing(10, 0),
  },
  imageContainer: {
    height: "400px",
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      height: "182px",
    },
  },
  icon: {
    marginLeft: theme.spacing(4),
  },
  image: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "182px",
    },
  },
  share: {
    fontWeight: theme.typography.fontWeightLight,
    margin: theme.spacing(3, 0),
  },
  subHeader: {
    fontSize: theme.typography.fontSize + 16,
    fontWeight: theme.typography.fontWeightMedium,
    margin: theme.spacing(2, 0),
  },
  relatedPost: {
    width: "95%",
    margin: theme.spacing(0, "auto"),
  },
  authorName: {
    fontSize: theme.typography.fontSize + 8,
    margin: theme.spacing(4, 0),
  },
  line: {
    margin: theme.spacing(8, 0),
    borderBottom: `1px solid ${theme.design.colors.gray}`,
  },
  author: {
    textAlign: "center",
  },
  relatedHeader: {
    fontSize: theme.typography.fontSize + 20,
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(5, 0),
  },
}));
