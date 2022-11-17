import { makeStyles } from "@mui/styles";
export var useMbmcBlock5Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ({
        root: {
            backgroundColor: theme.design.colors.waz_primaryColor300,
            position: "relative",
            width: "100%",
        },
        mbmcContainer: (_a = {
                maxWidth: 1240,
                width: "90%",
                margin: "0 auto",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                padding: theme.spacing(5, 0)
            },
            _a[theme.breakpoints.down("md")] = {
                padding: theme.spacing(5, 0, 2, 0),
            },
            _a),
        footerContainer: (_b = {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: theme.spacing(1),
                wordBreak: "break-word"
            },
            _b[theme.breakpoints.down("md")] = {
                flexDirection: "column",
            },
            _b),
        footerSectionTitle: (_c = {
                fontSize: theme.typography.fontSize + 6,
                color: theme.design.colors.waz_white,
                fontWeight: theme.typography.fontWeightBold,
                fontFamily: theme.design.font.montserrat,
                marginBottom: theme.spacing(2.5)
            },
            _c[theme.breakpoints.down("md")] = {
                marginBottom: theme.spacing(2),
            },
            _c),
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
        footerSection: (_d = {},
            _d[theme.breakpoints.down("md")] = {
                marginBottom: theme.spacing(3),
            },
            _d),
        footerSectionLinkIcon: {
            color: theme.design.colors.waz_white,
            fontSize: theme.typography.fontSize + 8,
            opacity: 1,
            marginRight: theme.spacing(1),
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
            width: "fit-content",
        },
        footerNote: (_e = {
                width: "100%",
                textAlign: "center",
                backgroundColor: theme.design.colors.waz_primaryColor200,
                color: theme.design.colors.waz_white,
                fontFamily: theme.design.font.montserrat,
                fontSize: theme.typography.fontSize,
                padding: theme.spacing(2, 0),
                boxSizing: 'border-box',
                lineHeight: 1.9
            },
            _e[theme.breakpoints.down("md")] = {
                padding: theme.spacing(2, "5%", 2, "5%"),
            },
            _e),
        footerNoteText: {
            opacity: 0.5,
        },
        footerLogoParent: (_f = {
                "& > img": {
                    maxWidth: 100,
                    maxHeight: 100,
                }
            },
            _f[theme.breakpoints.down("md")] = {
                marginBottom: theme.spacing(2),
            },
            _f),
        listContainer: (_g = {},
            _g[theme.breakpoints.down("sm")] = {
                marginBottom: theme.spacing(2),
            },
            _g),
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
