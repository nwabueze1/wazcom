import { Theme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';

/** !!-- Remember to update the function name !! */
export const BreadCrumbStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    fontFamily: theme.typography.fontFamily,
  },
  link: {
    display: "flex",
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: "none",
    color: theme.design.colors.grey80,
  },
  navIcon: {
    paddingTop: theme.spacing(0.25),
  },
  lastCrumb: {
    color: theme.design.colors.red,
  },
}));
