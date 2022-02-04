import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useArticleStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%          ",
    fontFamily: theme.include.styles.font.lato,
    margin: "auto",
  },
  header: {
    display: "flex",
    fontFamily: theme.include.styles.font.lato,
    fontSize: theme.typography.fontSize * 3,
    justifyContent: "center",
  },
  hero: {
    width: "80%",
    display: "flex",
    marginTop: theme.spacing(4),
    margin: "auto",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    width: "48%",
    marginTop: theme.spacing(5),
    fontSize: theme.typography.fontSize + 4,
    lineHeight: "32px",
    margin: "auto",
  },
  image: {
    display: "flex",
    marginTop: theme.spacing(4),
    width: "30%",
    height: "40vh",
    margin: "auto",
  },
  imageText: {
    display: "flex",
    justifyContent: "center",
    width: "48%",
    marginTop: theme.spacing(4),
    fontSize: theme.typography.fontSize + 4,
    lineHeight: "32px",
    margin: "auto",
  },

  footerSection: {
    display: "flex",
    marginTop: theme.spacing(4),
    textAlign: "center",
    flexDirection: "column",
  },
  author: { fontSize: theme.typography.fontSize + 8 },
  category: {
    marginTop: theme.spacing(3),
    fonSize: theme.typography.fontSize + 4,
  },
  share: {
    fonSize: theme.typography.fontSize + 4,
    marginTop: theme.spacing(6),
  },
  icons: {
    display: "flex",
    width: "70px",
    justifyContent: "space-between",
    marginTop: theme.spacing(2.3),
    margin: "auto",
  },
}));
