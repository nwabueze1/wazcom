import makeStyles from "@mui/styles/makeStyles";
import theme from "theme";
export var useShortAnswerStyles = makeStyles(function () { return ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        margin: theme.spacing(2, 0),
    },
    shortAnswerInput: {
        color: theme.design.colors.waz_primaryColor100,
        width: "50%",
        "& div::before": {
            borderBottom: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
        },
        "& div::after": {
            border: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
        },
        "& div:hover:not(.Mui-disabled):before": {
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    },
}); });
