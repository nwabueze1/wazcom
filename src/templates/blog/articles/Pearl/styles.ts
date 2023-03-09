import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const usePearlStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    margin: theme.spacing(0, "auto"),
    fontFamily: theme.design.font.inter,
  },
  hero: {
    height: 590,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: 432,
    },
  },
  featuredImage: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  heroContent: {
    zIndex: 3,
    padding: theme.spacing(0, 6.5),
    position: "absolute",
    bottom: "10%",
    color: theme.design.colors.waz_white,
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 2),
    },
  },
  tag: {
    color: theme.design.colors.waz_white,
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(1, 1.5),
    borderRadius: "3px",
    border: `1px solid ${theme.design.colors.waz_white}`,
  },
  tags: {
    display: "flex",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    fontWeight: 900,
    fontSize: theme.typography.fontSize + 28,
    lineHeight: "60px",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 12,
      lineHeight: "36px",
    },
  },
  contentContainer: {
    display: "flex",
    margin: theme.spacing(0, 6.5),
    gap: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      margin: theme.spacing(0, 4),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 2),
    },
  },
  content: {
    fontSize: theme.typography.fontSize + 6,
    lineHeight: "32px",
    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.fontSize + 4,
    },
  },
  leftColumn: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 35.58%, rgba(0, 0, 0, 0.72) 71.58%, rgba(0, 0, 0, 0.97) 100%)",
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: `1px solid ${theme.design.colors.waz_grey300}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.design.colors.waz_primaryBlack,
    fontSize: theme.typography.fontSize + 8,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(1),
    margin: theme.spacing(4, 0),
  },
  rightColumn: {
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  postedTime: {
    fontSize: theme.typography.fontSize,
  },
  relatedPost: {
    fontSize: theme.typography.fontSize + 8,
    lineHeight: "24px",
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightMedium,
    margin: theme.spacing(4, 0, 2, 0),
  },
  footer: {
    marginTop: theme.spacing(10),
  },
}));
