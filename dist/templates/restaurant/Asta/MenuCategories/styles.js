import makeStyles from "@mui/styles/makeStyles";
export var useMenuCategoryStyles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        categoryParent: (_a = {
                width: "96%",
                position: "sticky",
                margin: theme.spacing(0, "auto"),
                top: 0,
                zIndex: 5,
                border: "1px solid ".concat(theme.design.colors.waz_grey300),
                borderRadius: 4,
                background: theme.design.colors.waz_white,
                padding: theme.spacing(1, 0)
            },
            _a[theme.breakpoints.down("md")] = {
                width: "100%",
                borderRaduis: 0,
            },
            _a[theme.breakpoints.down("sm")] = {
                width: "100%",
                borderRaduis: 0,
            },
            _a),
        categoryContainer: (_b = {
                display: "flex",
                width: "95%",
                margin: theme.spacing(0, 1),
                gap: theme.spacing(1),
                alignItems: "center",
                background: theme.design.colors.waz_white,
                textTransform: "capitalize"
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "100%",
                margin: 0,
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "100%",
                margin: 0,
            },
            _b),
        categoryArrow: {
            position: "relative",
            top: 2,
        },
        menuCategories: (_c = {
                display: "flex",
                alignItems: "center",
                overflowX: "scroll",
                gap: theme.spacing(4),
                position: "relative",
                width: "100%",
                margin: theme.spacing(0, 1),
                scrollBehavior: "smooth",
                "&::-webkit-scrollbar": {
                    width: 0,
                    height: 0,
                }
            },
            _c[theme.breakpoints.down("md")] = {
                margin: 0,
                width: "calc(100% - ".concat(theme.spacing(2), ")"),
                paddingLeft: theme.spacing(3),
            },
            _c[theme.breakpoints.down("sm")] = {
                margin: 0,
                width: "calc(100% - ".concat(theme.spacing(1), ")"),
                paddingLeft: theme.spacing(1),
            },
            _c),
        restaurantCategory: {
            padding: theme.spacing(1, 0, 1.5, 0),
            whiteSpace: "nowrap",
        },
        restaurantMenuCategory: {
            flexShrink: 0,
        },
        active: {
            backgroundColor: theme.design.colors.waz_primaryColor700,
            padding: theme.spacing(1, 3),
            borderRadius: theme.spacing(4),
        },
        textActive: {
            color: theme.design.colors.waz_white,
            fontSize: theme.typography.fontSize + 4,
            fontWeight: theme.typography.fontWeightMedium,
            textDecoration: "none",
        },
        categoryLink: {
            color: theme.design.colors.waz_grey600,
            fontSize: theme.typography.fontSize + 4,
            fontWeight: theme.typography.fontWeightMedium,
            textDecoration: "none",
        },
    });
});
