import makeStyles from "@mui/styles/makeStyles";
export var useFeedbackStyles = makeStyles(function (theme) { return ({
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
    error: {
        border: "2px solid ".concat(theme.design.colors.waz_dangerColor100),
    },
}); });
