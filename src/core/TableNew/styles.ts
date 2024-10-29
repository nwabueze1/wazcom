import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useTableStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    borderSpacing: theme.spacing(0, 0.5),
    borderColor: "transparent",
    fontFamily: `${theme.design.font.openSans} !important`,
    position: "relative",
  },
  tHead: {
    background: theme.design.colors.waz_white,
    marginBottom: theme.spacing(0.5),
  },
  tRow: {
    background: theme.design.colors.waz_white,
  },
  tHeadData: {
    padding: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize,
  },
  tRowData: {
    padding: theme.spacing(2),
    fontSize: theme.typography.fontSize,
    height: "auto",
    transition: " height 1s ease-out",

    "&:hover .column-actions": {
      fontSize: theme.typography.fontSize - 2,
      marginTop: theme.spacing(1),
    },
  },
  tableLoader: {
    position: "absolute",
    top: "calc((100% - 15px)/2)",
  },
  tableSeparator: {
    margin: theme.spacing(0, 0, 0.5, 0),
    background: theme.design.colors.waz_white,
  },
  tableRowText: {
    position: "relative",
  },
  tableRowActionsContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  customTable: {
    display: "grid",
  },
  tableFooter: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(1),
    background: theme.design.colors.waz_white,
    "& button:has(.next), & button:has(.prev)": {
      background: "none",
      "&:hover": {
        background: "none",
      },
    },
    "& li > button": {
      padding: 12,
      background: theme.design.colors.waz_brand50.concat(" !important"),
      color: theme.design.colors.waz_brand500.concat(" !important"),
      borderRadius: 0,
    },
    "& nav, & ul, & li:has(.next), & li:has(.prev)": {
      flex: 1,
    },
    "& li:has(.next)": {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  paginationIconButton: {
    flex: 1,
  },
  tableV2: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  tableV2Body: {
    flex: 1,
  },
  tableV2Root: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    position: "relative",
  },
  tableContainer: {
    flex: 1,
    background: theme.design.colors.waz_white,
    display: "flex",
    flexDirection: "column",
  },
}));
