import makeStyles from "@mui/styles/makeStyles";
export var useSelectStyles = makeStyles(function (theme) { return ({
    root: {
        borderRadius: theme.spacing(1),
        fontSize: "16px",
        color: theme.design.colors.waz_greyColor400,
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    label: {
        display: "flex",
        alignItems: "center",
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
    select: {
        width: "100%",
    },
    menuItem: {
        "& .MuiButtonBase-root": {
            "&:hover": {
                background: "none",
            },
        },
    },
}); });
