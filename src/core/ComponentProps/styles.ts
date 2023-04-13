import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const useComponentPropsStyles = makeStyles((theme: Theme) => ({
  tableContainer: {
    width: "100%",
  },
  tableHeading: {
    textTransform: "capitalize",
  },
  table: {
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    minWidth: "650px",
  },
  thead: {
    display: "table-header-group",
  },
  tbody: {
    verticalAlign: "middle",
    borderColor: "inherit",
    display: "table-row-group",
    outline: 0,
  },
  title: {
    marginLeft: theme.spacing(3),
    marginBottom: 0,
  },
  tr: {
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    borderBottomWidth: theme.spacing(0.1),
    borderBottomColor: theme.design.colors.waz_table_border,
    borderBottomStyle: "inset",
    "&:last-of-type": {
      borderBottomWidth: 0,
    },
  },
  th: {
    padding: theme.spacing(1, 3),
    textAlign: "start",
    fontSize: theme.typography.fontSize,
    color: theme.design.colors.grey,
    width: "25%",
    borderBottomWidth: 0.5,
    borderBottomColor: theme.design.colors.waz_table_border,
    borderBottomStyle: "inset",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  td: {
    display: "table-cell",
    borderBottomColor: theme.design.colors.waz_table_border,
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.fontSize - 1,
    width: "20%",
    color: theme.design.colors.grey,
  },
  tbutton: {
    borderColor: theme.design.colors.waz_primary600,
    fontSize: theme.typography.fontSize - 2,
    height: 25,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      borderColor: theme.design.colors.waz_primary700,
      borderWidth: 2,
    },
    marginRight: theme.spacing(1),
    maxWidth: 75,
  },
  buttonIcon: {
    fontSize: theme.typography.fontSize + 1,
    color: theme.design.colors.grey,
  },
}));
