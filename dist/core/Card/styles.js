import makeStyles from '@mui/styles/makeStyles';
export var useCardStyles = makeStyles(function (theme) { return ({
    root: {
        width: "384px",
        height: "480px",
        padding: theme.spacing(1, 1),
        textAlign: "center",
        borderRadius: theme.spacing(1),
    },
    regtext: {
        color: theme.design.colors.sunRed,
        fontWeight: "bold",
        fontSize: theme.typography.fontSize,
        margin: theme.spacing(2, 0),
    },
    text: {
        textAlign: "justify",
        padding: theme.spacing(0, 2),
        fontSize: theme.typography.fontSize,
    },
}); });
