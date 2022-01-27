import makeStyles from '@mui/styles/makeStyles';
export var useTextStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 15,
        zIndex: -1,
        position: "relative"
    },
    label: {
        marginBottom: theme.spacing(1),
        fontSize: "1rem",
    },
    feedback: {
        marginTop: 16,
    },
    feedbackSuccess: {
        color: 'green',
    },
    feedbackError: {
        color: 'red'
    },
    feedbackNeutral: {
        color: 'black',
    }
}); });
