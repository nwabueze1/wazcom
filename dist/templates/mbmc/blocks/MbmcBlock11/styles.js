import { makeStyles } from "@mui/styles";
export var useMbmcBlock11Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_white,
                position: "relative",
                display: "flex",
                alignItems: "center",
                boxSizing: "border-box",
                justifyContent: "space-between",
                flexDirection: function (_a) {
                    var flexDirection = _a.flexDirection;
                    return flexDirection;
                },
                width: "100%",
                padding: theme.spacing(5, 12)
            },
            _a[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(5),
                flexDirection: "column",
                width: "100%",
            },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(4),
                height: "100%",
                overflow: "visible",
            },
            _a),
        headerContent: (_b = {
                width: "46%"
            },
            _b[theme.breakpoints.down("md")] = {
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                overflowX: "hidden",
            },
            _b),
        headerTitle: (_c = {
                color: theme.design.colors.waz_black,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "normal normal medium 68px/100px Losta Masta;",
                margin: 0,
                fontFamily: theme.design.font.lostaMasta
            },
            _c[theme.breakpoints.down("lg")] = {
                marginTop: theme.spacing(3),
                marginBottom: theme.spacing(3),
                fontSize: theme.typography.fontSize * 3,
            },
            _c[theme.breakpoints.down("sm")] = {
                width: "100%",
                textAlign: "left",
                fontWeight: 800,
                marginBottom: theme.spacing(3),
            },
            _c),
        headerDescription: (_d = {
                color: theme.design.colors.waz_greyColor600,
                fontSize: theme.typography.fontSize + 6,
                fontFamily: theme.design.font.montserrat,
                lineHeight: 1.5
            },
            _d[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _d[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize,
            },
            _d[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize * 1.5,
                textAlign: "left",
            },
            _d),
        heroContainer: (_e = {
                height: 519,
                width: "48%",
                position: "relative",
                display: "flex",
                alignItems: "center"
            },
            _e[theme.breakpoints.down("lg")] = {
                height: 419,
            },
            _e[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _e),
        heroContainerMobile: (_f = {
                marginTop: theme.spacing(8),
                width: "120%",
                display: "none",
                alignItems: "center"
            },
            _f[theme.breakpoints.down("md")] = {
                display: "flex",
                marginTop: theme.spacing(0),
            },
            _f),
        heroImageMobile: (_g = {
                width: "90%",
                marginTop: theme.spacing(-10),
                borderRadius: theme.spacing(0.5)
            },
            _g[theme.breakpoints.down("lg")] = {
                marginTop: theme.spacing(0),
            },
            _g),
        heroImage: {
            width: "100%",
            height: "100%",
            borderRadius: theme.spacing(0.5),
        },
        headerParagraph: {
            "& > p": {
                margin: theme.spacing(2, 0),
            },
        },
        headerBtnContainer: {
            display: "flex",
            margin: theme.spacing(2, 0),
        },
        headerIcon: (_h = {
                marginLeft: theme.spacing(1)
            },
            _h[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _h),
    });
});
