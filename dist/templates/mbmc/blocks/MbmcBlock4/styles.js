import { makeStyles } from "@mui/styles";
export var useMbmcBlock4Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_gold100,
                padding: theme.spacing(9, 0)
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(5, 0),
            },
            _a),
        block6Container: (_b = {
                maxWidth: theme.include.styles.mbmc.maxWidth,
                width: "85%",
                margin: "0 auto"
            },
            _b[theme.breakpoints.down("lg")] = {
                width: "90%",
            },
            _b),
        block4Content: (_c = {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                marginBottom: theme.spacing(2)
            },
            _c[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _c[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _c),
        block4Heading: (_d = {
                color: theme.design.colors.waz_primaryColor200,
                fontSize: theme.typography.fontSize * 4,
                fontFamily: theme.design.font.lostaMasta,
                letterSpacing: 0,
                textTransform: "capitalize",
                margin: 0,
                textAlign: "center",
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _d[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 3,
                marginBottom: theme.spacing(2),
            },
            _d[theme.breakpoints.down("sm")] = {
                textAlign: "left",
                fontSize: theme.typography.fontSize * 2,
                fontWeight: 800,
            },
            _d),
        block4Description: (_e = {
                color: theme.design.colors.waz_greyColor600,
                textAlign: "center",
                fontSize: theme.typography.fontSize + 6,
                width: "45%",
                fontFamily: theme.design.font.montserrat,
                marginBottom: theme.spacing(3.5),
                lineHeight: 1.5,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _e[theme.breakpoints.down("lg")] = {
                width: "80%",
            },
            _e[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 2,
            },
            _e[theme.breakpoints.down("sm")] = {
                width: "100%",
                textAlign: "center",
            },
            _e),
        block4CardContainer: (_f = {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: theme.spacing(2),
                flexWrap: "wrap",
                position: "relative"
            },
            _f[theme.breakpoints.down("lg")] = {
                justifyContent: "center",
            },
            _f[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
                alignItems: "center",
            },
            _f),
        block4CardFlame: (_g = {
                position: "absolute",
                top: "50%",
                left: -40,
                width: 62
            },
            _g[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _g),
        block4CardFlameRight: {
            left: "unset",
            right: -40,
        },
        block4Card: (_h = {
                width: "calc((100% - 32px) / 3)",
                zIndex: 2
            },
            _h[theme.breakpoints.down("md")] = {
                width: "calc((100% - 16px) / 2)",
            },
            _h[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _h),
        block4CardHeading: {
            color: theme.design.colors.waz_orangeColor100,
        },
        block4ActiveElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    });
});
