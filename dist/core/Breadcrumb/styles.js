import { makeStyles } from "@material-ui/core/styles";
import theme from "../../theme";
/** !!-- Remember to update the function name !! */
export var BreadCrumbStyles = makeStyles(function () { return ({
    root: {
        fontFamily: theme.typography.fontFamily,
        display: "flex",
    },
    link: {
        display: "flex",
        fontWeight: "bold",
        textDecoration: "None",
        color: theme.design.colors.grey80,
    },
    navIcon: {
        paddingTop: theme.spacing(0.25),
    },
    lastCrumb: {
        color: theme.design.colors.red,
    },
}); });
