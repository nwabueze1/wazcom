import { makeStyles } from "@mui/styles";
export var useMbmcBlock13Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_greyColor50,
                overflow: "hidden",
                padding: theme.spacing(2, 12),
                width: "100%",
                boxSizing: "border-box",
                gap: theme.spacing(2),
                display: "flex",
                position: "absolute",
                zIndex: 12,
                alignItems: "center",
                justifyContent: "space-between"
            },
            _a[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(2, 10),
            },
            _a[theme.breakpoints.down("md")] = {
                backgroundColor: theme.design.colors.waz_white,
                padding: theme.spacing(1, 2),
                height: "fit-content",
            },
            _a),
        activeElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
        logoContainer: {
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& > p": (_b = {
                    display: "flex",
                    alignItems: "center",
                    fontFamily: theme.design.font.lostaMasta,
                    fontSize: theme.typography.fontSize * 2,
                    color: theme.design.colors.waz_primaryColor300
                },
                _b[theme.breakpoints.down("lg")] = {
                    fontSize: theme.typography.fontSize + 8,
                    display: "none",
                },
                _b[theme.breakpoints.down("md")] = {
                    display: "none",
                },
                _b),
        },
        logo: (_c = {
                marginRight: theme.spacing(1),
                width: "100%"
            },
            _c[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _c),
        mobilelogo: (_d = {
                display: "none"
            },
            _d[theme.breakpoints.down("lg")] = {
                display: "block",
                marginRight: theme.spacing(1),
                width: "50px",
            },
            _d),
        mrBarkers: {
            fontFamily: theme.design.font.lostaMastaLight,
        },
        border: {
            borderRight: "1px solid hsla(12, 73%, 56%, 1)",
            borderLeft: "1px solid hsla(12, 73%, 56%, 1)",
        },
        menuList: (_e = {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                fontSize: theme.typography.fontSize + 2,
                width: "100%",
                fontFamily: theme.design.font.montserrat,
                fontWeight: theme.typography.fontWeightBold,
                "& > a, p": {
                    padding: theme.spacing(2, 4),
                    textDecoration: "none",
                    color: theme.design.colors.waz_black,
                    cursor: "pointer",
                }
            },
            _e[theme.breakpoints.down("lg")] = {
                paddingRight: theme.spacing(6),
                display: "none",
            },
            _e[theme.breakpoints.down("md")] = {
                paddingRight: theme.spacing(2),
                fontSize: theme.typography.fontSize,
                "& > p": {
                    padding: theme.spacing(2, 1),
                    cursor: "pointer",
                },
            },
            _e[theme.breakpoints.down("sm")] = {
                display: "none",
            },
            _e),
        desktopIcons: (_f = {
                display: "flex",
                gap: "16px"
            },
            _f[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _f),
        mobileIcons: (_g = {
                display: "none",
                gap: "8px"
            },
            _g[theme.breakpoints.down("lg")] = {
                display: "flex",
            },
            _g),
        icon: {
            paddingRight: theme.spacing(4),
            position: "relative",
        },
        cartIcon: (_h = {
                color: theme.design.colors.waz_white
            },
            _h[theme.breakpoints.down("lg")] = {
                color: theme.design.colors.waz_orangeColor100,
            },
            _h),
        badgeIcon: (_j = {
                padding: "4px 6px",
                fontSize: theme.typography.fontSize - 2,
                borderRadius: "4px",
                position: "absolute",
                top: "-16px",
                left: "12px",
                fontFamily: theme.design.font.montserrat,
                color: theme.design.colors.waz_orangeColor100,
                background: theme.design.colors.waz_white
            },
            _j[theme.breakpoints.down("lg")] = {
                color: theme.design.colors.waz_white,
                backgroundColor: theme.design.colors.waz_orangeColor100,
            },
            _j),
        orderBtn: (_k = {
                backgroundColor: theme.design.colors.waz_white,
                fontFamily: theme.design.font.montserrat,
                fontWeight: theme.typography.fontWeightBold,
                padding: theme.spacing(1.5, 3),
                width: "fit-content",
                whiteSpace: "nowrap",
                borderRadius: 50,
                cursor: "pointer"
            },
            _k[theme.breakpoints.down("lg")] = {
                marginRight: theme.spacing(0),
                display: "none",
            },
            _k),
        mobileOrderBtn: {
            backgroundColor: theme.design.colors.waz_white,
            color: theme.design.colors.waz_orangeColor100,
            fontFamily: theme.design.font.montserrat,
            fontWeight: theme.typography.fontWeightBold,
            padding: theme.spacing(1.5, 3),
            width: "fit-content",
            whiteSpace: "nowrap",
            borderRadius: 50,
            cursor: "pointer",
        },
        menuOptionMobile: (_l = {
                display: "none"
            },
            _l[theme.breakpoints.down("lg")] = {
                display: "flex",
                alignItems: "center",
                color: theme.design.colors.waz_lightOrange,
            },
            _l),
        openNav: (_m = {
                display: "none"
            },
            _m[theme.breakpoints.down("lg")] = {
                display: "block",
                position: "fixed",
                zIndex: 12,
                width: "100%",
                top: 0,
            },
            _m[theme.breakpoints.down("md")] = {
                height: "100vh",
                zIndex: 12,
            },
            _m),
        expandedNav: (_o = {
                backgroundColor: "rgba(0,0,0,0.4)",
                overflow: "hidden",
                padding: theme.spacing(0, 0, 0, 10),
                width: "100%",
                height: "auto",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between"
            },
            _o[theme.breakpoints.down("md")] = {
                padding: theme.spacing(0, 0, 0, 2),
                height: "100%",
            },
            _o),
        mobilelogoContainer: {
            width: "30%",
            display: "flex",
            alignItems: "center",
            paddingTop: theme.spacing(2),
        },
        expandedMenuOptionMobile: (_p = {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingRight: theme.spacing(10),
                paddingTop: theme.spacing(3),
                width: "70%",
                height: "100%",
                color: theme.design.colors.waz_white,
                backgroundColor: theme.design.colors.waz_orangeColor100
            },
            _p[theme.breakpoints.down("md")] = {
                paddingRight: theme.spacing(2),
                justifyContent: "flex-start",
            },
            _p),
        expandedNavContent: {
            width: "100%",
            height: "100%",
            display: "flex",
        },
        expandedNavContentLeftSide: (_q = {
                width: "30%",
                backgroundColor: "rgba(0,0,0,0.4)",
                padding: theme.spacing(0, 0, 0, 10)
            },
            _q[theme.breakpoints.down("md")] = {
                padding: theme.spacing(0, 0, 0, 2),
            },
            _q),
        expandedNavContentRightSide: (_r = {
                width: "70%",
                backgroundColor: theme.design.colors.waz_orangeColor100,
                textAlign: "right",
                display: "flex",
                gap: "32px",
                flexDirection: "column",
                alignItems: "flex-end",
                padding: theme.spacing(4, 10, 10, 0),
                "& a, p": {
                    textDecoration: "none",
                    letterSpacing: "0px",
                    color: theme.design.colors.waz_white,
                    textTransform: "capitalize",
                    fontSize: theme.typography.fontSize + 20,
                    fontWeight: theme.typography.fontWeightBold,
                    fontFamily: theme.design.font.lostaMasta,
                }
            },
            _r[theme.breakpoints.down("lg")] = {
                paddingRight: theme.spacing(2),
            },
            _r),
        NavLinks: {
            letterSpacing: "0px",
            color: theme.design.colors.waz_white,
            textTransform: "capitalize",
            fontSize: theme.typography.fontSize + 20,
            fontWeight: theme.typography.fontWeightBold,
            fontFamily: theme.design.font.lostaMasta,
        },
    });
});
