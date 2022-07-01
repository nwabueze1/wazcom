import { makeStyles } from "@mui/styles";
/** !!-- Remember to update the function name !! */
export var useCurrencyInputStyles = makeStyles(function (theme) { return ({
    root: {
        color: theme.design.colors.waz_dangerColor300,
    },
    input: {
        width: "100%",
        padding: theme.spacing(2, 2),
        borderRadius: "4px",
        border: "1px solid ".concat(theme.design.colors.waz_greenishGrey),
        "&::placeholder": {
            color: theme.design.colors.grey300,
            fontSize: theme.typography.fontSize + 2,
        },
    },
    required: {
        color: theme.design.colors.waz_dangerColor100,
        margin: theme.spacing(0.5, 0, 0, 0.5),
    },
}); });
