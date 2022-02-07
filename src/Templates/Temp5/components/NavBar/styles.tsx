import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useNavStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    background: theme.design.colors.grayshade,
    fontFamily: theme.include.styles.font.lato,
  },
  container: {
    display: "flex",
    width: "90%",
    justifyContent: "space-between",
    margin: "auto",
    marginTop: theme.spacing(3),
    height: "100%",
  },
  navHeader: {
    fontFamily: theme.include.styles.font.cookie,
    fontSize: theme.typography.fontSize * 2.7,
    textDecoration: "none",
    color: theme.design.colors.black,
  },
  Link: { textDecoration: "none" },
  listItems: {
    listStyle: "none",
    width: "30%",
    display: "flex",
    justifyContent: "space-between",
    fontSize: theme.typography.fontSize + 4,
    textDecoration: "none",
    color: theme.design.colors.black,
  },
}));
