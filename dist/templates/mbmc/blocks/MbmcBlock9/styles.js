import { makeStyles } from "@mui/styles";
export var useMbmcBlock9Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_white,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                overflow: "hidden",
                padding: theme.spacing(12),
                width: "100%",
                boxSizing: "border-box",
                gap: theme.spacing(2),
                maxWidth: 1440,
                margin: "0 auto"
            },
            _a[theme.breakpoints.down("lg")] = {
                height: "100%",
                padding: theme.spacing(8, 4),
            },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(6, 4),
                height: "fit-content",
            },
            _a),
        headerContent: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
        },
        headerTitle: (_b = {
                color: theme.design.colors.waz_black,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "Losta Masta",
                margin: 0,
                textAlign: "center",
                marginBottom: theme.spacing(2),
                fontFamily: theme.design.font.lostaMasta
            },
            _b[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize * 3,
            },
            _b[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 2,
            },
            _b[theme.breakpoints.down("md")] = {
                textAlign: "left",
                fontSize: theme.typography.fontSize * 2,
                fontWeight: 800,
                marginBottom: theme.spacing(1),
            },
            _b),
        headerDescription: (_c = {
                color: theme.design.colors.waz_greyColor600,
                textAlign: "left",
                fontSize: theme.typography.fontSize + 6,
                maxWidth: 500,
                fontFamily: theme.design.font.montserrat
            },
            _c[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize + 6,
            },
            _c[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 6,
                width: "80%",
            },
            _c[theme.breakpoints.down("md")] = {
                width: "80%",
                fontSize: theme.typography.fontSize,
            },
            _c[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 2,
                width: "100%",
            },
            _c),
        headerCardContainer: {
            width: "100%",
            display: "block",
            marginTop: theme.spacing(4),
        },
        pointContainer: (_d = {
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
            _d[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(2),
                maxWidth: "100%",
            },
            _d),
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
        pointDescription: (_e = {
                color: theme.design.colors.waz_greyColor600,
                textAlign: "left",
                fontSize: theme.typography.fontSize,
                width: "100%"
            },
            _e[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize,
            },
            _e[theme.breakpoints.down("lg")] = {
                width: "80%",
                fontSize: theme.typography.fontSize,
            },
            _e[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 2,
                width: "100%",
            },
            _e),
        pointTitle: (_f = {
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
            _f[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _f[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _f[theme.breakpoints.down("md")] = {
                textAlign: "left",
                fontSize: theme.typography.fontSize + 4,
                fontWeight: 800,
                marginBottom: theme.spacing(1),
            },
            _f),
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
        imageStep: (_g = {
                height: "100%"
            },
            _g[theme.breakpoints.down("lg")] = {
                height: "unset",
                width: "100%",
            },
            _g),
        directionContainer: (_h = {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
            },
            _h[theme.breakpoints.down("lg")] = {
                alignItems: "flex-end",
                height: 500,
            },
            _h[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _h),
        directionContainerMobile: (_j = {
                width: "100%",
                height: "100%",
                display: "none",
                alignItems: "center",
                padding: theme.spacing(2)
            },
            _j[theme.breakpoints.down("md")] = {
                display: "flex",
                height: "auto",
                padding: theme.spacing(0),
            },
            _j),
        imgDirection1: (_k = {
                position: "absolute",
                width: 168,
                height: 160,
                top: 0,
                left: 0,
                backgroundColor: theme.design.colors.waz_white,
                marginTop: theme.spacing(-7)
            },
            _k[theme.breakpoints.down("lg")] = {
                marginTop: theme.spacing(-1),
                width: 100,
            },
            _k),
        imgDirection2: (_l = {
                position: "absolute",
                width: 168,
                height: 160,
                top: 0,
                right: 0,
                backgroundColor: theme.design.colors.waz_white,
                marginTop: theme.spacing(-7)
            },
            _l[theme.breakpoints.down("lg")] = {
                marginTop: theme.spacing(-1),
                width: 100,
            },
            _l),
        imgDirection3: (_m = {
                width: 168,
                height: 160,
                position: "absolute",
                bottom: 0,
                left: 0,
                backgroundColor: theme.design.colors.waz_white,
                marginBottom: theme.spacing(-7)
            },
            _m[theme.breakpoints.down("lg")] = {
                marginBottom: theme.spacing(-1),
                width: 100,
            },
            _m),
        imgDirection4: (_o = {
                width: 168,
                height: 160,
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: theme.design.colors.waz_white,
                marginBottom: theme.spacing(-7)
            },
            _o[theme.breakpoints.down("lg")] = {
                marginBottom: theme.spacing(-1),
                width: 100,
            },
            _o),
        mobileHide: (_p = {
                display: "block"
            },
            _p[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _p),
    });
});
