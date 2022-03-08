import makeStyles from "@mui/styles/makeStyles";
export var useTextAreaStyles = makeStyles(function (theme) { return ({
    root: {},
    textarea: {
        borderColor: "rgba(0, 0, 0, 0.23)",
        padding: theme.spacing(1.5),
        fontSize: "1.05rem",
        borderRadius: 4,
        boxSizing: "border-box",
    },
}); });
