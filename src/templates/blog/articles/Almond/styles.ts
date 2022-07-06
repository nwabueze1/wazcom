import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useAlmondStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: theme.design.font.nunitoSans,
    maxWidth: 1440,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  contentContainer: {
    width: "100%",
    dispplay: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  heroContainer: {
    height: "584px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  hero: {
    width: "50%",
    backgroundColor: theme.design.colors.waz_grey500,
    position: "relative"
  },
  title: {
    fontSize: theme.typography.fontSize + 30,
    color: theme.design.colors.waz_white,
    fontWeight: theme.typography.fontWeightBold,
    width: "80%",
  },
  date: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.design.colors.waz_white,
  },
  heroItems: {
    marginLeft: theme.spacing(5),
    position: "absolute",
    top: "150px"
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
    marginLeft: theme.spacing(-1)
  },
  icon: {
    marginTop: theme.spacing(0.7),
    color: "white"
  },
  twitter: {
    color: "white"
  },
  headerImageContainer: {
    width: "50%"
  },
  headerImage: {
    width: "100%",
    height: "100%"
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
    // marginBottom: theme.spacing(4)
  },
  relatedPosts: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
    flexWrap: "wrap"
  },
  relatedPostsHeader: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.fontSize + 10,
    fontWeight: theme.typography.fontWeightBold
  },
  headerContainer: {
    width: "40%",
    justifyContent: "center",
    display: "flex"
  },
  footer: {
    borderTop: `1px solid ${theme.design.colors.waz_grey100}`,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "49px",
    marginTop: theme.spacing(6)
  },
  copyright: {
    marginTop: theme.spacing(1)
  }
}));
