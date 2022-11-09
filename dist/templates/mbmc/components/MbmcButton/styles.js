import { makeStyles } from "@mui/styles";
export var useButtonStyles = makeStyles(function (theme) {
    var _a;
    return ({
        button: (_a = {
                borderRadius: 100,
                width: "100%",
                fontSize: theme.typography.fontSize + 2,
                padding: theme.spacing(1.5, 5),
                textTransform: "unset",
                fontWeight: theme.typography.fontWeightRegular
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
            background: theme.design.colors.waz_orangeColor100,
        },
        buttonSecondary: {
            background: theme.design.colors.waz_primaryColor200,
        },
    });
});
