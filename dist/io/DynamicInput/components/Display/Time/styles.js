import makeStyles from "@mui/styles/makeStyles";
export var useTimeStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-between",
        margin: theme.spacing(2, 0),
        borderBottom: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
        paddingBottom: theme.spacing(0.5),
        width: "fit-content",
    },
    timeIcon: {
        fontSize: 25,
        color: theme.design.colors.waz_greyColor500,
        cursor: "pointer",
    },
    timeText: {
        fontSize: 16,
        color: theme.design.colors.waz_greyColor500,
        cursor: "pointer",
        paddingRight: theme.spacing(7),
    },
}); });
