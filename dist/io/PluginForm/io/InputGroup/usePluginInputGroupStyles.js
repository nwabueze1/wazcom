import { makeStyles } from "@mui/styles";
export var usePluginInputGroup = makeStyles(function (theme) { return ({
    errorMessage: {
        display: "block",
        marginTop: theme.spacing(0.5),
        fontSize: theme.typography.fontSize - 2,
        color: theme.design.colors.error,
    },
    fieldSet: {
        margin: 0,
        borderRadius: 4,
        border: "1px solid ".concat(theme.design.colors.waz_primary700),
        "&.error": {
            borderColor: theme.design.colors.error,
        },
    },
    legend: {
        color: theme.design.colors.waz_grey,
        marginTop: theme.spacing(0.5),
        fontSize: theme.typography.fontSize,
        textTransform: "uppercase",
    },
    radioButton: {
        accentColor: theme.design.colors.waz_primary500,
        height: 16,
        width: 16,
    },
    radioLabel: {
        fontSize: theme.typography.fontSize,
        fontFamily: "inherit",
        marginRight: theme.spacing(1),
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        marginBottom: 0,
    },
    root: { display: "flex", flexDirection: "column" },
    textField: {
        display: "flex",
        padding: theme.spacing(1.2, 1.4),
        height: "auto",
        width: "100%",
        background: theme.design.colors.white100,
        color: theme.design.colors.waz_primaryBlack,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 4,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize,
        fontFamily: "inherit",
        borderColor: theme.design.colors.waz_primary700,
        "&:hover": {
            borderColor: theme.design.colors.waz_primary500,
        },
        "&:focus, &:hover:focus, &:active": {
            borderColor: theme.design.colors.waz_primary400,
        },
        "&.error": {
            borderColor: theme.design.colors.error,
        },
    },
    textFieldContainer: {
        display: "flex",
        width: "100%",
    },
    phoneContainerClass: {
        width: "100%",
        display: "flex",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 4,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.fontSize,
        borderColor: theme.design.colors.waz_primary700,
        border: 0,
        "&:hover": {
            borderColor: theme.design.colors.waz_primary500,
        },
        "&:focus, &:hover:focus, &:active": {
            borderColor: theme.design.colors.waz_primary400,
        },
        "&.error": {
            borderColor: theme.design.colors.error,
        },
        boxShadow: "none",
    },
    phoneInput: {
        flex: 1,
        border: 0,
    },
    checkBoxRoot: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
    },
}); });
