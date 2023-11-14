import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useViewHeaderStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 32,
    marginBottom: 13,
  },
  separator: {
    width: "100%",
    height: 1,
    background: theme.design.background.grey900,
    marginBottom: 32,
  },
  tabContainer: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  tab: {
    padding: theme.spacing(0.8, 2),
    borderRadius: 14,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.design.colors.black200,
    outline: "none",
    border: 0,
    cursor: "pointer",
    fontFamily: theme.typography.fontFamily,
    background: "transparent",
    "&.active": {
      background: theme.design.colors.black200,
      color: theme.design.colors.waz_white,
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
}));
