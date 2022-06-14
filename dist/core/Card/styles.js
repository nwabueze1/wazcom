import makeStyles from "@mui/styles/makeStyles";
export var useCardStyles = makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    leftAlign: {
        textAlign: "left",
        alignItems: "left",
    },
    centerAlign: {
        textAlign: "center",
        alignItems: "center",
    },
    rightAlign: {
        textAlign: "right",
        alignItems: "right",
    },
    regtext: {
        color: theme.design.colors.waz_dangerColor300,
        fontWeight: "bold",
        fontSize: theme.typography.fontSize,
        margin: theme.spacing(2, 0),
    },
    text: {
        textAlign: "justify",
        padding: theme.spacing(0, 2),
        fontSize: theme.typography.fontSize,
    },
}); });
