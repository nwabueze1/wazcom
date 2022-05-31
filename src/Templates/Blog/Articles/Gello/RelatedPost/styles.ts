import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRelatedPostStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    cursor: "pointer",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      width: "48%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  thumbnailImgContainer: {
    height: 220,
    position: "relative",
  },
  thumbnailImg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  articleTitle: {
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: "22px",
    marginTop: theme.spacing(1.5),
  },
  post: {
    color: theme.design.colors.grey600,
    fontSize: theme.typography.fontSize + 2,
    lineHeight: "20px",
    marginTop: theme.spacing(1),
  },
}));
