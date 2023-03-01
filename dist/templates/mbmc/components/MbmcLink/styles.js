import { makeStyles } from "@mui/styles";
export var useMbmcLinkStyles = makeStyles(function (theme) {
    var _a;
    return ({
        link: (_a = {
                borderRadius: 100,
                width: "fit-content",
                fontSize: theme.typography.fontSize + 2,
                padding: theme.spacing(1.5, 5),
                textTransform: "unset",
                fontWeight: theme.typography.fontWeightRegular,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in",
                fontFamily: theme.design.font.openSans,
                color: theme.design.colors.waz_white,
                textDecoration: "none"
            },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(1, 2),
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(1, 3),
                borderRadius: 30,
            },
            _a),
        linkSmall: {
            padding: theme.spacing(1, 3),
            fontSize: theme.typography.fontSize,
        },
        linkPrimary: {
            background: "".concat(theme.design.colors.waz_orangeColor100, " !important"),
        },
        linkSecondary: {
            background: "".concat(theme.design.colors.waz_primaryColor200, " !important"),
        },
        linkNeutral: {
            background: "".concat(theme.design.colors.waz_white, " !important"),
            color: theme.design.colors.waz_black,
            fontWeight: theme.typography.fontWeightBold,
        },
        linkActive: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    });
});
