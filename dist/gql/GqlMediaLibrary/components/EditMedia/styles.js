import makeStyles from "@mui/styles/makeStyles";
export var useEditMediaStyles = makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(3),
        height: 480,
        // marginBottom: theme.spacing(1),
    },
    image: {
        width: "60%",
        height: "100%",
        objectFit: "cover",
    },
    tab: {
        color: theme.design.colors.red70,
        paddingBottom: 2,
        borderBottom: "2px solid ".concat(theme.design.colors.red70),
        width: "fit-content",
        marginBottom: theme.spacing(3),
    },
    form: {
        width: "calc(40% - 24px)",
    },
    formControl: {
        marginBottom: theme.spacing(3),
    },
    formButtons: {
        display: "flex",
        gap: theme.spacing(3),
    },
}); });
