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
    width: 150,
    height: 150,
    objectFit: "cover",
  },
  text: {
    padding: theme.spacing(2, 0, 1.5, 0),
    fontSize: theme.typography.fontSize + 4,
    color: theme.design.colors.primaryBlack,
  },
}));
