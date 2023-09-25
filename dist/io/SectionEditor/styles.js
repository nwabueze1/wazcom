import makeStyles from "@mui/styles/makeStyles";
export var useSectionEditorStyles = makeStyles(function (theme) { return ({
    root: {
        borderRadius: theme.spacing(1),
        fontSize: "16px",
        color: theme.design.colors.waz_greyColor400,
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    sectionTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: theme.spacing(1),
    },
    editableTextInput: {
        width: "65%",
    },
    selectInputContainer: {
        width: "33%",
        maxHeight: 50,
        margin: 0,
        "& div": {
            padding: 0,
            minHeight: 40,
        },
        "& fieldset": {
            border: "1px solid ".concat(theme.design.colors.waz_primaryColor100, " !important"),
        },
    },
    questionContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "50%",
    },
    questionSection: {
        width: "100%",
        borderTop: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: theme.spacing(2),
        marginTop: theme.spacing(5),
    },
    questionIcon: {
        marginRight: theme.spacing(1),
    },
    questionButton: {
        color: theme.design.colors.waz_primaryColor100,
        borderColor: theme.design.colors.waz_primaryColor100,
        "&:hover": {
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    },
    questionPoint: {
        fontSize: 16,
        marginLeft: theme.spacing(1),
    },
    questionOptionContiner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: theme.spacing(1),
    },
    questionOptionIcon: {
        marginLeft: theme.spacing(4),
        color: theme.design.colors.waz_greyColor600,
        fontSize: 22,
        cursor: "pointer",
    },
}); });
