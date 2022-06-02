import makeStyles from "@mui/styles/makeStyles";
export var useGelloStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return ({
        root: (_a = {
                width: "90%",
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
                fontFamily: theme.design.font.nunitoSans,
                maxWidth: 1440,
                margin: "auto",
                padding: theme.spacing(6.5, 0)
            },
            _a[theme.breakpoints.down("md")] = {
                flexDirection: "column",
            },
            _a),
        contentContainer: (_b = {
                width: "67%"
            },
            _b[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _b),
        fullContent: {
            width: "100%",
        },
        relatedArticleContainer: (_c = {
                width: "30%"
            },
            _c[theme.breakpoints.down("md")] = {
                width: "100%",
                marginTop: theme.spacing(7),
            },
            _c),
        imgContainer: (_d = {
                position: "relative",
                width: "100%",
                height: 400
            },
            _d[theme.breakpoints.down("md")] = {
                height: "432px",
            },
            _d[theme.breakpoints.down("sm")] = {
                height: "220px",
            },
            _d),
        featuredImg: {
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
        },
        title: (_e = {
                lineHeight: "40px",
                fontSize: theme.typography.fontSize * 3,
                fontWeight: theme.typography.fontWeightBold
            },
            _e[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize * 2,
                lineHeight: "36px",
            },
            _e),
        avatarContainer: {
            position: "relative",
            height: 32,
            width: 32,
        },
        avatarImage: {
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            objectFit: "cover",
        },
        written: {
            fontStyle: "italic",
            color: theme.design.colors.grey800,
            fontSize: theme.typography.fontSize + 2,
        },
        writersName: {
            color: theme.design.colors.black,
            fontStyle: "normal",
            textTransform: "capitalize",
        },
        bulletPoint: {
            height: 8,
            width: 8,
            borderRadius: "50%",
            border: "1px solid ".concat(theme.design.colors.grey800),
        },
        date: {
            fontSize: theme.typography.fontSize,
            lineHeight: "16px",
            marginLeft: theme.spacing(0.5),
        },
        dateWritten: {
            display: "flex",
            alignItems: "center",
        },
        articleInfo: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1.5),
        },
        line: {
            margin: theme.spacing(3, 0),
        },
        content: (_f = {
                color: theme.design.colors.grey1100,
                lineHeight: "26px",
                width: "80%",
                margin: "auto",
                "& p": {
                    margin: theme.spacing(1.5, 0),
                    "& img": {
                        margin: theme.spacing(6, "auto"),
                        maxWidth: "100%",
                        height: "100%",
                        display: "flex",
                    }
                },
                "& h1, h2, h3, h4, h5, h6": {
                    margin: theme.spacing(2.5, 0)
                }
            },
            _f[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _f),
        relatedPostHeader: {
            fontSize: theme.typography.fontSize + 8,
            fontWeight: theme.typography.fontWeightBold,
            lineHeight: "27px",
        },
        postLine: {
            marginBottom: theme.spacing(4),
        },
        relatedPosts: (_g = {},
            _g[theme.breakpoints.down("md")] = {
                display: "flex",
                flexWrap: "wrap",
                gap: theme.spacing(3),
            },
            _g),
        shareContainer: {
            display: "flex",
            justifyContent: "space-between",
        },
        shareLine: {
            width: "100%",
            height: 0,
        },
        icons: (_h = {
                display: "flex",
                alignItems: "center",
                gap: theme.spacing(2),
                padding: theme.spacing(0, 4.5)
            },
            _h[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(0, 4),
            },
            _h),
        shareText: {
            fontSize: theme.typography.fontSize + 2,
            color: theme.design.colors.grey700,
            textAlign: "center",
            marginTop: theme.spacing(0.5),
        },
        shareRoot: (_j = {
                marginTop: theme.spacing(7)
            },
            _j[theme.breakpoints.down("sm")] = {
                marginTop: theme.spacing(3, 0),
            },
            _j),
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
