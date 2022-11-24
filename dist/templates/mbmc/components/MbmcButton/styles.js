import { makeStyles } from "@mui/styles";
export var useButtonStyles = makeStyles(function (theme) {
    var _a;
    return ({
        button: (_a = {
                borderRadius: 100,
                width: "fit-content",
                fontSize: theme.typography.fontSize + 2,
                padding: theme.spacing(1.5, 5),
                textTransform: "unset",
                fontWeight: theme.typography.fontWeightRegular,
                border: '1px solid transparent',
                transition: 'all 0.3s ease-in'
            },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(1, 2),
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(1, 3),
                borderRadius: 30,
            },
            _a),
        buttonSmall: {
            padding: theme.spacing(1, 3),
            fontSize: theme.typography.fontSize,
        },
        buttonPrimary: {
            background: "".concat(theme.design.colors.waz_orangeColor100, " !important"),
        },
        buttonSecondary: {
            background: "".concat(theme.design.colors.waz_primaryColor200, " !important"),
        },
        buttonNeutral: {
            background: theme.design.colors.waz_white,
            color: theme.design.colors.waz_black,
        },
        buttonActive: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    });
});
