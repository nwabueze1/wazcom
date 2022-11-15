import { makeStyles } from "@mui/styles";
export var useMbmcBlock8Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_orangeColor100,
                overflow: "hidden",
                boxSizing: "border-box",
                padding: theme.spacing(9, 0),
                width: "100%"
            },
            _a[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(2, 0),
                flexDirection: "column",
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(4, 0),
                height: "fit-content",
            },
            _a),
        headerContainer: {
            maxWidth: 1240,
            width: "90%",
            margin: "0 auto",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
        },
        headerContent: (_b = {
                width: "50%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                marginBottom: theme.spacing(2)
            },
            _b[theme.breakpoints.down("lg")] = {
                width: "100%",
            },
            _b),
        carousel: (_c = {
                width: "100%",
                height: "100%"
            },
            _c[theme.breakpoints.down(520)] = {
                width: "100%",
            },
            _c),
        headerTitle: (_d = {
                color: theme.design.colors.waz_white,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "normal normal medium 68px/100px Losta Masta;",
                margin: 0,
                textAlign: "center",
                marginBottom: theme.spacing(2),
                fontFamily: theme.design.font.lostaMasta,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _d[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize * 3,
            },
            _d[theme.breakpoints.down("lg")] = {
                marginTop: theme.spacing(3),
                fontSize: theme.typography.fontSize * 2,
            },
            _d[theme.breakpoints.down("md")] = {
                textAlign: "left",
                fontSize: theme.typography.fontSize * 2,
                fontWeight: 800,
                marginBottom: theme.spacing(1),
            },
            _d),
        headerDescription: (_e = {
                color: theme.design.colors.waz_orangeColor50,
                textAlign: "left",
                fontSize: theme.typography.fontSize + 6,
                width: "90%",
                fontFamily: theme.design.font.montserrat,
                opacity: 0.7,
                lineHeight: 1.4,
                border: "1px solid transparent",
                transition: "all 0.3s ease-in"
            },
            _e[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize + 6,
            },
            _e[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 6,
            },
            _e[theme.breakpoints.down("md")] = {
                width: "80%",
                fontSize: theme.typography.fontSize,
            },
            _e[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 4,
                width: "100%",
            },
            _e),
        headerCardContainer: (_f = {
                width: "50%",
                height: "auto",
                display: "block"
            },
            _f[theme.breakpoints.down("lg")] = {
                width: "100%",
            },
            _f[theme.breakpoints.down("sm")] = {
                display: "none",
            },
            _f),
        headerCardContainerMobile: (_g = {
                width: "50%",
                display: "none"
            },
            _g[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _g[theme.breakpoints.down("sm")] = {
                width: "100%",
                display: "block",
            },
            _g),
        scrollContainer: {
            overflowX: "scroll",
            width: "90%",
            "&::-webkit-scrollbar": {
                display: "none",
            },
        },
        overallContainer: {
            width: "100%",
        },
        carouselComponent: (_h = {
                width: "calc(100% - 20px)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: theme.spacing(1),
                marginLeft: theme.spacing(1)
            },
            _h[theme.breakpoints.down("sm")] = {
                gridTemplateColumns: "1fr",
            },
            _h),
        headerIcon: (_j = {
                marginLeft: theme.spacing(1)
            },
            _j[theme.breakpoints.down("md")] = {
                display: "none",
            },
            _j),
        navigationButton: {
            color: "black",
            fontSize: theme.typography.fontSize * 3,
        },
        arrow: {
            fontWeight: 900,
            fontSize: theme.typography.fontSize * 3,
        },
        block8ActiveElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    });
});
