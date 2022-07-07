import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRelatedPostHaloStyles = makeStyles<Theme>((theme: Theme) => ({
  
  thumbnailImg: {
    width: "240px",
    height: "140px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  articleTitle: {
    fontSize: theme.typography.fontSize + 6,
    lineHeight: "22px",
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing(1.5),
  },
  post: {
    color: theme.design.colors.waz_grey600,
    fontSize: theme.typography.fontSize + 2,
    lineHeight: "20px",
    marginTop: theme.spacing(1),
  },
  relatedPostHeader: {
    fontSize: theme.typography.fontSize + 8,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "27px",
  },
  relatedArticleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  thumbnailDetails: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
    }
  },
  relatedPostAuthor: {
    color: theme.design.colors.waz_grey100,
    lineHeight: "15px",
    fontSize: theme.typography.fontSize + 2
  },
  articleDate: {
    lineHeight: "12px",
    color: theme.design.colors.waz_grey100,
    marginTop: theme.spacing(2)
  },
}));
