import makeStyles from "@mui/styles/makeStyles";
export var usePearlStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ({
        root: {
            margin: theme.spacing(0, "auto"),
            fontFamily: theme.design.font.inter,
        },
        hero: (_a = {
                height: 590,
                position: "relative"
            },
            _a[theme.breakpoints.down("sm")] = {
                height: 432,
            },
            _a),
        featuredImage: {
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
        },
        heroContent: (_b = {
                zIndex: 3,
                padding: theme.spacing(0, 6.5),
                position: "absolute",
                bottom: "10%",
                color: theme.design.colors.waz_white
            },
            _b[theme.breakpoints.down("md")] = {
                padding: theme.spacing(0, 4),
            },
            _b[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(0, 2),
            },
            _b),
        tag: {
            color: theme.design.colors.waz_white,
            fontSize: theme.typography.fontSize,
            padding: theme.spacing(1, 1.5),
            borderRadius: "3px",
            border: "1px solid ".concat(theme.design.colors.waz_white),
        },
        tags: {
            display: "flex",
            gap: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        title: (_c = {
                fontWeight: 900,
                fontSize: theme.typography.fontSize + 28,
                lineHeight: "60px"
            },
            _c[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 12,
                lineHeight: "36px",
            },
            _c),
        contentContainer: (_d = {
                display: "flex",
                margin: theme.spacing(0, 6.5),
                gap: theme.spacing(8)
            },
            _d[theme.breakpoints.down("md")] = {
                flexDirection: "column",
                margin: theme.spacing(0, 4),
            },
            _d[theme.breakpoints.down("sm")] = {
                margin: theme.spacing(0, 2),
            },
            _d),
        content: (_e = {
                fontSize: theme.typography.fontSize + 6,
                lineHeight: "32px"
            },
            _e[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _e),
        leftColumn: (_f = {
                width: "60%"
            },
            _f[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _f),
        overlay: {
            position: "absolute",
            height: "100%",
            width: "100%",
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 35.58%, rgba(0, 0, 0, 0.72) 71.58%, rgba(0, 0, 0, 0.97) 100%)",
        },
        socialIcon: {
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid ".concat(theme.design.colors.waz_grey300),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.design.colors.waz_primaryBlack,
            fontSize: theme.typography.fontSize + 8,
        },
        iconContainer: {
            display: "flex",
            justifyContent: "center",
            gap: theme.spacing(1),
            margin: theme.spacing(4, 0),
        },
        rightColumn: (_g = {
                width: "40%"
            },
            _g[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _g),
        postedTime: {
            fontSize: theme.typography.fontSize,
        },
        relatedPost: {
            fontSize: theme.typography.fontSize + 8,
            lineHeight: "24px",
            textTransform: "uppercase",
            fontWeight: theme.typography.fontWeightMedium,
            margin: theme.spacing(4, 0, 2, 0),
        },
        footer: {
            marginTop: theme.spacing(10),
        },
    });
});
