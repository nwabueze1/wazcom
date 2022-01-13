import makeStyles from "@mui/styles/makeStyles";
export var useSelectStyles = makeStyles(function (theme) { return ({
    root: {
        borderRadius: theme.spacing(1),
        fontSize: "16px",
        color: theme.design.colors.grey,
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    select: {
        width: "100%",
        padding: theme.spacing(0.5, 2),
    },
    feedback: {
        color: "#EA3C53",
        marginTop: theme.spacing(2),
    },
}); });
