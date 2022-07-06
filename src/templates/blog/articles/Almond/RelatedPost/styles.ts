import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRelatedPostGelloStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    // cursor: "pointer",
    // backgroundColor:"red",
    // marginBottom: theme.spacing(4),
   
    // [theme.breakpoints.down("md")]: {
    //   width: "48%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    // },
  },
  thumbnailImgContainer: {
    // height: 220,
    position: "relative",
  },
  thumbnailImg: {
    width: "120px",
    height: "100px",
    objectFit: "cover",
  },
  articleTitle: {
    fontSize: theme.typography.fontSize + 8,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "22px",
    marginTop: theme.spacing(1.5),
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
    gap: theme.spacing(3)
  }
}));
