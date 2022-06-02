import makeStyles from "@mui/styles/makeStyles";
export var useNovalStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return ({
        root: (_a = {
                width: "100%",
                maxWidth: 1200,
                padding: theme.spacing(5.5, 0),
                height: "100%",
                fontFamily: theme.design.font.dmSans,
                margin: "auto"
            },
            _a[theme.breakpoints.down("md")] = {
                width: "90%",
                margin: "auto",
            },
            _a),
        featuredImageContainer: (_b = {
                width: "47%",
                height: 360,
                position: "relative"
            },
            _b[theme.breakpoints.down("md")] = {
                width: "100%",
                height: 432,
            },
            _b[theme.breakpoints.down("sm")] = {
                height: 220,
            },
            _b),
        featuredImage: {
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
        },
        header: (_c = {
                display: "flex",
                justifyContent: "space-between"
            },
            _c[theme.breakpoints.down("md")] = {
                flexDirection: "column",
            },
            _c),
        tag: {
            padding: theme.spacing(0.5),
            fontSize: theme.typography.fontSize,
            textTransform: "capitalize",
            borderRadius: 4,
            background: theme.design.colors.grey900,
            color: theme.design.colors.grey1000,
        },
        tags: {
            display: "flex",
            gap: theme.spacing(1),
        },
        blogInfoContainer: (_d = {
                width: "49%"
            },
            _d[theme.breakpoints.down("md")] = {
                width: "100%",
                margin: theme.spacing(6, 0, 1, 0),
            },
            _d),
        title: (_e = {
                fontSize: theme.typography.fontSize * 3,
                fontWeight: theme.typography.fontWeightBold,
                lineHeight: "48px",
                marginTop: theme.spacing(1)
            },
            _e[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize * 2,
                lineHeight: "28px",
            },
            _e),
        avatar: {
            position: "relative",
            height: 32,
            width: 32,
            borderRadius: "50%",
        },
        avatarImage: {
            borderRadius: "50%",
        },
        writtenBy: {
            fontStyle: "italic",
            color: theme.design.colors.grey700,
            fontSize: theme.typography.fontSize + 2,
            textTransform: "capitalize",
        },
        author: {
            fontStyle: "normal",
            color: theme.design.colors.black,
        },
        blogInfo: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1.5),
            marginTop: theme.spacing(3),
        },
        postedTime: (_f = {
                padding: theme.spacing(0, 1.5),
                borderLeft: "1px solid ".concat(theme.design.colors.grey800),
                borderRight: "1px solid ".concat(theme.design.colors.grey800)
            },
            _f[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize,
            },
            _f),
        contentContainer: (_g = {
                display: "flex",
                justifyContent: "space-between",
                marginTop: theme.spacing(6)
            },
            _g[theme.breakpoints.down("md")] = {
                flexDirection: "column",
            },
            _g[theme.breakpoints.down("sm")] = {
                marginTop: theme.spacing(3),
            },
            _g),
        content: (_h = {
                color: theme.design.colors.primaryBlack,
                fontSize: theme.typography.fontSize + 6,
                width: "60%",
                lineHeight: "28px"
            },
            _h[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _h),
        fullContentWidth: {
            width: "100%",
        },
        relatedArticles: (_j = {
                width: "34%",
                justifyContent: "space-between"
            },
            _j[theme.breakpoints.down("md")] = {
                width: "100%",
                margin: theme.spacing(7, 0, 7, 0),
            },
            _j),
        relatedPost: {
            fontSize: theme.typography.fontSize + 8,
            fontWeight: theme.typography.fontWeightMedium,
            marginBottom: theme.spacing(3),
        },
        sharePost: {
            fontSize: theme.typography.fontSize,
            padding: theme.spacing(2, 0, 1, 0),
        },
        posts: (_k = {},
            _k[theme.breakpoints.down("md")] = {
                display: "flex",
                flexWrap: "wrap",
                gap: theme.spacing(3),
            },
            _k),
        shareContainer: {
            marginTop: theme.spacing(2),
        },
        socialIcons: {
            display: "flex",
            gap: theme.spacing(2),
        },
        shareText: {
            fontSize: theme.typography.fontSize,
            color: theme.design.colors.grey800,
            marginBottom: theme.spacing(1),
        },
        defaultAvatar: {
            height: 32,
            width: 32,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: theme.typography.fontSize + 8,
            color: theme.design.colors.white,
            background: theme.design.colors.orange,
        },
    });
});
