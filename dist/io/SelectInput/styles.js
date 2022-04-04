import makeStyles from "@mui/styles/makeStyles";
export var useSelectStyles = makeStyles(function (theme) { return ({
    root: {
        borderRadius: theme.spacing(1),
        fontSize: "16px",
        color: theme.design.colors.greyColor400,
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    select: {
        width: "100%",
        padding: theme.spacing(0.5, 2),
    },
}); });
