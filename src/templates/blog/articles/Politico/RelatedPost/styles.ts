import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRelatedPostPoliticoStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    cursor: "pointer",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "10px",
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    }
  },
  thumbnailImg: {
    width: "330px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    }
  },
  body: {
    margin: "0 auto"
  },
  articleTitle: {
    fontSize: theme.typography.fontSize + 10,
    lineHeight: "32px",
    fontWeight: theme.typography.fontWeightBold,
    width: "340px",
    [theme.breakpoints.down("md")]: {
      width: "280px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "280px",
    }
  },
  date: {
    fontSize: theme.typography.fontSize,
    color: theme.design.colors.waz_grey300,
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing(2)
  }
 
}));
