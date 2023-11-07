import { makeStyles } from "@mui/styles";
export var usePluginFormStyles = makeStyles(function (theme) { return ({
    root: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: theme.spacing(1.5),
    },
    submitButton: {
        display: "none",
    },
    error: {
        color: "".concat(theme.palette.error.light, " !important"),
        marginTop: theme.spacing(1),
    },
    success: {
        color: "".concat(theme.palette.success.main, " !important"),
        marginTop: theme.spacing(1),
    },
}); });
