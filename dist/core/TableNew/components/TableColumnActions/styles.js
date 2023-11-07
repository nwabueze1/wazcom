import makeStyles from "@mui/styles/makeStyles";
export var useTableColumnActionsStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        fontSize: 0,
        marginTop: theme.spacing(0),
        position: "relative",
        height: 0,
        color: theme.design.colors.waz_black,
    },
    action: {
        cursor: "pointer",
        margin: 0,
    },
    actionSeparator: {
        margin: theme.spacing(0, 0.5),
    },
}); });
