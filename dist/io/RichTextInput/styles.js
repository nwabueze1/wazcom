import makeStyles from "@mui/styles/makeStyles";
export var useRichInputStyles = makeStyles(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(2),
    },
    required: {
        color: theme.design.colors.dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
    editor: {},
    editorError: {
        border: "1px solid red",
    },
}); });
