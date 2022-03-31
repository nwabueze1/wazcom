import makeStyles from "@mui/styles/makeStyles";
export var useRichInputStyles = makeStyles(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(2),
    },
    editor: {},
    editorError: {
        border: "1px solid red",
    },
}); });
