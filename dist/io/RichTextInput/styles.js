import makeStyles from "@mui/styles/makeStyles";
export var useRichInputStyles = makeStyles(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(2),
        position: "relative",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
    editor: {
        zIndex: 1,
    },
    editorError: {
        border: "1px solid red",
        zIndex: 1,
    },
}); });
