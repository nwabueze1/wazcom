import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
export const useComponentPropsCStyles = makeStyles((theme: Theme) => ({
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
    padding: theme.spacing(2),
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

export const useTextFieldStyles = makeStyles((theme: Theme) => ({
  root: {
    borderColor: theme.design.colors.waz_primary500,
  },
}));
