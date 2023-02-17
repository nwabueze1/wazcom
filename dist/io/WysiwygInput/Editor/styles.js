import makeStyles from "@mui/styles/makeStyles";
export var useEditorToolbarStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "relative",
    },
    toolbar: {
        background: theme.design.colors.waz_white,
        flexWrap: "wrap",
        border: "1px solid ".concat(theme.design.colors.waz_primary700, " !important"),
        margin: theme.spacing(0, 2, 0, 2),
        borderRadius: theme.spacing(0.625),
        '& .ql-picker.ql-size': {
            width: theme.spacing(3.75),
        },
        '& .ql-picker.ql-header': {
            width: theme.spacing(6.75)
        },
        '& .ql-formats': {
            fontSize: theme.typography.fontSize - 4
        }
    },
    toolbarItem: {
        borderRight: "1px solid ".concat(theme.design.colors.waz_primary700),
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
        color: theme.design.colors.waz_grey100,
        overflow: "auto",
        height: "100vh",
        position: "relative",
        paddingTop: theme.spacing(4.375),
    },
    floatingBar: {
        position: "absolute",
        zIndex: 2,
    },
    quillEditor: {
        "& .ql-container": {
            border: "0px solid ".concat(theme.design.colors.waz_primary700, " !important"),
        },
        "& .ql-editor .ql-video": {
            width: "80%",
            height: theme.spacing(37.5),
        },
        "& .ql-editor": {
            paddingLeft: theme.spacing(2),
        },
    },
}); });
