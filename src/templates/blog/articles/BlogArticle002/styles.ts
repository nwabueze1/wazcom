import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useBlogArticle002Styles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: theme.design.font.lato,
    margin: "auto",
  },
  header: {
    display: "flex",
    fontFamily: theme.design.font.lato,
    fontSize: theme.typography.fontSize * 3,
    justifyContent: "center",
    marginTop: theme.spacing(10),
  },
  hero: {
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
  horizontalLine: {
    width: "48%",
    margin: "auto",
    marginTop: theme.spacing(8),
    border: `1px solid ${theme.design.colors.grimmyGrey}`,
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
    width: "3%",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
    margin: "auto",
  },
}));
