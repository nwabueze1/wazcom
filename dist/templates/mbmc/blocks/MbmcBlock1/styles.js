import { makeStyles } from "@mui/styles";
export var useMbmcBlock1Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_white,
                height: function (_a) {
                    var fullHeight = _a.fullHeight;
                    return (fullHeight ? "100vh" : "70vh");
                },
                position: "relative",
                overflow: "hidden",
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _a[theme.breakpoints.down("lg")] = {
                height: function (_a) {
                    var fullHeight = _a.fullHeight;
                    return (fullHeight ? "100vh" : "80vh");
                },
            },
            _a),
        block1Container: (_b = {
                maxWidth: 1240,
                width: "90%",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                height: "100%"
            },
            _b[theme.breakpoints.down("lg")] = {
                flexDirection: "column",
            },
            _b[theme.breakpoints.down("sm")] = {
                paddingTop: theme.spacing(10),
            },
            _b),
        block1Content: (_c = {
                width: "45%"
            },
            _c[theme.breakpoints.down("lg")] = {
                position: 'relative',
                top: 80,
                width: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                textAlign: "center",
            },
            _c[theme.breakpoints.down("sm")] = {
                top: 0,
            },
            _c),
        block1Heading: (_d = {
                color: theme.design.colors.waz_primaryColor300,
                fontSize: theme.typography.fontSize * 6,
                fontFamily: theme.design.font.lostaMasta,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "normal normal medium 68px/100px Losta Masta;",
                margin: 0,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in",
                zIndex: 10
            },
            _d[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 4 + 4,
            },
            _d[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize * 3 + 10,
            },
            _d[theme.breakpoints.down("sm")] = {
                textAlign: "center",
                fontWeight: 800,
                marginBottom: theme.spacing(1),
            },
            _d),
        block1Description: (_e = {
                color: theme.design.colors.waz_greyColor600,
                fontSize: theme.typography.fontSize + 6,
                fontFamily: theme.design.font.montserrat,
                lineHeight: 1.5,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _e[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize + 8,
            },
            _e[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 8,
                width: "80%",
            },
            _e[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 6,
            },
            _e[theme.breakpoints.down("sm")] = {
                textAlign: "center",
                width: "100%",
            },
            _e),
        block1ImgContainer: (_f = {
                width: "55%",
                height: "100%",
                right: 0,
                display: "flex",
                alignItems: "center"
            },
            _f[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _f),
        block1ImgContainerMobile: (_g = {
                bottom: 0,
                width: "100%",
                display: "none"
            },
            _g[theme.breakpoints.down("lg")] = {
                display: "block",
                position: "relative",
            },
            _g[theme.breakpoints.down("md")] = {
                bottom: -40,
            },
            _g[theme.breakpoints.down("sm")] = {
                bottom: 0,
                position: "relative !important",
            },
            _g),
        block1MobileOverlay: (_h = {
                position: "absolute",
                bottom: "-70%",
                left: "-30vh",
                width: "180%"
            },
            _h[theme.breakpoints.down("sm")] = {
                width: "260%",
                bottom: "-120%",
                left: "-35vh",
            },
            _h),
        block1ImageMobile: (_j = {
                width: "100%",
                objectFit: "cover",
                zIndex: 10,
                position: "relative",
                marginTop: theme.spacing(8)
            },
            _j[theme.breakpoints.down("lg")] = {
                marginTop: function (_a) {
                    var fullHeight = _a.fullHeight;
                    return (fullHeight ? theme.spacing(5) : 0);
                },
            },
            _j[theme.breakpoints.down("sm")] = {
                height: "100%",
                marginTop: 0,
            },
            _j),
        block1Image: {
            position: "relative",
            top: "5vh",
            width: function (_a) {
                var fullHeight = _a.fullHeight;
                return (fullHeight ? "95%" : "85%");
            },
            height: "90%",
            zIndex: 10,
            objectFit: function (_a) {
                var fullHeight = _a.fullHeight;
                return (fullHeight ? "none" : "contain");
            },
        },
        block1Overlay: {
            position: "absolute",
            top: "-3vw",
        },
        block1BtnContainer: {
            display: "flex",
            marginTop: theme.spacing(3),
            gap: theme.spacing(1.5),
        },
        block1Icon: (_k = {
                marginLeft: theme.spacing(1)
            },
            _k[theme.breakpoints.down("sm")] = {
                display: "none",
            },
            _k),
        block1ActiveElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    });
});
