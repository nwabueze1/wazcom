import makeStyles from "@mui/styles/makeStyles";
export var useRichInputStyles = makeStyles(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(2),
    },
    label: {
        marginBottom: theme.spacing(1),
        fontSize: "1rem",
        color: theme.design.colors.black,
    },
    editor: {
        border: "1px solid red",
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
