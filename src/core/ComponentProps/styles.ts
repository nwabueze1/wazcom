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

  th: {
    padding: theme.spacing(3, 2),
    textAlign: "start",
    fontSize: 12,
    color: theme.design.colors.grey,
    width: "20%",
    borderBottomWidth: 0.5,
    borderBottomColor: theme.design.colors.waz_table_border,
    borderBottomStyle: "inset",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  tbody: {
    verticalAlign: "middle",
    borderColor: "inherit",
    display: "table-row-group",
    outline: 0,
  },
}));
