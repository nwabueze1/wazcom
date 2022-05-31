import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useGelloStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "90%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: theme.include.styles.template2.font.NunitoSans,
    maxWidth: 1440,
    margin: "auto",
    padding: theme.spacing(6.5, 0),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  contentContainer: {
    width: "67%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  fullContent: {
    width: "100%",
  },
  relatedArticleContainer: {
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(7),
    },
  },
  imgContainer: {
    position: "relative",
    width: "100%",
    height: 400,
    [theme.breakpoints.down("md")]: {
      height: "432px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "220px",
    },
  },
  featuredImg: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  title: {
    lineHeight: "40px",
    fontSize: theme.typography.fontSize * 3,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize * 2,
      lineHeight: "36px",
    },
  },
  avatarContainer: {
    position: "relative",
    height: 32,
    width: 32,
  },
  avatarImage: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  written: {
    fontStyle: "italic",
    color: theme.design.colors.grey130,
    fontSize: theme.typography.fontSize + 2,
  },
  writersName: {
    color: theme.design.colors.black,
    fontStyle: "normal",
    textTransform: "capitalize",
  },
  bulletPoint: {
    height: 8,
    width: 8,
    borderRadius: "50%",
    border: `1px solid ${theme.design.colors.grey130}`,
  },
  date: {
    fontSize: theme.typography.fontSize,
    lineHeight: "16px",
    marginLeft: theme.spacing(0.5),
  },
  dateWritten: {
    display: "flex",
    alignItems: "center",
  },
  articleInfo: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
  },
  line: {
    margin: theme.spacing(3, 0),
  },
  content: {
    color: theme.design.colors.grey160,
    lineHeight: "26px",
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  relatedPostHeader: {
    fontSize: theme.typography.fontSize + 8,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "27px",
  },
  postLine: {
    marginBottom: theme.spacing(4),
  },
  relatedPosts: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexWrap: "wrap",
      gap: theme.spacing(3),
    },
  },
  shareContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  shareLine: {
    width: "100%",
    height: 0,
  },
  icons: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(0, 4.5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 4),
    },
  },
  shareText: {
    fontSize: theme.typography.fontSize + 2,
    color: theme.design.colors.grey120,
    textAlign: "center",
    marginTop: theme.spacing(0.5),
  },
  shareRoot: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3, 0),
    },
  },
  defaultAvatar: {
    height: 32,
    width: 32,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: theme.typography.fontSize + 8,
    color: theme.design.colors.white,
    background: theme.design.colors.orange,
  },
}));
