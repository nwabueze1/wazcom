import makeStyles from "@mui/styles/makeStyles";
export var useTableStyles = makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        borderSpacing: theme.spacing(0, 0.5),
        borderColor: "transparent",
        fontFamily: "".concat(theme.design.font.openSans, " !important"),
        position: "relative",
    },
    tHead: {
        background: theme.design.colors.waz_white,
        marginBottom: theme.spacing(0.5),
    },
    tRow: {
        background: theme.design.colors.waz_white,
    },
    tHeadData: {
        padding: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.fontSize,
    },
    tRowData: {
        padding: theme.spacing(2),
        fontSize: theme.typography.fontSize,
        height: "auto",
        transition: " height 1s ease-out",
        "&:hover .column-actions": {
            fontSize: theme.typography.fontSize - 2,
            // height: "fit-content",
            // transition: "all 0.2s ease-in",
            marginTop: theme.spacing(1),
        },
    },
    tableLoader: {
        position: "absolute",
        top: "calc((100% - 15px)/2)",
    },
    tableSeparator: {
        margin: theme.spacing(0, 0, 0.5, 0),
        background: theme.design.colors.waz_white,
    },
}); });
