import makeStyles from '@mui/styles/makeStyles';
export var useToggleStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    label: {
        color: theme.design.colors.black,
    },
    addon: {
        width: "30%",
        background: "#EFEDED",
        border: "1px solid #BEBEBE",
    },
    inputControl: {
        display: "flex",
    },
    helperText: {
        color: theme.design.colors.black,
    },
    toggle: {
        marginTop: theme.spacing(1),
    },
}); });
