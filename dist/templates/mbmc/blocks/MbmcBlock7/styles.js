import { makeStyles } from "@mui/styles";
export var useMbmcBlock7Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_white,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
                boxSizing: "border-box",
                padding: theme.spacing(6, 12)
            },
            _a[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(5, 10),
            },
            _a[theme.breakpoints.down("md")] = {
                height: "100%",
                padding: theme.spacing(2, 4),
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(4),
                height: "fit-content",
            },
            _a),
        headerContent: (_b = {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                marginBottom: theme.spacing(2)
            },
            _b[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _b),
        headerTitle: (_c = {
                color: theme.design.colors.waz_primaryColor300,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "normal normal medium 68px/100px Losta Masta;",
                margin: 0,
                textAlign: "center",
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(2),
                fontFamily: theme.design.font.lostaMasta
            },
            _c[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize * 3,
            },
            _c[theme.breakpoints.down("lg")] = {
                marginTop: theme.spacing(3),
                fontSize: theme.typography.fontSize * 2,
            },
            _c[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize * 2,
            },
            _c[theme.breakpoints.down("sm")] = {
                textAlign: "left",
                fontSize: theme.typography.fontSize * 1.5,
                fontWeight: 800,
                marginBottom: theme.spacing(1),
                width: "100%",
            },
            _c),
        headerDescription: (_d = {
                color: theme.design.colors.waz_greyColor600,
                textAlign: "center",
                fontSize: theme.typography.fontSize + 6,
                width: "38%",
                fontFamily: theme.design.font.montserrat,
                marginBottom: theme.spacing(6)
            },
            _d[theme.breakpoints.down(1450)] = {
                fontSize: theme.typography.fontSize + 3,
            },
            _d[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize + 3,
                marginBottom: theme.spacing(4),
                width: "70%",
            },
            _d[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 2,
                marginBottom: theme.spacing(2),
            },
            _d[theme.breakpoints.down("sm")] = {
                width: "100%",
                textAlign: "left",
            },
            _d),
        headerCardContainer: (_e = {
                width: "100%",
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gap: theme.spacing(2)
            },
            _e[theme.breakpoints.down("lg")] = {
                display: "none",
                width: "100%",
            },
            _e),
        imageContainer: {
            width: "100%",
            borderRadius: 4,
        },
        flexGrow: {
            gridRow: "1 / span 2",
            gridColumn: "3/3",
            height: "100%",
        },
        smallImageContainer: {
            height: "340px",
        },
        mobileImageContainer: {
            width: "100%",
            height: "116px",
            borderRadius: 4,
        },
        mobileCardContainer: (_f = {
                width: "100%",
                display: "none",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: theme.spacing(1),
                height: "100%"
            },
            _f[theme.breakpoints.down("lg")] = {
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
            },
            _f),
    });
});
