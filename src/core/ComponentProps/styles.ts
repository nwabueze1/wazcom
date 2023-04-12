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
  tableRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  tableCell: {
    width: "20%",
  },
}));
