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
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
     gap: theme.spacing(3)
    },
  },
  cardBox: {
    width: "554px",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: theme.spacing(1.5),
    boxShadow: `0px 0px 10px ${theme.design.colors.darkShadow}`,
  },
  header: {
    textAlign: "center",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 28,
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 16
     },
  },
  imageContainer: {
    width: "245px",
    height: "296px",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  details: {
    width: "50%",
    alignSelf: "center",
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 12,
  },
  detail: {
    paddingTop: theme.spacing(1),
  },
}));
