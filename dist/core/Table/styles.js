import makeStyles from "@mui/styles/makeStyles";
export var useTableStyles = makeStyles(function (theme) { return ({
    root: {},
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
}); });
