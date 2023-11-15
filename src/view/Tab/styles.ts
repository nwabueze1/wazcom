import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useTabsStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    margin: 0,
    height: "100vh",
    background: theme.design.colors.waz_white,
  },
  selectorContainer: {
    display: "flex",
    gap: theme.spacing(4),
    marginBottom: theme.spacing(2.5),
  },
  selector: {
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,
    color: theme.design.colors.black200,
    fontWeight: theme.typography.fontWeightMedium,
    position: "relative",
    width: "max-content",
    cursor: "pointer",
    "&.active": {
      "&::after": {
        content: "''",
        position: "absolute",
        left: 0,
        width: "100%",
        height: 2,
        bottom: -2,
        background: theme.design.colors.black200,
      },
    },
  },
}));
