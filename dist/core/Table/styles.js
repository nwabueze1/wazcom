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
        background: theme.design.colors.gray90,
    },
    tableHeadCell: {
        fontWeight: theme.typography.fontWeightBold,
        padding: theme.spacing(1.5, 2),
    },
    tableCell: {
        padding: theme.spacing(1.5, 2),
    },
    controls: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(2),
    },
    filterControls: {
        display: "flex",
        gap: "30px",
    },
    filterControlsButton: {
        backgroundColor: theme.design.colors.white,
        color: theme.design.colors.black,
        height: "fit-content",
        width: "100px",
        display: "flex",
        justifyContent: "space-between",
    },
}); });
export var useStyles = makeStyles(function (theme) { return ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}); });
