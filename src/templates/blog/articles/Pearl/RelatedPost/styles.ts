import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useRelatedPostPearlStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {},
  thumbnailContainer: {
    height: 328,
    position: "relative",
    marginBottom: theme.spacing(1.5),
    cursor: "pointer",
    borderRadius: "4px",
  },
  thumbnailImage: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  thumbnailContent: {
    width: "90%",
    zIndex: 3,
    position: "absolute",
    bottom: "10%",
    color: theme.design.colors.waz_white,
    margin: theme.spacing(0, 2.5),
  },
  tag: {
    color: theme.design.colors.waz_white,
    fontSize: theme.typography.fontSize,
    border: `1px solid ${theme.design.colors.waz_white}`,
    padding: theme.spacing(1, 1.5),
    width: "fit-content",
    borderRadius: "3px",
  },
  tags: {
    display: "flex",
    gap: theme.spacing(1),
  },
  thumnailTitle: {
    fontSize: theme.typography.fontSize * 2,
    lineHeight: "36px",
  },
  postedTime: {
    fontSize: theme.typography.fontSize,
    color: theme.design.colors.waz_whiteBeta,
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 35.58%, rgba(0, 0, 0, 0.72) 71.58%, rgba(0, 0, 0, 0.97) 100%)",
  },
}));
