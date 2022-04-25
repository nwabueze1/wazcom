import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";

export const useEmptyStateStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    boxShadow: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  menus: {
    display: "flex",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 239,
    height: 141,
    objectFit: "cover",
  },
  text: {
    padding: theme.spacing(5, 0, 4, 0),
    fontSize: theme.typography.fontSize + 4,
    color: theme.design.colors.primaryBlack,
    whiteSpace: "nowrap",
  },
}));
