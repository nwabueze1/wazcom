import makeStyles from "@mui/styles/makeStyles";
export var useStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ({
        dialog__close: {
            position: "absolute",
            top: "25px",
            right: "25px",
            zIndex: 99,
        },
        dialog: (_a = {
                position: "relative",
                boxSizing: "border-box",
                borderRadius: theme.spacing(1),
                width: 536,
                maxHeight: "75vh",
                overflowY: "auto",
                background: theme.design.colors.waz_white,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                "& .MuiRadio-colorSecondary.Mui-checked": {
                    color: theme.design.colors.waz_primaryColor100,
                },
                "& .MuiCheckbox-colorSecondary.Mui-checked": {
                    color: theme.design.colors.waz_primaryColor100,
                },
                "&::-webkit-scrollbar": {
                    width: "4px",
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "rgba(0,0,0,0.2)",
                }
            },
            _a[theme.breakpoints.down("md")] = {
                width: "80%",
            },
            _a[theme.breakpoints.down("sm")] = {
                minHeight: "100vh",
                width: "100%",
                justifyContent: "flex-start",
                borderRadius: 0,
            },
            _a),
        dialogOptionBox: {
            position: "relative",
        },
        closeIconContainer: {
            height: 32,
            width: 32,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: theme.design.colors.waz_greenishGrey2,
            cursor: "pointer",
            position: "absolute",
            zIndex: 5,
            right: 16,
            top: 16,
        },
        closeIcon: {
            color: theme.design.colors.waz_white,
        },
        dialogImageParent: {
            width: "100%",
            height: "236px",
            position: "relative",
            flexShrink: 0,
        },
        cartImage: {
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
        },
        dialog__name: {
            fontSize: theme.typography.fontSize + 4,
            color: theme.design.colors.waz_primaryBlack,
            fontWeight: 600,
            margin: "32px 0 10px 0",
            width: "90%",
            textTransform: "capitalize",
        },
        dialog__description: {
            fontSize: theme.typography.fontSize,
            width: "90%",
            lineHeight: "24.55px",
            color: theme.design.colors.waz_grey400,
        },
        dialog__actions: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "20%",
            "& p": (_b = {
                    margin: 0,
                    fontSize: theme.typography.fontSize * 2
                },
                _b[theme.breakpoints.down("sm")] = {
                    fontSize: theme.typography.fontSize + 4,
                },
                _b),
        },
        dialogOptions: (_c = {
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "space-around"
            },
            _c[theme.breakpoints.down("xs")] = {
                flexDirection: "column",
                alignItems: "center",
            },
            _c),
        total: {
            fontSize: theme.typography.fontSize + 4,
            padding: theme.spacing(1, 3),
            textAlign: "center",
            fontWeight: theme.typography.fontWeightMedium,
            lineHeight: "21px",
        },
        actions: (_d = {
                position: "sticky",
                bottom: 0,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxSizing: "border-box",
                padding: theme.spacing(3, "5%"),
                background: "rgba(255, 255, 255, 0.7)"
            },
            _d[theme.breakpoints.down("sm")] = {
                position: "fixed",
            },
            _d),
        icon: (_e = {
                color: theme.design.colors.waz_primaryColor100,
                cursor: "pointer",
                fontSize: theme.typography.fontSize * 2.5
            },
            _e[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _e),
        dialogOption: (_f = {
                padding: theme.spacing(1, 8),
                fontSize: theme.typography.fontSize + 4,
                fontWeight: theme.typography.fontWeightMedium,
                fontFamily: theme.design.font.openSans,
                borderRadius: "4px"
            },
            _f[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(1, 3),
            },
            _f),
        dialog__option_outline: (_g = {
                border: "2px solid ".concat(theme.design.colors.waz_dangerColor400),
                color: theme.design.colors.waz_dangerColor400,
                background: theme.design.colors.waz_white
            },
            _g[theme.breakpoints.down("xs")] = {
                width: "80%",
                textAlign: "center",
                marginBottom: theme.spacing(2),
            },
            _g),
        totalItemPrice: {
            background: " rgba(230, 231, 230, 0.5)",
        },
        dialogOptionFilled: (_h = {
                background: theme.design.colors.waz_primaryColor100,
                color: theme.design.colors.waz_white,
                border: "none",
                cursor: "pointer"
            },
            _h[theme.breakpoints.down("sm")] = {
                textAlign: "center",
                justifyContent: "flex-end",
            },
            _h),
        errorMsg: {
            color: theme.design.colors.sunRed,
            fontSize: theme.typography.fontSize + 2,
            margin: theme.spacing(1, 0, 1.5),
        },
        dialogBox: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: -20,
            opacity: 0,
            transition: "opacity 0.5s ease-in",
        },
        dialogActive: {
            zIndex: 20,
            opacity: 1,
        },
    });
});
