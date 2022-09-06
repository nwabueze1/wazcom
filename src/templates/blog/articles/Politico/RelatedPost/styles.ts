import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRelatedPostPoliticoStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    cursor: "pointer",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: theme.design.font.bitter,
    margnLeft: theme.spacing(-3),
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: theme.spacing(0, "auto")
    }
  },
  thumbnailImg: {
    width: "100%",
    objectFit: "cover",
  },
  body: {
    margin: theme.spacing(0, "auto")
  },
  articleTitle: {
    fontSize: theme.typography.fontSize + 8,
    lineHeight: "30px",
    fontWeight: theme.typography.fontWeightBold,
    width: "100%",
  },
  date: {
    fontSize: theme.typography.fontSize,
    color: theme.design.colors.waz_grey400,
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing(2)
  },
  category: {
    color: theme.design.colors.waz_red,
    fontSize: theme.typography.fontSize,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));
