import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const MenuTableStyles = makeStyles((theme: BaseTheme) => ({
  deleteIcon: {
    color: theme.design.colors.red70,
    marginLeft: theme.spacing(2.4),
  },
  table: {
    minWidth: 700,
  },
  active: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing(3),
  },
}));
