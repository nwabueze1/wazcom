import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

/** !!-- Remember to update the function name !! */
export const BreadCrumbStyles = makeStyles((theme: BaseTheme) => ({
  root: {
    display: "flex",
    fontFamily: theme.typography.fontFamily,
  },
  link: {
    display: "flex",
    textDecoration: "none",
    color: theme.design.colors.greyColor200
    ,
    cursor: "pointer",
  },
  navIcon: {
    paddingTop: theme.spacing(0.25),
  },
  lastCrumb: {
    color: theme.design.colors.dangerColor,
  },
}));
