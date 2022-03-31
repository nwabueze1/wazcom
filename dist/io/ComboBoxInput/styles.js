import makeStyles from "@mui/styles/makeStyles";
export var useComboBoxStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: theme.spacing(2),
    },
    helperText: {
        marginTop: theme.spacing(2),
        fontSize: theme.typography.fontSize,
    },
}); });
