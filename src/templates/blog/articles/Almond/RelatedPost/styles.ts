import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRelatedPostAlmondStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "48%",
    display: "flex",
    justifyContent: "center",
  },
  thumbnailImgContainer: {
    position: "relative",
  },
  thumbnailImg: {
    width: "120px",
    height: "100px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "343px",
      height: "164px",
    },
  },
  articleTitle: {
    fontSize: theme.typography.fontSize + 8,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "30px",

    [theme.breakpoints.down("md")]: {
      width: "270%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "200%",
    },
  },
  post: {
    color: theme.design.colors.waz_grey600,
    fontSize: theme.typography.fontSize + 2,
    lineHeight: "20px",
    marginTop: theme.spacing(1),
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(2.5),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(0),
      marginTop: theme.spacing(7),
    },
  },
  date: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.design.colors.waz_grey100,
  },
  alternateAvatar: {
    marginBottom: theme.spacing(2.3),
  },
}));
