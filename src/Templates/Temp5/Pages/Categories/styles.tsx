import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    fontFamily: theme.include.styles.font.lato,
  },
  header: {
    display: "flex",
    fontSize: theme.typography.fontSize * 3,
    justifyContent: "center",
  },
  unorderedLists: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-between",
    margin: "auto",
    width: "50%",
    marginTop: theme.spacing(4),
    color: theme.design.colors.mediumGrey,
    fontSize: theme.typography.fontSize + 8,
  },

  listItem: {
    "&:hover": {
      color: theme.design.colors.black,
      cursor: "pointer",
    },
  },

  allContainers: {
    marginTop: theme.spacing(8),
    width: "90%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    margin: "auto",
    gap: theme.spacing(10),
  },

  wrapper: {
    display: "grid",
    width: "90%",
    gridTemplateColumns: "1fr 1fr",
    margin: "auto",
    gap: theme.spacing(10),
    marginTop: theme.spacing(8),

    "& img": {
      width: "100%",
      objectFit: "cover",
    },

    "& .head": { width: "50%" },
  },

  post: { width: "100%" },

  containerImage: { width: "100%", height: "35vh", objectFit: "cover" },
  head: {
    marginTop: theme.spacing(3),
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  catergory: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  containerInfo: {
    width: "100%",
  },
  containerHeader: {
    fontSize: theme.typography.fontSize * 2,
    fontWeight: theme.typography.fontWeightBold,
  },
  containerParagraph: {
    fontSize: theme.typography.fontSize + 4,
    lineHeight: "24px",
    width: "100%",
    marginBottom: theme.spacing(1),
  },

  views: {
    display: "flex",
    justifyContent: "flex-end",
    width: "10%",
  },
  date: {
    width: "70%",
    display: "flex",
    justifyContent: "flex-end",
  },
  readmoreBtn: {
    textDecoration: "none",
    color: theme.design.colors.black,
    width: "26%",
    marginTop: theme.spacing(2),
    borderBottom: `2px solid  ${theme.design.colors.black}`,
    paddingBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
}));
