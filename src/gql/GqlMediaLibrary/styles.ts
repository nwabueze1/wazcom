import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useMediaLibraryStyles = makeStyles((theme: Theme) => ({
  "@keyframes a": {
    "0%, 50%": {
      transform: "scale(0)",
    },
  },
  root: {
    width: "100%",
  },
  collection: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(1),
    position: "relative",
  },
  column: {
    display: "flex",
    width: "33.3333%",
    flexDirection: "column",
    paddingRight: theme.spacing(3),
    "&:nth-child(3)": {
      padding: 0,
    },
  },
  thumbnail: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    marginBottom: theme.spacing(3),
    height: "150px",
    cursor: "pointer",
  },
  thumbnailOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "opacity 0.3s ease-in",
    opacity: 0,
    zIndex: 5,
    background: "rgba(255, 255, 255, 0.3)",

    "&:hover": {
      opacity: 1,
    },
  },
  thumbnailActions: {
    position: "absolute",
    top: "7.5%",
    right: "2%",
    display: "flex",
  },
  thumbnailAction: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    background: theme.design.colors.white,
    borderRadius: 4,
    marginRight: theme.spacing(1),
  },
  thumbnailActionIcon: {
    fontSize: 14,
    color: "#999F9B",
    cursor: "pointer",
  },
  image: {
    height: "100%",
    objectFit: "cover",
  },
  loading: {
    height: 40,
    opacity: 0.9,
  },
  dot: {
    background: theme.design.colors.black,
    "&, &:after": {
      display: "inline-block",
      width: "2em",
      height: "2em",
      borderRadius: "50%",
      animation:
        "a 1.5s calc(((var(--i) + var(--o, 0))/var(--n) - 1)*#{1.5s}) infinite",
    },

    "&:after": {
      background: "tomato",
      content: '""',
    },
  },
  loaderParent: {
    position: "relative",
    margin: theme.spacing(2, 0),
  },
  loader: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "transparent",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  tab: {
    color: theme.design.colors.red70,
    paddingBottom: 2,
    borderBottom: `2px solid ${theme.design.colors.red70}`,
  },
  wrapper: {
    maxWidth: 600,
    maxHeight: 550,
    width: 600,
    backgroundColor: theme.design.colors.white,
    borderRadius: theme.spacing(1),
    overflow: "scroll",
    zIndex: 15,
    padding: theme.spacing(4),
  },
}));
