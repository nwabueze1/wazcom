import makeStyles from '@mui/styles/makeStyles';
export var useSchedulerStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    label: {
        marginBottom: theme.spacing(1),
        fontSize: "1rem",
    },
    button: {
        width: "fit-content",
        background: theme.design.colors.red70,
        borderColor: theme.design.colors.white,
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: theme.typography.fontSize + 1,
        borderRadius: "8px",
        color: " #ADADAD",
        cursor: "pointer",
    },
    buttonText: {
        margin: "0",
        color: theme.design.colors.white,
    },
    addIcon: {
        color: theme.design.colors.white,
        marginRight: theme.spacing(1),
    },
}); });
