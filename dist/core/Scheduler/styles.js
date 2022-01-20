import makeStyles from '@mui/styles/makeStyles';
export var useSchedulerStyles = makeStyles(function (theme) { return ({
    button: {
        background: theme.design.colors.red70,
        width: "200px",
        borderColor: theme.design.colors.white,
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        borderRadius: "8px",
        color: " #ADADAD",
        cursor: "pointer",
    },
    tableContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: theme.spacing(1, 0),
    },
    buttonText: {
        margin: "0",
        color: theme.design.colors.white,
    },
    addIcon: {
        color: theme.design.colors.white,
        fontSize: 22,
    }
}); });
