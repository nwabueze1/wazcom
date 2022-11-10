import { makeStyles } from "@mui/styles";
export var useMbmcBlock1Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return ({
        root: {
            backgroundColor: theme.design.colors.waz_white,
            height: function (_a) {
                var fullHeight = _a.fullHeight;
                return (fullHeight ? "100vh" : "70vh");
            },
            position: "relative",
            overflow: "hidden",
        },
        block1Container: (_a = {
                maxWidth: 1240,
                width: "90%",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                height: "100%"
            },
            _a[theme.breakpoints.down("lg")] = {
                flexDirection: "column",
            },
            _a),
        block1Content: (_b = {
                width: "45%"
            },
            _b[theme.breakpoints.down("lg")] = {
                width: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                textAlign: "center",
            },
            _b),
        block1Heading: (_c = {
                color: theme.design.colors.waz_primaryColor300,
                fontSize: theme.typography.fontSize * 6,
                fontFamily: theme.design.font.lostaMasta,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "normal normal medium 68px/100px Losta Masta;",
                margin: 0
            },
            _c[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 4 + 4,
            },
            _c[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize * 3 + 10,
            },
            _c[theme.breakpoints.down("sm")] = {
                textAlign: "center",
                fontWeight: 800,
                marginBottom: theme.spacing(1),
            },
            _c),
        block1Description: (_d = {
                color: theme.design.colors.waz_greyColor600,
                fontSize: theme.typography.fontSize + 6,
                fontFamily: theme.design.font.montserrat,
                lineHeight: 1.5
            },
            _d[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize + 8,
            },
            _d[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 8,
                width: "80%",
            },
            _d[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 6,
            },
            _d[theme.breakpoints.down("sm")] = {
                textAlign: "center",
                width: "100%",
            },
            _d),
        block1ImgContainer: (_e = {
                width: "55%",
                height: "100%",
                right: 0,
                display: "flex",
                alignItems: "center"
            },
            _e[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _e),
        block1ImgContainerMobile: (_f = {
                position: "absolute",
                bottom: 0,
                width: "100%"
            },
            _f[theme.breakpoints.up("lg")] = {
                display: "none",
                position: function (_a) {
                    var fullHeight = _a.fullHeight;
                    return (fullHeight ? "absolute" : "relative");
                },
            },
            _f[theme.breakpoints.down("lg")] = {
                position: function (_a) {
                    var fullHeight = _a.fullHeight;
                    return (fullHeight ? "absolute" : "relative");
                },
            },
            _f[theme.breakpoints.down("md")] = {
                bottom: -40,
            },
            _f[theme.breakpoints.down("sm")] = {
                bottom: 0,
                position: "relative !important",
            },
            _f),
        block1MobileOverlay: (_g = {
                position: "absolute",
                bottom: "-70%",
                left: "-30vh",
                width: "180%"
            },
            _g[theme.breakpoints.down("sm")] = {
                width: "260%",
                bottom: "-120%",
                left: "-35vh",
            },
            _g),
        block1ImageMobile: (_h = {
                width: "100%",
                objectFit: "cover",
                zIndex: 10,
                position: "relative",
                marginTop: theme.spacing(8)
            },
            _h[theme.breakpoints.down("lg")] = {
                marginTop: function (_a) {
                    var fullHeight = _a.fullHeight;
                    return (fullHeight ? theme.spacing(8) : 0);
                },
            },
            _h[theme.breakpoints.down("sm")] = {
                height: "100%",
                marginTop: function (_a) {
                    var fullHeight = _a.fullHeight;
                    return fullHeight ? "".concat(theme.spacing(0), " !important") : "".concat(theme.spacing(8), " !important");
                },
            },
            _h),
        block1Image: {
            position: "relative",
            top: "5vh",
            width: function (_a) {
                var fullHeight = _a.fullHeight;
                return (fullHeight ? "95%" : "85%");
            },
            height: "90%",
            zIndex: 10,
            objectFit: "none",
        },
        block1Overlay: {
            position: "absolute",
            top: "-12vh",
        },
        block1BtnContainer: {
            display: "flex",
            marginTop: theme.spacing(3),
            gap: theme.spacing(1.5),
        },
        block1Icon: (_j = {
                marginLeft: theme.spacing(1)
            },
            _j[theme.breakpoints.down("sm")] = {
                display: "none",
            },
            _j),
    });
});
