import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRelatedPostStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(3),
    border: `1px solid ${theme.design.colors.grey140}`,
    borderRadius: 4,
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
  },
  thumbnailDetails: {
    padding: theme.spacing(2),
  },
  articleTittle: {
    fontSize: theme.typography.fontSize + 4,
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: "24px",
  },
  avatar: {
    position: "relative",
    width: 32,
    height: 32,
  },
  avatarImg: {
    top: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  authorContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(2.5),
  },
  author: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.fontSize + 2,
  },
  timePosted: {
    fontSize: theme.typography.fontSize,
    color: theme.design.colors.grey120,
  },
}));
