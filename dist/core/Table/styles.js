import makeStyles from "@mui/styles/makeStyles";
export var useTableStyles = makeStyles(function (theme) { return ({
    root: {},
    tableRoot: {
        position: "relative",
    },
    filterActive: {
        overflow: "hidden",
    },
    tableHead: {
        background: theme.design.colors.whiteColor200,
    },
    tableHeadCell: {
        fontWeight: theme.typography.fontWeightBold,
        padding: theme.spacing(1.5, 2),
        fontSize: theme.typography.fontSize + 4,
        color: theme.design.colors.grey1,
    },
    tableCell: {
        padding: theme.spacing(1.5, 2),
        fontSize: theme.typography.fontSize + 4,
    },
    controls: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(2),
    },
    filterControls: {
        display: "flex",
        gap: theme.spacing(4),
    },
    imageContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: theme.spacing(5),
    },
    img: {
        width: "120px",
        height: "94px",
    },
    rightControls: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
    },
    empty: {
        minHeight: 400,
    },
    tableContainer: {
        boxShadow: "none",
        border: "1px solid ".concat(theme.design.colors.grey5),
    },
}); });
export var useStyles = makeStyles(function (theme) { return ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}); });
