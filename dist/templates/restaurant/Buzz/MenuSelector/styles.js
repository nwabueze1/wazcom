import makeStyles from "@mui/styles/makeStyles";
export var useMenuSelectorStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                width: "40%",
                background: theme.design.colors.waz_white,
                "&.MuiOutlinedInput-notchedOutline": {
                    borderRadius: "4px",
                    padding: theme.spacing(1.5, 2),
                },
                "&.MuiSelect-select:focus": {
                    background: theme.design.colors.white,
                }
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
        container: {
            padding: theme.spacing(0, 2),
            margin: theme.spacing(2, 0),
        },
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
