import makeStyles from "@mui/styles/makeStyles";
export var useBloomyStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ({
        root: {
            fontFamily: theme.design.font.inter,
        },
        container: {
            width: "95%",
            maxWidth: 1440,
            margin: theme.spacing(9, "auto"),
        },
        header: (_a = {
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                position: "relative"
            },
            _a[theme.breakpoints.down("md")] = {
                flexDirection: "column",
            },
            _a),
        point: {
            width: 4,
            height: 4,
            background: theme.design.colors.waz_grey600,
            borderRadius: "50%",
        },
        imgContainer: (_b = {
                position: "relative",
                width: "62%",
                height: 500
            },
            _b[theme.breakpoints.down("md")] = {
                width: "95%",
                margin: "0 auto",
            },
            _b[theme.breakpoints.down("sm")] = {
                height: 320,
            },
            _b),
        featuredImg: {
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
        },
        articleInfoContainer: (_c = {
                height: 435,
                width: "65%",
                background: theme.design.colors.waz_white,
                position: "absolute",
                left: 0,
                top: "6%"
            },
            _c[theme.breakpoints.down("md")] = {
                position: "relative",
                width: "90%",
                margin: theme.spacing(-4, "auto", 0),
                height: 315,
            },
            _c),
        articleInfo: (_d = {
                padding: theme.spacing(7, 4)
            },
            _d[theme.breakpoints.down("md")] = {
                padding: theme.spacing(4, 3),
            },
            _d[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(4, 1.5),
            },
            _d),
        tag: {
            fontSize: theme.typography.fontSize,
            color: theme.design.colors.waz_brown,
            width: "fit-content",
            padding: theme.spacing(0.5, 1),
            border: "1px solid ".concat(theme.design.colors.waz_brown),
            borderRadius: 3,
        },
        tags: {
            display: "flex",
            gap: theme.spacing(1),
        },
        articleTitle: (_e = {
                fontSize: theme.typography.fontSize * 4,
                margin: theme.spacing(1.5, 0, 2, 0),
                lineHeight: "64px"
            },
            _e[theme.breakpoints.down("md")] = {
                fontSize: theme.typography.fontSize + 28,
                lineHeight: "60px",
            },
            _e[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 16,
                lineHeight: "40px",
            },
            _e),
        socialIcons: {
            display: "flex",
            gap: theme.spacing(2),
        },
        avatar: {
            position: "relative",
            height: 24,
            width: 24,
            borderRadius: "50%",
            background: theme.design.colors.waz_brown,
        },
        avatarImage: {
            borderRadius: "50%",
        },
        blogInfo: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1.5),
            margin: theme.spacing(2, 0),
        },
        defaultAvatar: {
            height: 32,
            width: 32,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: theme.typography.fontSize + 4,
            color: theme.design.colors.waz_white,
            background: theme.design.colors.waz_orange,
        },
        writtenBy: {
            fontSize: theme.typography.fontSize + 2,
            color: theme.design.colors.waz_grey1,
        },
        postedTime: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: theme.spacing(1),
            color: theme.design.colors.waz_grey1,
            fontSize: theme.typography.fontSize + 2,
        },
        content: (_f = {
                padding: theme.spacing(8, 0),
                color: theme.design.colors.waz_grey1,
                fontSize: theme.typography.fontSize + 6,
                width: "70%",
                margin: theme.spacing(0, "auto"),
                "& p": {
                    margin: theme.spacing(1.5, 0),
                    lineHeight: "32px",
                },
                "& h1, h2, h3, h4, h5, h6": {
                    color: theme.design.colors.waz_primaryBlack,
                    margin: theme.spacing(2.5, 0),
                },
                "& img": {
                    margin: theme.spacing(4, "auto"),
                    maxWidth: "100%",
                    height: "100%",
                    display: "flex",
                }
            },
            _f[theme.breakpoints.down("md")] = {
                width: "95%",
                padding: theme.spacing(4, 0),
            },
            _f),
        posts: {
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: theme.spacing(3),
        },
        relatedPostHeader: (_g = {
                display: "flex",
                marginBottom: theme.spacing(5),
                alignItems: "center",
                gap: theme.spacing(2)
            },
            _g[theme.breakpoints.down("md")] = {
                width: "95%",
                margin: theme.spacing(0, "auto", 5),
            },
            _g),
        relatedPostHeaderTitle: {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.fontSize + 8,
            lineHeight: "24px",
            color: theme.design.colors.waz_primaryBlack,
            textTransform: "uppercase",
        },
        hr: (_h = {
                color: theme.design.colors.waz_grey700,
                width: "85%",
                height: 0.1,
                borderBottom: "0.2px solid ".concat(theme.design.colors.waz_grey700)
            },
            _h[theme.breakpoints.down("md")] = {
                width: "70%",
            },
            _h[theme.breakpoints.down("sm")] = {
                width: "50%",
            },
            _h),
        blogInfoContainer: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(0.5),
        },
        footer: {
            marginTop: theme.spacing(10),
        },
    });
});
