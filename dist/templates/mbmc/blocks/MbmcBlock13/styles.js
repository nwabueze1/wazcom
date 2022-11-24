import { makeStyles } from "@mui/styles";
export var useMbmcBlock13Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    return ({
        root: {
            position: "absolute",
            width: "100%",
        },
        container: (_a = {
                background: "transparent",
                overflow: "hidden",
                padding: theme.spacing(2, 0),
                boxSizing: "border-box",
                gap: theme.spacing(2),
                display: "flex",
                zIndex: 10,
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: 1240,
                width: "90%",
                margin: "0 auto"
            },
            _a[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(3, 0),
            },
            _a[theme.breakpoints.down("md")] = {
                backgroundColor: theme.design.colors.waz_white,
                padding: theme.spacing(3, 0),
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
                maxWidth: "300px",
                maxHeight: "65px",
                objectFit: "cover"
            },
            _c[theme.breakpoints.down("md")] = {
                maxWidth: "200px",
            },
            _c[theme.breakpoints.up("md")] = {
                height: "60px",
                width: "282.45px",
            },
            _c),
        link: {
            cursor: "pointer",
            textDecoration: "none",
            color: theme.design.colors.waz_black,
        },
        mrBarkers: {
            fontFamily: theme.design.font.lostaMastaLight,
        },
        border: {
            borderRight: "1px solid hsla(12, 73%, 56%, 1)",
            borderLeft: "1px solid hsla(12, 73%, 56%, 1)",
        },
        menuList: (_d = {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: theme.spacing(7),
                fontSize: theme.typography.fontSize + 2,
                fontFamily: theme.design.font.montserrat,
                fontWeight: theme.typography.fontWeightBold
            },
            _d[theme.breakpoints.down("lg")] = {
                paddingRight: theme.spacing(6),
                display: "none",
            },
            _d[theme.breakpoints.down("md")] = {
                paddingRight: theme.spacing(2),
                fontSize: theme.typography.fontSize,
                "& > p": {
                    padding: theme.spacing(2, 1),
                    cursor: "pointer",
                },
            },
            _d[theme.breakpoints.down("sm")] = {
                display: "none",
            },
            _d),
        desktopIcons: (_e = {
                display: "flex",
                gap: "16px"
            },
            _e[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _e),
        mobileIcons: (_f = {
                display: "none",
                gap: "8px"
            },
            _f[theme.breakpoints.down("lg")] = {
                display: "flex",
            },
            _f),
        icon: {
            position: "relative",
        },
        cartIcon: (_g = {
                color: theme.design.colors.waz_white
            },
            _g[theme.breakpoints.down("lg")] = {
                color: theme.design.colors.waz_orangeColor100,
                paddingRight: theme.spacing(4),
            },
            _g),
        badgeIcon: (_h = {
                padding: "4px 6px",
                fontSize: theme.typography.fontSize - 2,
                borderRadius: "4px",
                position: "absolute",
                top: -16,
                left: 12,
                fontFamily: theme.design.font.montserrat,
                color: theme.design.colors.waz_orangeColor100,
                background: theme.design.colors.waz_white
            },
            _h[theme.breakpoints.down("lg")] = {
                color: theme.design.colors.waz_white,
                backgroundColor: theme.design.colors.waz_orangeColor100,
            },
            _h),
        ctaDesktop: {
            fontWeight: theme.typography.fontWeightMedium,
        },
        ctaMobile: {
            color: theme.design.colors.waz_orangeColor100,
            fontWeight: theme.typography.fontWeightMedium,
        },
        menuOptionMobile: (_j = {
                display: "none"
            },
            _j[theme.breakpoints.down("lg")] = {
                display: "flex",
                alignItems: "center",
                color: theme.design.colors.waz_lightOrange,
            },
            _j),
        openNav: (_k = {
                display: "none"
            },
            _k[theme.breakpoints.down("lg")] = {
                display: "block",
                position: "fixed",
                zIndex: 12,
                width: "70vw",
                top: 0,
                right: "-100%",
                transition: "all 0.5s",
            },
            _k[theme.breakpoints.down("md")] = {
                height: "100vh",
                zIndex: 12,
            },
            _k),
        showMenu: (_l = {
                right: theme.spacing(10)
            },
            _l[theme.breakpoints.down("md")] = {
                right: theme.spacing(2),
            },
            _l),
        overlay: {
            backgroundColor: "rgba(0,0,0,0.3)",
            opacity: 0,
            visibility: "hidden",
            width: "100vw",
            zIndex: 11,
            height: "100vh",
            position: "fixed",
            transition: "all 0.3s",
        },
        showOverlay: {
            opacity: 1,
            visibility: "visible",
        },
        expandedNav: (_m = {
                overflow: "hidden",
                padding: theme.spacing(0, 0, 0, 10),
                width: "100%",
                height: "auto",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                minHeight: "100vh"
            },
            _m[theme.breakpoints.down("md")] = {
                padding: theme.spacing(0, 0, 0, 2),
                height: "100%",
            },
            _m),
        mobilelogoContainer: {
            width: "30%",
            display: "flex",
            alignItems: "center",
            paddingTop: theme.spacing(2),
        },
        expandedMenuOptionMobile: (_o = {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                paddingRight: theme.spacing(10),
                paddingTop: theme.spacing(3),
                width: "100%",
                height: "100%",
                color: theme.design.colors.waz_white,
                backgroundColor: theme.design.colors.waz_orangeColor100,
                minHeight: "100vh"
            },
            _o[theme.breakpoints.down("md")] = {
                paddingRight: theme.spacing(2),
                justifyContent: "flex-start",
            },
            _o),
        expandedNavContent: {
            width: "100%",
            height: "100%",
            display: "flex",
        },
        expandedNavContentLeftSide: (_p = {
                width: "30%",
                backgroundColor: "rgba(0,0,0,0.4)",
                padding: theme.spacing(0, 0, 0, 10)
            },
            _p[theme.breakpoints.down("md")] = {
                padding: theme.spacing(0, 0, 0, 2),
            },
            _p),
        expandedNavContentRightSide: (_q = {
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
            _q[theme.breakpoints.down("lg")] = {
                paddingRight: theme.spacing(2),
            },
            _q),
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
