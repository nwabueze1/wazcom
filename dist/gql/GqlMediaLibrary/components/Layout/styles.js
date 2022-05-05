import makeStyles from "@mui/styles/makeStyles";
export var useLayoutStyles = makeStyles(function (theme) { return ({
    root: {
        height: 38,
        display: "flex",
        padding: theme.spacing(0, 2),
        justifyContent: "center",
        alignItems: "center",
        gap: "2px",
        cursor: "pointer",
        border: "1px solid ".concat(theme.design.colors.grey5),
    },
    innerBox: {
        width: 12,
        height: 12,
        background: theme.design.colors.grey1,
    },
}); });
