import makeStyles from '@mui/styles/makeStyles';
export var useTextStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 15,
        position: "relative"
    },
    label: {
        marginBottom: theme.spacing(1),
        fontSize: "1rem",
    },
}); });
