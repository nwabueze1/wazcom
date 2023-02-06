import makeStyles from "@mui/styles/makeStyles";
export var useTableStyles = makeStyles(function (theme) { return ({
    titleContainer: {
        display: 'flex',
        gap: theme.spacing(2),
        color: 'grey',
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightBold,
    }
}); });
