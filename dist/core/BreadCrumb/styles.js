import makeStyles from "@mui/styles/makeStyles";
/** !!-- Remember to update the function name !! */
export var BreadCrumbStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        fontFamily: theme.typography.fontFamily,
    },
    link: {
        display: "flex",
        textDecoration: "none",
        color: theme.design.colors.waz_greyColor200,
        cursor: "pointer",
    },
    navIcon: {
        paddingTop: theme.spacing(0.25),
    },
    lastCrumb: {
        color: theme.design.colors.waz_dangerColor,
    },
}); });
