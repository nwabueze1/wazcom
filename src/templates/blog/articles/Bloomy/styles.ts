import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useBloomyStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: 1200,
    margin: theme.spacing(9, "auto"),
    fontFamily: theme.design.font.inter,
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  point: {
    width: 4,
    height: 4,
    background: theme.design.colors.waz_grey600,
    borderRadius: "50%",
  },
  imgContainer: {
    position: "relative",
    width: "62%",
    height: 500,
    [theme.breakpoints.down("md")]: {
      width: "95%",
      margin: "0 auto",
    },
    [theme.breakpoints.down("sm")]: {
      height: 320,
    },
  },
  featuredImg: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  articleInfoContainer: {
    height: 435,
    width: "65%",
    background: theme.design.colors.waz_white,
    position: "absolute",
    left: 0,
    top: "6%",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      width: "90%",
      margin: theme.spacing(-4, "auto", 0),
      height: 315,
    },
  },
  articleInfo: {
    padding: theme.spacing(7, 4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 3),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 1.5),
    },
  },
  tag: {
    fontSize: theme.typography.fontSize,
    color: theme.design.colors.waz_brown,
    width: "fit-content",
    padding: theme.spacing(0.5, 1),
    border: `1px solid ${theme.design.colors.waz_brown}`,
    borderRadius: 3,
  },
  tags: {
    display: "flex",
    gap: theme.spacing(1),
  },
  articleTitle: {
    fontSize: theme.typography.fontSize * 4,
    margin: theme.spacing(1.5, 0, 2, 0),
    lineHeight: "64px",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 28,
      lineHeight: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 16,
      lineHeight: "40px",
    },
  },
  socialIcons: {
    display: "flex",
    gap: theme.spacing(2),
  },
  avatar: {
    position: "relative",
    height: 24,
    width: 24,
    borderRadius: "50%",
    background: theme.design.colors.waz_brown,
  },
  avatarImage: {
    borderRadius: "50%",
  },
  blogInfo: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    margin: theme.spacing(2, 0),
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
  writtenBy: {
    fontSize: theme.typography.fontSize + 2,
    color: theme.design.colors.waz_grey1,
  },
  postedTime: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1),
    color: theme.design.colors.waz_grey1,
    fontSize: theme.typography.fontSize + 2,
  },
  content: {
    padding: theme.spacing(8, 0),
    color: theme.design.colors.waz_grey1,
    fontSize: theme.typography.fontSize + 6,
    width: "70%",
    margin: theme.spacing(0, "auto"),
    "& p": {
      margin: theme.spacing(1.5, 0),
      lineHeight: "32px",
    },
    "& h1, h2, h3, h4, h5, h6": {
      color: theme.design.colors.waz_primaryBlack,
      margin: theme.spacing(2.5, 0),
    },
    "& img": {
      margin: theme.spacing(4, "auto"),
      maxWidth: "100%",
      height: "100%",
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      width: "95%",
      padding: theme.spacing(4, 0),
    },
  },
  posts: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing(3),
  },
  relatedPostHeader: {
    display: "flex",
    marginBottom: theme.spacing(5),
    alignItems: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: "95%",
      margin: theme.spacing(0, "auto", 5),
    },
  },
  relatedPostHeaderTitle: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize + 8,
    lineHeight: "24px",
    color: theme.design.colors.waz_primaryBlack,
    textTransform: "uppercase",
  },
  hr: {
    color: theme.design.colors.waz_grey700,
    width: "85%",
    height: 0.1,
    borderBottom: `0.2px solid ${theme.design.colors.waz_grey700}`,
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  blogInfoContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
  },
}));
