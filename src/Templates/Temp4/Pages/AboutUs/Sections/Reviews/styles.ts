import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useReviewsStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    height: "100%",
    width: "100%",
    fontFamily: theme.include.styles.template4.font,
    padding: theme.spacing(11, 0),
  },
  container: {
    maxWidth: theme.include.styles.template2.maxWidth,
    margin: "0 auto",
  },
  reviews: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(5),
    margin: "auto",
    width: "95%",
    overflow: "scroll",
    "-ms-overflow-style": "none" /* for Internet Explorer, Edge */,
    scrollbarWidth: "none" /* for Firefox */,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(3.5),
    },
  },
  cardBox: {
    width: "554px",
    display: "flex",
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(1.5),
    boxShadow: `0px 0px 10px ${theme.design.colors.darkShadow}`,
    [theme.breakpoints.down("md")]: {
      minWidth: "704px",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
      flexDirection: "column",
    },
  },
  header: {
    textAlign: "center",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 28,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 16,
    },
  },
  imageContainer: {
    width: "45%",
    height: "296px",
    [theme.breakpoints.down("sm")]: {
      height: "188px",
      width: "100%",
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
  details: {
    width: "55%",
    alignSelf: "center",
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "66%",
    },
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 12,
  },
  detail: {
    paddingTop: theme.spacing(1),
  },
}));
