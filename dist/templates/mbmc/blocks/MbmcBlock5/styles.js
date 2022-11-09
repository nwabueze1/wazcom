import { makeStyles } from "@mui/styles";
export var useMbmcBlock5Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d;
    return ({
        root: (_a = {
                backgroundColor: theme.design.colors.waz_primaryColor300,
                position: "relative",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                width: "100%",
                boxSizing: "border-box",
                padding: theme.spacing(5, 12)
            },
            _a[theme.breakpoints.down("lg")] = {
                padding: theme.spacing(5, 2),
            },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(2),
                height: "fit-content",
            },
            _a),
        mbmcContainer: {
            width: "100%",
        },
        footerContainer: (_b = {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: theme.spacing(1),
                wordBreak: "break-word"
            },
            _b[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
            },
            _b["& > div"] = {
                minWidth: 80,
                width: "100%",
            },
            _b),
        footerSectionTitle: {
            fontSize: theme.typography.fontSize + 6,
            color: theme.design.colors.waz_white,
            fontWeight: theme.typography.fontWeightBold,
            fontFamily: theme.design.font.montserrat,
            marginBottom: theme.spacing(2.5),
        },
        footerSocials: {
            display: "flex",
            alignItems: "flex-end",
            margin: theme.spacing(3, 0, 0, 0),
            gap: theme.spacing(2),
        },
        footerLogoSocials: {
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
        },
        footerSectionLink: {
            color: theme.design.colors.waz_white,
            fontSize: theme.typography.fontSize + 2,
            textDecoration: "none",
            fontFamily: theme.design.font.montserrat,
            opacity: 0.7,
        },
        footerLinks: {
            display: "flex",
            flexDirection: "column",
            gap: "20px",
        },
        footerNote: {
            width: "100%",
            textAlign: "center",
            backgroundColor: theme.design.colors.waz_primaryColor200,
            padding: theme.spacing(2, 0),
            color: theme.design.colors.waz_white,
            fontFamily: theme.design.font.montserrat,
            fontSize: theme.typography.fontSize,
            "& > span": {
                opacity: 0.5,
            },
        },
        logoContainer: (_c = {
                display: "flex",
                width: "10%",
                justifyContent: "center",
                alignItems: "center",
                "& > img": {
                    width: 50,
                    height: 50,
                }
            },
            _c[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(3, 0),
                height: "fit-content",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
            },
            _c),
        listContainer: (_d = {},
            _d[theme.breakpoints.down("sm")] = {
                marginBottom: theme.spacing(2),
            },
            _d),
        activeElement: {
            border: "1px dashed",
            borderColor: theme.design.colors.waz_primaryColor100,
        },
        footerLogo: {
            width: "57px",
            height: "53px",
        },
    });
});
