import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useBlogArticle003Styles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: 1200,
    padding: theme.spacing(5.5, 0),
    height: "100%",
    fontFamily: theme.include.styles.template2.font.dmSans,
    margin: "auto",
  },
  featuredImageContainer: {
    width: "47%",
    height: 360,
    position: "relative",
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
  },
  tag: {
    padding: theme.spacing(0.5),
    fontSize: theme.typography.fontSize,
    textTransform: "capitalize",
    borderRadius: 4,
    background: theme.design.colors.grey140,
    color: theme.design.colors.grey150,
  },
  tags: {
    display: "flex",
    gap: theme.spacing(1),
  },
  blogInfoContainer: {
    width: "49%",
  },
  tittle: {
    fontSize: theme.typography.fontSize * 3,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "48px",
    marginTop: theme.spacing(1),
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
    color: theme.design.colors.grey120,
    fontSize: theme.typography.fontSize + 2,
  },
  authour: {
    fontStyle: "normal",
    color: theme.design.colors.black,
  },
  blogInfo: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(3),
  },
  postedTime: {
    padding: theme.spacing(0, 1.5),
    borderLeft: `1px solid ${theme.design.colors.grey130}`,
    borderRight: `1px solid ${theme.design.colors.grey130}`,
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(6),
  },
  content: {
    color: theme.design.colors.primaryBlack,
    fontSize: theme.typography.fontSize + 4,
    width: "60%",
    lineHeight: "28px",
  },
  fullContentWidth: {
    width: "100%",
  },
  relatedArticles: {
    width: "34%",
    justifyContent: "space-between",
  },
  relatedPost: {
    fontSize: theme.typography.fontSize + 8,
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(3),
  },
}));
