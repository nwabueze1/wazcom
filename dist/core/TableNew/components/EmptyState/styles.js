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
        "&.v2": {
            fontFamily: theme.design.font.tomatoGrotesk,
            fontSize: theme.typography.fontSize + 8,
            color: "#001A24",
        },
    },
    emptyMessage: {
        fontSize: theme.typography.fontSize + 2,
        color: theme.design.colors.grey100,
        margin: theme.spacing(1.5, 0, 0, 0),
        "&.v2": {
            fontFamily: theme.design.font.tomatoGrotesk,
            color: theme.design.colors.waz_brand600,
        },
    },
    emptyMessagePadded: {
        margin: theme.spacing(2, 0, 0, 0),
    },
}); });
