import makeStyles from "@mui/styles/makeStyles";
export var useEmptyStateStyles = makeStyles(function (theme) { return ({
    root: {
        position: "relative",
        top: -4,
        background: theme.design.colors.waz_white,
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(6, 0),
        width: "100%",
        minHeight: "45vh",
    },
    emptyContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    emptyHeading: {
        margin: theme.spacing(2, 0, 0, 0),
        fontSize: theme.typography.fontSize * 2,
        color: theme.design.colors.black200,
        fontWeight: theme.typography.fontWeightBold,
        fontFamily: theme.design.font.openSans,
    },
    emptyMessage: {
        fontSize: theme.typography.fontSize + 2,
        color: theme.design.colors.grey100,
        margin: theme.spacing(1.5, 0, 0, 0),
    },
    emptyMessagePadded: {
        margin: theme.spacing(2, 0, 0, 0),
    },
}); });
