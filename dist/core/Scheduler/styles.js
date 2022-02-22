import makeStyles from "@mui/styles/makeStyles";
export var useSchedulerStyles = makeStyles(function (theme) { return ({
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
    button: {
        display: "flex",
        alignItems: "center",
        margin: theme.spacing(2, 0, 0, 0),
        cursor: "pointer",
        textDecoration: "underline",
    },
    buttonText: {
        margin: "0",
    },
    addIcon: {
        marginRight: theme.spacing(1),
    },
}); });
