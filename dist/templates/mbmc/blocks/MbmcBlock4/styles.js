import { makeStyles } from "@mui/styles";
export var useMbmcBlock4Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_gold100,
                padding: theme.spacing(9, 0)
            },
            _a[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(5, 0),
            },
            _a),
        block6Container: {
            maxWidth: 1240,
            width: "90%",
            margin: "0 auto",
        },
        block4Content: (_b = {
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
        block4Heading: (_c = {
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
            _c[theme.breakpoints.down("lg")] = {
                fontSize: theme.typography.fontSize * 3,
                marginBottom: theme.spacing(2),
            },
            _c[theme.breakpoints.down("sm")] = {
                textAlign: "left",
                fontSize: theme.typography.fontSize * 2,
                fontWeight: 800,
            },
            _c),
        block4Description: (_d = {
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
            _d[theme.breakpoints.down("lg")] = {
                width: "80%",
            },
            _d[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 2,
            },
            _d[theme.breakpoints.down("sm")] = {
                width: "100%",
                textAlign: "center",
            },
            _d),
        block4CardContainer: (_e = {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: theme.spacing(2),
                flexWrap: "wrap"
            },
            _e[theme.breakpoints.down("lg")] = {
                justifyContent: "center",
            },
            _e[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
                alignItems: "center",
            },
            _e),
        block4Card: (_f = {
                width: "calc((100% - 32px) / 3)"
            },
            _f[theme.breakpoints.down("md")] = {
                width: "calc((100% - 16px) / 2)",
            },
            _f[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _f),
        block4CardHeading: {
            color: theme.design.colors.waz_orangeColor100,
        },
        block4ActiveElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
    });
});
