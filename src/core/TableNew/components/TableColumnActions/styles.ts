import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useTableColumnActionsStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "none",
    fontSize: theme.typography.fontSize - 2,
    transition: "all 2s ease-in",
    marginTop: theme.spacing(1),
    opacity: 0,
    zIndex: -1,
    position: "relative",
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
