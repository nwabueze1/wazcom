import { makeStyles } from "@mui/styles";
export var useMbmcBlock9Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_white,
                overflow: "hidden",
                padding: theme.spacing(6, 0),
                width: "100%"
            },
            _a[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(8, 0),
            },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(6, 0),
            },
            _a),
        headerContainer: {
            maxWidth: 1240,
            width: "90%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        headerContent: (_b = {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            },
            _b[theme.breakpoints.down("md")] = {
                alignItems: "center",
            },
            _b),
        headerTitle: (_c = {
                color: theme.design.colors.waz_black,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                textTransform: "capitalize",
                margin: 0,
                marginBottom: theme.spacing(1),
                fontFamily: theme.design.font.lostaMasta,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _c[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize * 3,
            },
            _c[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 2,
            },
            _c[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize * 2,
                fontWeight: 800,
                marginBottom: theme.spacing(1),
            },
            _c),
        headerDescription: (_d = {
                color: theme.design.colors.waz_greyColor600,
                textAlign: "left",
                fontSize: theme.typography.fontSize + 6,
                maxWidth: 500,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in",
                fontFamily: theme.design.font.montserrat,
                lineHeight: 1.6
            },
            _d[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 6,
            },
            _d[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 3,
                textAlign: "center",
                width: "80%",
            },
            _d[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 2,
                width: "100%",
            },
            _d),
        headerCardContainer: {
            width: "100%",
            display: "block",
            marginTop: theme.spacing(4),
        },
        pointContainer: (_e = {
                width: "100%",
                maxWidth: 500,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                transition: " boxShadow 1s ease",
                borderRadius: "4px",
                border: "1px solid ".concat(theme.design.colors.waz_grey300),
                boxSizing: "border-box",
                marginBottom: theme.spacing(2),
                padding: theme.spacing(3),
                boxShadow: "0px 3px 60px ".concat(theme.design.colors.waz_black100)
            },
            _e[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(2),
                maxWidth: "100%",
            },
            _e),
        pointTextContainer: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            fontFamily: theme.design.font.montserrat,
        },
        point: {
            padding: theme.spacing(2, 3),
            fontFamily: theme.design.font.openSans,
            fontSize: theme.typography.fontSize * 2,
            boxShadow: "0px 1px 10px ".concat(theme.design.colors.waz_black100),
            borderRadius: theme.spacing(1),
            marginRight: theme.spacing(2),
            color: theme.design.colors.waz_primaryColor300,
            fontWeight: theme.typography.fontWeightBold,
        },
        pointDescription: (_f = {
                color: theme.design.colors.waz_greyColor600,
                textAlign: "left",
                fontSize: theme.typography.fontSize,
                width: "100%"
            },
            _f[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize,
            },
            _f[theme.breakpoints.down("lg")] = {
                width: "80%",
                fontSize: theme.typography.fontSize,
            },
            _f[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 2,
                width: "100%",
            },
            _f),
        pointTitle: (_g = {
                color: theme.design.colors.waz_black,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: theme.typography.fontSize + 4,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "Losta Masta;",
                margin: 0,
                textAlign: "left",
                marginBottom: theme.spacing(0.5)
            },
            _g[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _g[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _g[theme.breakpoints.down("md")] = {
                textAlign: "left",
                fontSize: theme.typography.fontSize + 4,
                fontWeight: 800,
                marginBottom: theme.spacing(1),
            },
            _g),
        activePoint: {
            backgroundColor: theme.design.colors.waz_primaryColor300,
            color: theme.design.colors.waz_white,
        },
        activeTitle: {
            color: theme.design.colors.waz_primaryColor300,
        },
        textContainer: {
            width: "100%",
        },
        imageStep: (_h = {
                height: "100%",
                width: "100%"
            },
            _h[theme.breakpoints.down("lg")] = {
                height: "unset",
            },
            _h),
        directionContainer: (_j = {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
            },
            _j[theme.breakpoints.down("lg")] = {
                alignItems: "flex-end",
            },
            _j[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _j),
        directionContainerMobile: (_k = {
                width: "100%",
                height: "100%",
                display: "none",
                alignItems: "center",
                padding: theme.spacing(2)
            },
            _k[theme.breakpoints.down("md")] = {
                display: "flex",
                height: "auto",
                padding: theme.spacing(0),
            },
            _k),
        imgDirection1: (_l = {
                position: "absolute",
                width: 168,
                height: 160,
                top: 0,
                left: 0,
                backgroundColor: theme.design.colors.waz_white,
                marginTop: theme.spacing(-7)
            },
            _l[theme.breakpoints.down("lg")] = {
                marginTop: theme.spacing(-1),
                width: 100,
            },
            _l),
        imgDirection2: (_m = {
                position: "absolute",
                width: 168,
                height: 160,
                top: 0,
                right: 0,
                backgroundColor: theme.design.colors.waz_white,
                marginTop: theme.spacing(-7)
            },
            _m[theme.breakpoints.down("lg")] = {
                marginTop: theme.spacing(-1),
                width: 100,
            },
            _m),
        imgDirection3: (_o = {
                width: 168,
                height: 160,
                position: "absolute",
                bottom: 0,
                left: 0,
                backgroundColor: theme.design.colors.waz_white,
                marginBottom: theme.spacing(-7)
            },
            _o[theme.breakpoints.down("lg")] = {
                marginBottom: theme.spacing(-1),
                width: 100,
            },
            _o),
        imgDirection4: (_p = {
                width: 168,
                height: 160,
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: theme.design.colors.waz_white,
                marginBottom: theme.spacing(-7)
            },
            _p[theme.breakpoints.down("lg")] = {
                marginBottom: theme.spacing(-1),
                width: 100,
            },
            _p),
        mobileHide: (_q = {
                display: "block"
            },
            _q[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _q),
        block9ActiveElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    });
});
