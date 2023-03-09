import makeStyles from "@mui/styles/makeStyles";
export var useEditorStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
    },
    wordCount: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        fontSize: theme.typography.fontSize * 0.83,
        background: theme.design.colors.waz_white,
        border: "1px solid ".concat(theme.design.colors.primary700),
        padding: theme.spacing(0.75, 2, 0.75, 0),
        height: theme.spacing(3.375),
        position: "absolute",
        bottom: "0",
        right: "0",
        width: "100%",
    },
    editor: {
        color: theme.design.colors.waz_grey1,
        fontSize: theme.typography.fontSize + 2,
        overflow: "auto",
        height: "100vh",
        position: "relative",
    },
    quillEditor: {
        "& img": {
            position: "relative",
            left: "20%",
            width: "60%",
            height: 400,
            objectFit: "cover",
        },
        "& .ql-container": {
            border: "0px solid ".concat(theme.design.colors.waz_primary700, " !important"),
        },
        "& .ql-editor .ql-video": {
            position: "relative",
            left: "20%",
            width: "60%",
            height: 400,
        },
        "& .ql-editor": {
            paddingLeft: theme.spacing(2),
        },
    },
}); });
