import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

export const useSortSelectorStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.design.colors.waz_white,
    borderRadius: 3,
    width: "7%",
    height: 40,
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.design.colors.waz_grey1,
    border: `1px solid ${theme.design.colors.waz_primary700}`,
  },
  sortDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 1.5, 0, 2),
    cursor: "pointer",
    width: "100%",
  },
  sortText: {
    fontSize: theme.typography.fontSize,
  },
  sortIcon: {
    fontSize: theme.typography.fontSize + 12,
  },
  sortColumns: {
    position: "absolute",
    top: "calc(100% + 1px)",
    left: 0,
    width: 150,
    boxShadow: "0px 3px 15px #0000000D",
    background: theme.design.colors.waz_white,
    padding: theme.spacing(1, 0),
    borderRadius: 3,
    opacity: 0,
    zIndex: -1,
    transition: "all 0.3s ease-in",
  },
  sortColumnsActive: {
    opacity: 1,
    zIndex: 10,
  },
  sortColumn: {
    fontSize: theme.typography.fontSize,
    padding: theme.spacing(1, 0, 1, 2),
    cursor: "pointer",
    position: "relative",

    "&:hover": {
      background: theme.design.colors.waz_lightGreen,
    },
  },
  sortHeading: {
    fontSize: theme.typography.fontSize - 4,
    paddingLeft: theme.spacing(2),
  },
}));
