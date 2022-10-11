import makeStyles from "@mui/styles/makeStyles";
export var useOutputStyles = makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        height: "100%",
    },
    title: {
        width: "100%",
        padding: theme.spacing(1),
        borderBottom: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    outputIcon: {
        paddingRight: theme.spacing(1),
        fontSize: theme.typography.fontSize + 16,
    },
    outputRequired: {
        color: theme.design.colors.waz_dangerColor200,
        marginLeft: theme.spacing(0.5),
    },
    outputNumberInput: {
        margin: theme.spacing(0, 0.5),
        width: 50,
        borderBottom: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
    },
    outputQuestionContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    outputPoints: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(2, 0),
    },
    outputTextInput: {
        color: theme.design.colors.waz_primaryColor100,
        width: 50,
        border: 0,
        "& div::before": {
            border: 0,
        },
        "& div::after": {
            border: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
        },
        "& div:hover:not(.Mui-disabled):before": {
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    },
    outputDone: {
        paddingTop: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    outputOverAllContainer: {
        padding: theme.spacing(0, 2),
    },
    outputAnswer: {
        paddingBottom: theme.spacing(1),
    },
}); });
