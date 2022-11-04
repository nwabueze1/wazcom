import makeStyles from "@mui/styles/makeStyles";
export var useMenuSelectorStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: (_a = {
                width: "40%",
                background: theme.design.colors.waz_white,
                border: "1px solid ".concat(theme.design.colors.waz_grey300),
                "&.MuiOutlinedInput-notchedOutline": {
                    borderRadius: "4px",
                    padding: theme.spacing(2, 2),
                },
                "&.MuiSelect-select:focus": {
                    background: theme.design.colors.white,
                }
            },
            _a[theme.breakpoints.down("md")] = {
                width: "60%",
            },
            _a[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _a),
        menuItem: {
            background: theme.design.colors.waz_white,
            "&.Mui-selected ": {
                background: theme.design.colors.waz_white,
            },
        },
        container: (_b = {
                padding: theme.spacing(0, 2),
                margin: theme.spacing(2, 0)
            },
            _b[theme.breakpoints.down("md")] = {
                padding: theme.spacing(0, 4),
            },
            _b[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(0, 1),
            },
            _b),
        options: {
            fontWeight: 600,
            color: theme.design.colors.waz_primaryBlack,
            fontSize: theme.typography.fontSize + 4,
        },
        openingHours: {
            fontSize: theme.typography.fontSize,
            color: theme.design.colors.grey1,
            fontWeight: theme.typography.fontWeightRegular,
        },
    });
});
