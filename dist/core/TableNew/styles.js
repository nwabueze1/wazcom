import makeStyles from "@mui/styles/makeStyles";
export var useTableStyles = makeStyles(function (theme) { return ({
    root: {
        width: '100%',
        borderSpacing: theme.spacing(0, 0.5),
        borderColor: "transparent",
        fontFamily: theme.design.font.openSans,
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
    },
    tRowData: {
        padding: theme.spacing(2),
    },
    tableLoader: {
        position: 'absolute',
        top: "calc((100% - 15px)/2)",
    },
    tableSeparator: {
        margin: theme.spacing(0, 0, 0.5, 0),
        background: theme.design.colors.waz_white,
        height: 15,
    }
}); });
