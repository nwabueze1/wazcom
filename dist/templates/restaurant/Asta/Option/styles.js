import makeStyles from "@mui/styles/makeStyles";
export var useOptionStyles = makeStyles(function (theme) { return ({
    root: {
        width: "100%",
        background: theme.design.colors.grey7,
        border: "1px solid ".concat(theme.design.colors.grey5),
        padding: theme.spacing(0, 4, 0, 4),
        boxSizing: "border-box",
    },
    summary: {
        padding: "".concat(theme.spacing(0), " !important"),
        textTransform: "capitalize",
    },
    details: {
        padding: "".concat(theme.spacing(0, 0, 2.5, 0), " !important"),
        display: "block",
    },
    optionType: {
        fontSize: theme.typography.fontSize,
        color: theme.design.colors.grey2,
        textTransform: "capitalize",
    },
    option: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
    },
    optionPickerParent: {
        display: "flex",
        alignItems: "center",
    },
    optionAmount: {
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.design.colors.black,
    },
    optionPicker: {
        position: "relative",
        left: -10,
        "&.Mui-checked": {
            color: theme.design.colors.greene,
        },
    },
}); });
