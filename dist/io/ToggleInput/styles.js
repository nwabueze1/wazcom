import makeStyles from "@mui/styles/makeStyles";
export var useToggleStyles = makeStyles(function (theme) { return ({
    root: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        "& .feedback": {
            marginTop: "".concat(theme.spacing(0.5), " !important"),
        },
    },
    switch: {
        position: "relative",
        display: "inline-block",
        width: theme.spacing(4),
        height: theme.spacing(2),
        "& input:checked ~ .slider": {
            backgroundColor: theme.design.colors.waz_primary100,
        },
        "& input:disabled ~ .slider": {
            opacity: 0.4,
        },
        "& input:checked ~ .slider:before": {
            transform: "translateX(".concat(theme.spacing(2), ")"),
        },
    },
    labelStyle: {
        fontSize: theme.typography.fontSize - 2,
        display: "flex",
        marginBottom: theme.spacing(0.5),
        color: theme.design.colors.waz_grey,
        alignItems: "center",
        textTransform: "uppercase",
    },
    input: {
        position: "absolute",
        opacity: "0",
        cursor: "pointer",
        height: "0",
        width: "0",
    },
    helperText: {
        fontSize: theme.typography.fontSize - 2,
        marginTop: theme.spacing(0.5),
    },
    slider: {
        position: "absolute",
        cursor: "pointer",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: theme.spacing(4),
        transition: ".4s",
        backgroundColor: theme.design.colors.grey300,
        "&:before": {
            content: "''",
            position: "absolute",
            height: theme.spacing(2),
            width: theme.spacing(2),
            left: 0,
            bottom: 0,
            backgroundColor: theme.design.colors.waz_white,
            transition: ".4s",
            borderRadius: "50%",
        },
    },
}); });
