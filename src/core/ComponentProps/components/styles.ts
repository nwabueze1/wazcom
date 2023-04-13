import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
export const usePropButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "white",
    padding: theme.spacing(0.5, 3),
    border: "1px solid #CEE3D4",

    textTransform: "capitalize",
    display: "inline-block",
    marginRight: 5,
  },
  innerContent: {
    display: "flex",
    alignItems: "center",
    fontSize: 10,
    color: "#343E37",
    // margin: theme.spacing(0, 2),
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
  tableContent: {
    padding: theme.spacing(16),
    textAlign: "left",
  },
  tableHeader: {
    fontWeight: "bold",
    backgroundColor: theme.design.colors.white200,
  },
  tableData: {
    borderBottomWidth: 1,
    borderBottomColor: theme.design.colors.grey,
    borderStyle: "solid",
  },

  tableRow: {
    borderBottomWidth: 1,
    borderBottomColor: theme.design.colors.grey,
    borderStyle: "solid",
  },
}));

export const useTextFieldStyles = makeStyles((theme: Theme) => ({
  root: {
    borderColor: theme.design.colors.waz_primary500,
  },
}));
