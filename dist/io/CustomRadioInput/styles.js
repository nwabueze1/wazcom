import makeStyles from "@mui/styles/makeStyles";
export var useCustomRadioInputStyles = makeStyles(function (theme) { return ({
    root: {
        background: theme.design.colors.waz_white,
        border: "1px solid",
        borderColor: theme.design.colors.waz_primary700,
        borderRadius: 4,
        padding: theme.spacing(2),
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1.5),
        transition: "borderColor 0.5s ease-in",
    },
    inputActive: {
        borderColor: theme.design.colors.waz_primary300,
    },
    inputRadio: {
        top: 2.5,
    },
    inputLabel: {
        fontSize: theme.typography.fontSize + 2,
        color: theme.design.colors.waz_grey1,
    },
}); });
