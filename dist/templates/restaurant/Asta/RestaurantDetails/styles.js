import makeStyles from "@mui/styles/makeStyles";
export var useRestaurantDetailsStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d;
    return ({
        root: {},
        detailsContainer: (_a = {
                maxWidth: theme.include.styles.maxWidth,
                background: theme.design.colors.white,
                padding: theme.spacing(2, 6),
                borderBottom: "1px solid ".concat(theme.design.colors.waz_grey300),
                width: "calc(100% - ".concat(theme.spacing(12), ")")
            },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(4),
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(2),
            },
            _a),
        restaurantLocation: (_b = {
                fontWeight: 600,
                fontSize: theme.typography.fontSize + 12,
                lineHeight: "33px",
                display: "flex",
                color: theme.design.colors.waz_black,
                marginBottom: theme.spacing(1.5)
            },
            _b[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _b),
        restaurantDetails: {
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            boxSizing: "border-box",
            fontSize: theme.typography.fontSize + 2,
            color: theme.design.colors.waz_grey1,
            gap: theme.spacing(3),
        },
        openingTime: {
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: theme.typography.fontSize + 2,
            fontWeight: theme.typography.fontWeightRegular,
        },
        bullet: {
            width: 8,
            height: 8,
            borderRadius: "50%",
            border: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
        },
        openingDetails: {
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontWeight: theme.typography.fontWeightRegular,
            color: theme.design.colors.waz_grey1,
        },
        detailsIcon: {
            color: theme.design.colors.waz_primaryColor100,
            height: theme.spacing(2),
        },
        mailLink: {
            color: theme.design.colors.waz_grey1,
            textDecoration: "none",
            cursor: "pointer",
        },
        logoContainer: (_c = {
                position: "relative",
                height: 60
            },
            _c[theme.breakpoints.down("sm")] = {
                height: 10,
            },
            _c),
        logoWrapper: (_d = {
                position: "absolute",
                height: 100,
                width: 100,
                borderRadius: "50%",
                top: -60
            },
            _d[theme.breakpoints.down("sm")] = {
                height: 64,
                width: 64,
            },
            _d),
        logoImg: {
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "50%",
        },
    });
});
