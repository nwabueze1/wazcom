import makeStyles from "@mui/styles/makeStyles";
export var useMenusStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f;
    return ({
        root: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-start",
            top: "80%",
            position: "relative",
        },
        container: (_a = {
                margin: theme.spacing(0, "auto"),
                display: "flex",
                zIndex: 10,
                gap: theme.spacing(3),
                width: "calc(100% - ".concat(theme.spacing(8), ")")
            },
            _a[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _a[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _a),
        menuContainer: (_b = {
                width: "100%",
                background: theme.design.colors.waz_white,
                marginBottom: theme.spacing(7),
                minHeight: "60vh",
                borderRadius: "8px"
            },
            _b[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _b),
        cartContainer: (_c = {
                width: "30%",
                minHeight: "60vh",
                height: "689px",
                borderRadius: "8px",
                boxShadow: "0px 2px 18px rgba(151, 151, 151, 0.16)",
                background: theme.design.colors.waz_white,
                position: "sticky",
                top: 0
            },
            _c[theme.breakpoints.down("md")] = {
                right: "0px",
                top: " 14%",
                width: "55vw",
                position: "fixed",
                opacity: 0,
                zIndex: -999,
            },
            _c[theme.breakpoints.down("sm")] = {
                top: 0,
                width: "100vw",
            },
            _c),
        restaurantMenuItem: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
        },
        restaurantMenuItemContent: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
        },
        restaurantMenuItemCategory: {
            fontSize: theme.typography.fontSize + 8,
            color: theme.design.colors.waz_primaryBlack,
            fontWeight: 600,
        },
        restaurantMenuItems: (_d = {
                display: "flex",
                flexDirection: "column",
                padding: theme.spacing(3, 2)
            },
            _d[theme.breakpoints.down("md")] = {
                padding: theme.spacing(3, 4),
            },
            _d[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(3, 2),
            },
            _d),
        restaurantEmpty: {
            display: "flex",
            height: "67vh",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 0 0 0",
            background: theme.design.colors.waz_white,
            width: "100%",
            "& p": {
                width: "70%",
                fontSize: "16px",
                margin: "20px 0 0 0",
                color: "rgba(68, 68, 68, 0.5)",
                textAlign: "center",
                lineHeight: "43.65px",
            },
        },
        emptyRestaurant: {
            width: "124px",
        },
        restaurantFooter: (_e = {
                width: "56px",
                height: "56px",
                position: "fixed",
                top: "85%",
                right: "20px",
                backgroundColor: theme.design.colors.waz_white,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "height 0.5s ease-in",
                borderRadius: "50%",
                boxShadow: "0px 4px 20px rgba(77, 86, 80, 0.16)",
                color: theme.design.colors.white,
                cursor: "pointer",
                diplay: "block"
            },
            _e[theme.breakpoints.up("md")] = {
                display: "none",
            },
            _e[theme.breakpoints.up("sm")] = {
                display: "none",
            },
            _e),
        restaurantVisibleCart: (_f = {},
            _f[theme.breakpoints.down("md")] = {
                opacity: 1,
                zIndex: 999,
            },
            _f),
        shopCart: {
            color: theme.design.colors.waz_black,
        },
        badge: {
            color: theme.design.colors.waz_primaryColor100,
            fontSize: theme.typography.fontSize + 6,
            right: -4,
        },
    });
});
