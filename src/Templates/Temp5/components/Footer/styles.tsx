import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useFooterStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "40vh",
    marginTop: theme.spacing(13),
    margin: "0 auto",
    background: theme.design.colors.lightGrey,
    fontFamily: theme.include.styles.template2.font.lato,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  footerHeader: {
    fontFamily: theme.include.styles.template2.font.garamond,
    fontSize: theme.typography.fontSize * 2.5,
    fontStyle: "italic",
    marginTop: theme.spacing(6.5),
    textDecoration: "none",
    color: theme.design.colors.black,
    fontWeight:theme.typography.fontWeightBold
  },
  listItems: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: theme.spacing(2.5),
    listStyle: "none",
    fontSize: theme.typography.fontSize + 4,
    marginTop: theme.spacing(17),
  },
  items: {
    textDecoration: "none",
    color: theme.design.colors.black,
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
  },
}));
