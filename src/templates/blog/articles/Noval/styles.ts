import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useNovalStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: 1200,
    padding: theme.spacing(5.5, 0),
    height: "100%",
    fontFamily: theme.design.font.dmSans,
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "auto",
    },
  },
  featuredImageContainer: {
    width: "47%",
    height: 360,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: 432,
    },
    [theme.breakpoints.down("sm")]: {
      height: 220,
    },
  },
  featuredImage: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  tag: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.fontSize,
    textTransform: "capitalize",
    borderRadius: 4,
    background: theme.design.colors.waz_grey300,
    color: theme.design.colors.waz_grey400,
  },
  tags: {
    display: "flex",
    gap: theme.spacing(1),
  },
  blogInfoContainer: {
    width: "49%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: theme.spacing(6, 0, 1, 0),
    },
  },
  title: {
    fontSize: theme.typography.fontSize * 3,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "48px",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize * 2,
      lineHeight: "28px",
    },
  },
  avatar: {
    position: "relative",
    height: 32,
    width: 32,
    borderRadius: "50%",
  },
  avatarImage: {
    borderRadius: "50%",
  },
  writtenBy: {
    fontStyle: "italic",
    color: theme.design.colors.waz_grey100,
    fontSize: theme.typography.fontSize + 2,
    textTransform: "capitalize",
  },
  author: {
    fontStyle: "normal",
    color: theme.design.colors.waz_black,
  },
  blogInfo: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(3),
  },
  postedTime: {
    padding: theme.spacing(0, 1.5),
    borderLeft: `1px solid ${theme.design.colors.waz_grey200}`,
    borderRight: `1px solid ${theme.design.colors.waz_grey200}`,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize,
    },
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  content: {
    color: theme.design.colors.waz_primaryBlack,
    fontSize: theme.typography.fontSize + 6,
    width: "60%",
    lineHeight: "28px",
    "& p": {
      margin: theme.spacing(1.5, 0),
    },
    "& h1, h2, h3, h4, h5, h6": {
      margin: theme.spacing(2.5, 0)
    },
    "& img": {
      margin: theme.spacing(6, "auto"),
      maxWidth: "100%",
      height: "100%",
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  fullContentWidth: {
    width: "100%",
  },
  relatedArticles: {
    width: "34%",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: theme.spacing(7, 0, 7, 0),
    },
  },
  relatedPost: {
    fontSize: theme.typography.fontSize + 8,
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(3),
  },
  sharePost: {
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(2, 0, 1, 0),
  },
  posts: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexWrap: "wrap",
      gap: theme.spacing(3),
    },
  },
  shareContainer: {
    marginTop: theme.spacing(2),
  },
  socialIcons: {
    display: "flex",
    gap: theme.spacing(2),
  },
  shareText: {
    fontSize: theme.typography.fontSize,
    color: theme.design.colors.waz_grey200,
    marginBottom: theme.spacing(1),
  },
  defaultAvatar: {
    height: 32,
    width: 32,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: theme.typography.fontSize + 4,
    color: theme.design.colors.waz_white,
    background: theme.design.colors.waz_orange,
  },
}));
