import { makeStyles } from "@mui/styles";
export var useMbmcBlock11Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return ({
        root: (_a = {
                backgroundColor: function (_a) {
                    var hasBackground = _a.hasBackground;
                    return hasBackground ? theme.design.colors.waz_orangeColor50 : theme.design.colors.waz_white;
                },
                position: "relative",
                display: "flex",
                alignItems: "center",
                boxSizing: "border-box",
                justifyContent: "space-between",
                padding: theme.spacing(10, 0)
            },
            _a[theme.breakpoints.down("lg")] = {
                flexDirection: "column",
            },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(4, 0),
                height: "100%",
                overflow: "visible",
            },
            _a),
        block11Container: (_b = {
                maxWidth: theme.include.styles.mbmc.maxWidth,
                width: "85%",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: function (_a) {
                    var layout = _a.layout;
                    return layout;
                }
            },
            _b[theme.breakpoints.down("lg")] = {
                width: "90%",
            },
            _b),
        block11Content: (_c = {
                width: "46%"
            },
            _c[theme.breakpoints.down("md")] = {
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: "column",
                overflowX: "hidden",
            },
            _c),
        block11Heading: (_d = {
                color: theme.design.colors.waz_black,
                fontSize: theme.typography.fontSize * 3.5,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "normal normal medium 68px/100px Losta Masta;",
                margin: 0,
                fontFamily: theme.design.font.lostaMasta,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in",
                width: "fit-content"
            },
            _d[theme.breakpoints.down("lg")] = {
                marginBottom: theme.spacing(3),
                fontSize: theme.typography.fontSize * 3,
            },
            _d[theme.breakpoints.down("sm")] = {
                width: "100%",
                textAlign: "left",
                fontWeight: 800,
                marginBottom: theme.spacing(3),
                fontSize: theme.typography.fontSize * 2,
            },
            _d),
        block11Description: (_e = {
                color: theme.design.colors.waz_greyColor600,
                fontSize: theme.typography.fontSize + 4,
                fontFamily: theme.design.font.montserrat,
                lineHeight: 1.5,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _e[theme.breakpoints.down("sm")] = {
                textAlign: "left",
                fontSize: theme.typography.fontSize + 2,
            },
            _e),
        heroContainer: (_f = {
                width: "48%",
                position: "relative",
                display: "flex",
                alignItems: "center"
            },
            _f[theme.breakpoints.down("lg")] = {
                minHeight: 419,
            },
            _f[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _f),
        heroContainerMobile: (_g = {
                marginTop: theme.spacing(8),
                width: "120%",
                display: "none",
                alignItems: "center"
            },
            _g[theme.breakpoints.down("md")] = {
                display: "flex",
                marginTop: theme.spacing(0),
            },
            _g),
        heroImageMobile: (_h = {
                width: "90%",
                marginTop: theme.spacing(-10),
                borderRadius: theme.spacing(0.5)
            },
            _h[theme.breakpoints.down("lg")] = {
                marginTop: theme.spacing(0),
            },
            _h),
        heroImage: (_j = {
                width: "100%",
                height: "100%",
                minHeight: 500,
                borderRadius: theme.spacing(0.5),
                objectFit: "cover"
            },
            _j[theme.breakpoints.down("lg")] = {
                minHeight: 419,
            },
            _j),
        block11Paragraph: {
            "& > p": {
                margin: theme.spacing(2, 0),
            },
        },
        block11BtnContainer: (_k = {
                display: "flex",
                margin: theme.spacing(2, 0)
            },
            _k[theme.breakpoints.down("md")] = {
                margin: 0,
            },
            _k),
        block11Icon: (_l = {
                marginLeft: theme.spacing(1)
            },
            _l[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _l),
        block11ActiveElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    });
});
