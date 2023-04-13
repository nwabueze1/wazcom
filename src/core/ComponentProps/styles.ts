import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
export const usePropsTableStyles = makeStyles((theme: Theme) => ({
  tableContainer: {
    background: theme.design.background.waz_primaryWhite,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.design.colors.waz_grey300,
    borderRadius: 3,
    padding: theme.spacing(1, 0),
    minHeight: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(3),
    maxWidth: "1147px",
    marginTop: theme.spacing(3),
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
  tr: {
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    borderBottomWidth: 0.5,
    borderBottomColor: theme.design.colors.waz_table_border,
    borderBottomStyle: "inset",
    "&:last-of-type": {
      borderBottomWidth: 0,
    },
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
  td: {
    display: "table-cell",
    borderBottomColor: theme.design.colors.waz_table_border,
    padding: theme.spacing(2.5),
    fontSize: 11,
    width: "20%",
    color: theme.design.colors.grey,
  },

  tbutton: {
    borderColor: theme.design.colors.waz_primary600,
    fontSize: 10,
    height: 25,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      borderColor: theme.design.colors.waz_primary700,
      borderWidth: 2,
    },
    marginRight: 3,
    maxWidth: 75,
  },
  buttonIcon: {
    fontSize: 13,
    color: theme.design.colors.grey,
  },
  buttonContainer: {
    display: "flex",
  },
}));
