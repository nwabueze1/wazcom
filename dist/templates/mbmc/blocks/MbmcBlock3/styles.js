import { makeStyles } from "@mui/styles";
export var useMbmcBlock3Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ({
        root: {
            position: "relative",
            overflow: "hidden",
            background: theme.design.colors.white,
            border: "1px solid transparent",
            transition: "all 0.3s ease-in",
        },
        block3Container: (_a = {
                position: "relative",
                maxWidth: theme.include.styles.mbmc.maxWidth,
                width: "85%",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                zIndex: 10
            },
            _a[theme.breakpoints.down("lg")] = {
                width: "90%",
            },
            _a),
        block3ImageContainer: (_b = {
                width: "50%"
            },
            _b[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _b),
        block3Image: {
            width: "95%",
            position: "relative",
            top: 60,
            objectFit: "cover",
        },
        block3Content: (_c = {
                position: "relative",
                top: "-10vh",
                width: "50%"
            },
            _c[theme.breakpoints.down("lg")] = {
                width: "100%",
                top: 0,
                paddingTop: theme.spacing(5),
                paddingBottom: theme.spacing(5),
            },
            _c[theme.breakpoints.down("sm")] = {
                width: "100%",
                top: 0,
                paddingTop: theme.spacing(7),
                paddingBottom: theme.spacing(7),
            },
            _c),
        block3Heading: (_d = {
                color: theme.design.colors.waz_primaryColor300,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                margin: 0,
                fontFamily: theme.design.font.lostaMasta,
                width: "90%",
                marginBottom: theme.spacing(2),
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _d[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 3,
                width: "100%",
                marginBottom: theme.spacing(5),
            },
            _d[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize * 3,
                width: "100%",
                marginBottom: theme.spacing(4),
            },
            _d[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize * 2,
                textTransform: "capitalize",
            },
            _d),
        block3ContentImageContainer: (_e = {
                position: "relative",
                display: "flex",
                justifyContent: "center"
            },
            _e[theme.breakpoints.up("lg")] = {
                display: "none",
            },
            _e["& img.hero"] = {
                position: "relative",
                zIndex: 10,
                width: "70%",
            },
            _e["& img.overlay"] = {
                position: "absolute",
                top: 0,
                left: "-10vw",
                width: "60%",
            },
            _e),
        block3Description: (_f = {
                color: theme.design.colors.waz_greyColor600,
                fontSize: theme.typography.fontSize + 4,
                fontFamily: theme.design.font.montserrat,
                lineHeight: 1.5,
                width: "90%",
                marginBottom: theme.spacing(2.5),
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _f[theme.breakpoints.down("lg")] = {
                width: "100%",
                margin: theme.spacing(2.5, 0),
            },
            _f),
        block3Ctas: {
            display: "flex",
            gap: theme.spacing(1.5),
        },
        block3ImageOverlay: (_g = {
                position: "absolute",
                top: "-24vh",
                left: "-20vw"
            },
            _g[theme.breakpoints.down("lg")] = {
                display: "none",
            },
            _g),
        block3ActiveElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    });
});
