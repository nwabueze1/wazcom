import makeStyles from "@mui/styles/makeStyles";
export var useSelectStyles = makeStyles(function (theme) { return ({
    root: {
        borderRadius: theme.spacing(1),
        fontSize: "16px",
        color: theme.design.colors.greyColor400,
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    required: {
        color: theme.design.colors.dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
    select: {
        width: "100%",
    },
}); });
