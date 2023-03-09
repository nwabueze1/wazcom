import makeStyles from "@mui/styles/makeStyles";
export var useCreatePostInputStyles = makeStyles(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(2),
        position: "relative",
        width: "100%",
        border: "1px solid ".concat(theme.design.colors.waz_primary700),
    },
    header: {
        borderBottom: "1px solid ".concat(theme.design.colors.waz_primary700),
        height: theme.spacing(5.75),
        marginBottom: theme.spacing(2.75),
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
    editorError: {
        border: "1px solid ".concat(theme.design.colors.waz_red),
        zIndex: 1,
    },
    createPostInput: {
        marginTop: theme.spacing(2),
    },
    postButtonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    postButton: {
        margin: theme.spacing(0, 0, 0, 0),
        border: "none",
        borderRadius: theme.spacing(0.5),
        background: theme.design.colors.waz_primaryColor100,
        padding: theme.spacing(1, 2, 1, 2),
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize + 2,
    },
    postTitleInputParent: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        margin: theme.spacing(2, 0),
    },
    postTitleInput: {
        height: 34,
        padding: theme.spacing(0, 0, 0, 2),
        background: "".concat(theme.design.colors.waz_white100, " 0% 0% no-repeat padding-box"),
        border: "0px solid ".concat(theme.design.colors.waz_primary700),
        borderRadius: 4,
        outline: "none",
        color: theme.design.colors.grey100,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.fontSize * 2,
        "&:hover": {
            borderColor: theme.design.colors.waz_primary600,
        },
        "&:focus": {
            borderColor: theme.design.colors.waz_primary500,
        },
        "&:hover:focus": {
            borderColor: theme.design.colors.waz_primary500,
        },
        "&::placeHolder": {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.fontSize * 2,
            color: theme.design.colors.grey100,
            opacity: "100%",
        },
    },
}); });
