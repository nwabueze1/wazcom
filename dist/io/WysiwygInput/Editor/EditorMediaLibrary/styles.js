import makeStyles from "@mui/styles/makeStyles";
export var useEditorMediaLibStyles = makeStyles(function (theme) { return ({
    mediaLibraryWrapper: {
        zIndex: 15,
        height: "70%",
        width: "70%",
        margin: theme.spacing(0, "auto"),
        marginTop: theme.spacing(12),
    },
    mediaLibraryDialog: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
    }
}); });
