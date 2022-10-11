import makeStyles from "@mui/styles/makeStyles";
import theme from "theme";
export var useDisplayInputStyles = makeStyles(function () { return ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        margin: theme.spacing(2, 0),
    },
    inputIcon: {
        fontSize: theme.typography.fontSize + 18,
        color: theme.design.colors.waz_primaryColor100,
        cursor: "pointer",
    },
    inputControl: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputText: {
        paddingLeft: theme.spacing(1),
    },
}); });
