import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useFooterStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "32vh",
    margin: "0 auto",
    background: theme.design.colors.lightGrey,
    fontFamily: theme.include.styles.font.lato,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  footerHeader: {
    fontFamily: theme.include.styles.font.garamond,
    fontSize: theme.typography.fontSize * 2.7,
    fontStyle: "italic",
    marginTop: theme.spacing(6.5),
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
  icons: {
    display: "flex",
    justifyContent:'space-between',
  },
}));
