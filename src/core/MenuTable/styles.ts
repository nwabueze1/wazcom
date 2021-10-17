import { Theme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

export const MenuTableStyles = makeStyles((theme: Theme) => ({
  deleteIcon: {
    color: theme.design.colors.red70,
    marginLeft: theme.spacing(2.4),
  },
  table: {
    minWidth: 700,
  },
  active: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing(3),
  },
}));
