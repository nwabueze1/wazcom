import makeStyles from "@mui/styles/makeStyles";
export var useComboBoxStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: theme.spacing(2),
    },
    label: {
        marginBottom: theme.spacing(1),
        fontSize: "1rem",
    },
    helperText: {
        marginTop: theme.spacing(2),
        fontSize: theme.typography.fontSize,
    },
    feedback: {
        marginTop: 16,
    },
    feedbackSuccess: {
        color: "green",
    },
    feedbackError: {
        color: "red",
    },
    feedbackNeutral: {
        color: "black",
    },
}); });
