import makeStyles from "@mui/styles/makeStyles";
import theme from "theme";
export var useDisplayInputStyles = makeStyles(function () { return ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        margin: theme.spacing(2, 0),
    },
    newRoot: {
        width: "100%",
        height: "100%",
    },
    displayIcon: {
        fontSize: 30,
        color: theme.design.colors.waz_greyColor500,
        cursor: "pointer",
    },
    displayInput: {
        color: theme.design.colors.waz_primaryColor100,
        width: "calc(100% - 30px)",
        border: 0,
        padding: theme.spacing(0, 1),
        "& div::before": {
            border: 0,
        },
        "& div::after": {
            border: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
        },
        "& div:hover:not(.Mui-disabled):before": {
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    },
}); });
