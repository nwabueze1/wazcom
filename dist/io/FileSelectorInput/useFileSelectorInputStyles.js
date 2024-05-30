import makeStyles from "@mui/styles/makeStyles";
export var useFileSelectorInputStyles = makeStyles(function (theme) { return ({
    root: {
        position: "relative",
    },
    selectButton: {
        background: theme.design.colors.waz_white,
        border: "1px solid ".concat(theme.design.colors.waz_primary600),
        cursor: "pointer",
        padding: theme.spacing(1, 2),
        color: theme.design.colors.grey100,
        fontSize: theme.typography.fontSize,
        fontFamily: "inherit",
        outline: "none",
        borderRadius: 4,
        "&:hover, &.active": {
            borderColor: theme.design.colors.waz_primary400,
            color: theme.design.colors.waz_primary600,
        },
        "&.active": {
            cursor: "auto",
        },
    },
    selectInput: {
        display: "none",
    },
    button: {
        marginTop: theme.spacing(0.5),
        fontFamily: "inherit",
        height: 25,
        fontSize: theme.typography.fontSize - 2,
        padding: theme.spacing(0, 2.5),
        width: "auto",
    },
    errorContainer: {
        borderColor: theme.design.colors.error,
    },
    helperTextError: {
        color: theme.design.colors.error,
        display: "block",
        margin: theme.spacing(0.5),
        fontFamily: "inherit",
        fontSize: theme.typography.fontSize,
    },
    label: {
        fontSize: theme.typography.fontSize - 2,
        textTransform: "uppercase",
        fontFamily: "inherit",
        marginBottom: theme.spacing(1.2),
        display: "block",
    },
    selectedFileName: {
        fontSize: theme.typography.fontSize,
    },
    fileNameContainer: {
        display: "flex",
        gap: theme.spacing(1),
        alignItems: "center",
    },
}); });
