import makeStyles from "@mui/styles/makeStyles";
export var useTextAreaStyles = makeStyles(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(2),
    },
    textarea: {
        borderColor: "rgba(0, 0, 0, 0.23)",
        padding: theme.spacing(1.5),
        borderRadius: 4,
        boxSizing: "border-box",
        width: "100%",
        "&:focus": {
            borderColor: theme.design.colors.waz_primaryColor100,
            outline: theme.design.colors.waz_primaryColor100
        },
        "&:hover": {
            borderColor: theme.design.colors.waz_primaryColor100,
            outline: theme.design.colors.waz_primaryColor100
        },
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
    error: {
        border: "1px solid ".concat(theme.design.colors.waz_dangerColor100),
    },
}); });
