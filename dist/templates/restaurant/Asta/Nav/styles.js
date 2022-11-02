import makeStyles from "@mui/styles/makeStyles";
export var useNavStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ({
        root: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
        },
        header: (_a = {
                width: "calc(100% - ".concat(theme.spacing(6), ")"),
                maxWidth: theme.include.styles.maxWidth,
                margin: "0, auto",
                display: "flex",
                background: theme.design.colors.waz_white,
                borderRadius: "8px",
                justifyContent: "space-between",
                alignItems: "center",
                padding: theme.spacing(1.5, 6),
                zIndex: 10
            },
            _a[theme.breakpoints.down("lg")] = {
                width: "calc(100% - ".concat(theme.spacing(6), ")"),
                borderRadius: 0,
            },
            _a[theme.breakpoints.down("md")] = {
                width: "calc(100% - ".concat(theme.spacing(4), ")"),
                padding: theme.spacing(1.5, 4),
                borderRadius: 0,
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: 0,
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
            },
            _a),
        logoContainer: (_b = {},
            _b[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(2),
            },
            _b),
        mobileCartBtn: (_c = {
                display: "none",
                padding: theme.spacing(0, 2)
            },
            _c[theme.breakpoints.down("sm")] = {
                display: "block",
            },
            _c),
        headerLogo: (_d = {
                objectFit: "cover"
            },
            _d[theme.breakpoints.down("sm")] = {
                width: "120px",
            },
            _d),
        searchField: (_e = {
                borderRadius: "20px",
                width: "40%",
                marginBottom: 0,
                "& .MuiOutlinedInput-root": (_f = {
                        borderRadius: "20px",
                        height: 40,
                        border: "1px solid ".concat(theme.design.colors.waz_grey300)
                    },
                    _f[theme.breakpoints.down("sm")] = {
                        borderRadius: 0,
                        width: "100%",
                    },
                    _f),
                "&.MuiOutlinedInput-input": {
                    border: "1px solid ".concat(theme.design.colors.waz_grey300),
                }
            },
            _e[theme.breakpoints.down("md")] = {
                width: "60%",
            },
            _e[theme.breakpoints.down("sm")] = {
                borderRadius: 0,
                width: "100%",
            },
            _e),
        cartBtn: {
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            border: "1px solid ".concat(theme.design.colors.waz_grey300),
            padding: theme.spacing(1, 2),
            fontSize: theme.typography.fontSize + 2,
            borderRadius: 30,
            cursor: "pointer",
        },
        cartIcon: {
            padding: theme.spacing(0.1, 0.5),
            fontWeight: 600,
            fontSize: theme.typography.fontSize + 6,
        },
        cartBtnContainer: (_g = {
                position: "relative",
                display: "none"
            },
            _g[theme.breakpoints.down("md")] = {
                display: "block",
            },
            _g[theme.breakpoints.down("sm")] = {
                display: "none",
            },
            _g),
        cartPopup: {
            width: "350px",
            border: "1px solid ".concat(theme.design.colors.waz_grey300),
            position: "absolute",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            top: "calc(100% + 3px)",
            right: 12,
            backgroundColor: theme.design.colors.waz_white,
            zIndex: 100,
        },
        cartPopupSm: (_h = {
                width: "100%",
                border: "1px solid ".concat(theme.design.colors.waz_grey300),
                position: "fixed",
                display: "none",
                alignItems: "flex-start",
                justifyContent: "center",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: theme.design.colors.waz_white,
                background: theme.design.colors.waz_white,
                zIndex: 100
            },
            _h[theme.breakpoints.down("sm")] = {
                display: "flex",
            },
            _h),
        cartPopupOverlay: {
            width: "100vw",
            height: "100vh",
            backgroudColor: "red",
            position: "fixed",
            zIndex: 50,
            left: 0,
            bottom: 0,
        },
    });
});
