import makeStyles from "@mui/styles/makeStyles";
export var useButtonStyles = makeStyles(function (theme) { return ({
    root: {
        padding: "16px 80px",
        textTransform: "capitalize",
        color: theme.design.colors.white,
        backgroundColor: theme.design.colors.red70,
        fontSize: theme.typography.fontSize,
        fontFamily: theme.typography.fontFamily,
        "&:hover": {
            color: theme.design.colors.white,
            backgroundColor: theme.design.colors.red90,
        },
    },
    sizeSmall: {
        padding: theme.spacing(1.6) + " " + theme.spacing(8.12),
    },
    sizeLarge: {
        padding: theme.spacing(2.5) + " " + theme.spacing(12.5),
    },
}); });
