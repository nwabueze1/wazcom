import makeStyles from "@mui/styles/makeStyles";
export var useButtonStyles = makeStyles(function (theme) { return ({
    root: {
        position: "relative",
    },
    button: {
        textTransform: "capitalize",
        color: theme.design.colors.white,
        backgroundColor: theme.design.colors.red70,
        fontSize: theme.typography.fontSize,
        fontFamily: theme.typography.fontFamily,
    },
    sizeSmall: {
    // padding: `${theme.spacing(1.6)} ${theme.spacing(8.12)}`,
    },
    sizeLarge: {
        padding: "".concat(theme.spacing(0.5), " ").concat(theme.spacing(2.5)),
    },
    loader: {
        position: "absolute",
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.design.colors.white,
        zIndex: 5,
        opacity: 1,
        background: theme.design.colors.red70,
    }
}); });
