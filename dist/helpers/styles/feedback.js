import makeStyles from "@mui/styles/makeStyles";
export var useFeedbackStyles = makeStyles(function (theme) { return ({
    feedback: {
        marginTop: 8,
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
    error: {
        border: "2px solid ".concat(theme.design.colors.dangerColor100),
    },
}); });
