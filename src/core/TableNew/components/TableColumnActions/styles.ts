import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTableColumnActionsStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    fontSize: 0,
    transition: "all 2s ease-in",
    marginTop: theme.spacing(0),
    position: "relative",
    height: 0,
    color: theme.design.colors.waz_black, 
  },
  action: {
    cursor: "pointer",
    margin: 0,
  },
  actionSeparator: {
    margin: theme.spacing(0, 0.5),
  },
}));
