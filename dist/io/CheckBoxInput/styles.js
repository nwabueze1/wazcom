import makeStyles from "@mui/styles/makeStyles";
export var useCheckboxInputStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    label: {
        marginBottom: theme.spacing(1),
        fontSize: "1rem",
    },
}); });
