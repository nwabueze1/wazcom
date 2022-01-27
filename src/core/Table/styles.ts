import { Theme } from "@mui/material/styles";

import makeStyles from "@mui/styles/makeStyles";

export const useTableStyles = makeStyles((theme: Theme) => ({
  root: {},
  tableHead: {
    background: theme.design.colors.gray90,
  },
  tableHeadCell: {
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(1.5, 2),
  },
  tableCell: {
    padding: theme.spacing(1.5, 2),
  },
}));
