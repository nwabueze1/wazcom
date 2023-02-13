import makeStyles from "@mui/styles/makeStyles";
export var useToggleStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
        color: theme.design.colors.waz_black,
    },
    toggle: {
        color: theme.design.colors.waz_successColor,
        marginTop: theme.spacing(1),
        "& 	.Mui-checked": {
            color: theme.design.colors.waz_white,
            "& + .MuiSwitch-track": {
                backgroundColor: theme.design.colors.waz_primaryColor100,
                opacity: 1,
                border: 0,
            },
        },
    },
}); });
