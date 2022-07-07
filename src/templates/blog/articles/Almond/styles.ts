import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useAlmondStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: "sans-seriff, merriweather",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  contentContainer: {
    width: "100%",
    dispplay: "flex",
    justifyContent: "center",
  },
  heroContainer: {
    height: "584px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      height: "750px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      height: "800px",
    },
  },
  hero: {
    width: "50%",
    backgroundColor: theme.design.colors.waz_grey500,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(-2),
      height: "570px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: theme.spacing(-2),
      height: "470px",
    },
  },
  title: {
    fontSize: theme.typography.fontSize + 30,
    color: theme.design.colors.waz_white,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "150%",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 20,
    },
  },
  date: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.design.colors.waz_white,
  },
  heroItems: {
    marginLeft: theme.spacing(5),
    position: "absolute",
    top: "150px",
    [theme.breakpoints.down("md")]: {
      top: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "40px",
      marginLeft: theme.spacing(2),
    },
  },
  socialIcon: {
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    border: `1px solid ${theme.design.colors.waz_white}`,
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
  },
  socialIconsContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing(-1),
    marginTop: theme.spacing(4),
  },
  icon: {
    marginTop: theme.spacing(0.7),
    filter: "invert(100%)",
  },
  headerImageContainer: {
    width: "50%",
  },
  headerImage: {
    width: "720px",
    height: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      height: "420px",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "450px",
      width: "100%",
    },
  },
  postContent: {
    lineHeight: "32px",
  },
  body: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    width: "60%",
    margin: "auto",
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
    position: "relative",
    fontSize: theme.typography.fontSize + 4,
    lineHeight: "32px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  relatedPostsContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  hr: {
    height: "1px",
    width: "70%",
    backgroundColor: theme.design.colors.waz_black,
    margin: "0 auto",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  relatedPosts: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      flexDirection: "column",
    },
  },
  relatedPostsHeader: {
    marginTop: theme.spacing(2),
    fontSize: theme.typography.fontSize + 8,
    fontWeight: theme.typography.fontWeightBold,
  },
  headerContainer: {
    width: "39%",
    justifyContent: "center",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "25%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      marginBottom: theme.spacing(-5),
    },
  },
  footer: {
    borderTop: `1px solid ${theme.design.colors.waz_grey100}`,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "49px",
    marginTop: theme.spacing(6),
  },
  footerContent: {
    marginTop: theme.spacing(1.5),
    display: "flex",
    flexDirection: "row",
  },
  upperText: {
    color: theme.design.colors.waz_gold,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "12px",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(-2),
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
    },
  },
  authorInfo: {
    marginTop: theme.spacing(3),
  },
  link: {
    marginTop: theme.spacing(0.4),
    marginLeft: theme.spacing(0.7),
  },
}));
