import makeStyles from "@mui/styles/makeStyles";
export var usePoliticoStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f;
    return ({
        root: {
            marginBottom: theme.spacing(4),
            fontFamily: theme.design.font.bitter,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: theme.design.colors.waz_peach,
        },
        tag: {
            color: theme.design.colors.waz_red,
        },
        content: (_a = {
                width: "60%",
                marginTop: theme.spacing(7)
            },
            _a[theme.breakpoints.down("md")] = {
                width: "90%",
            },
            _a),
        tagContainer: {
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing(2),
            marginBottom: theme.spacing(3),
            textTransform: "capitalize",
        },
        headerImage: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        postContent: {
            fontSize: theme.typography.fontSize + 4,
            lineHeight: "32px",
            marginTop: theme.spacing(4),
        },
        title: {
            fontSize: theme.typography.fontSize + 28,
            fontWeight: theme.typography.fontWeightBold,
            lineHeight: "60px",
            marginBottom: theme.spacing(5),
        },
        date: (_b = {
                fontSize: theme.typography.fontSize,
                fontWeight: theme.typography.fontWeightRegular,
                marginBottom: theme.spacing(-4),
                marginTop: theme.spacing(1)
            },
            _b[theme.breakpoints.down("sm")] = {
                marginBottom: theme.spacing(0),
                marginTop: theme.spacing(0),
            },
            _b),
        circle: {
            color: theme.design.colors.waz_red,
            height: "7px",
            width: "7px",
        },
        socialIcons: {
            width: "40px",
            height: "40px",
            borderRadius: "20px",
            backgroundColor: theme.design.colors.waz_grey300,
            margin: theme.spacing(1),
            display: "flex",
            justifyContent: "center",
        },
        authorInfo: (_c = {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: theme.spacing(2)
            },
            _c[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
            },
            _c),
        socialIconsContainer: (_d = {
                display: "flex",
                flexDirection: "row",
                marginTop: theme.spacing(-2),
                marginBottom: theme.spacing(2)
            },
            _d[theme.breakpoints.down("sm")] = {
                marginTop: theme.spacing(1.5),
                marginLeft: theme.spacing(-1),
                marginBottom: theme.spacing(1.5),
            },
            _d),
        icon: {
            margin: theme.spacing(0, "auto"),
            marginTop: theme.spacing(1.5),
        },
        relatedPosts: {
            width: "100%",
        },
        relatedPostsContainer: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
        },
        relatedPostsHeader: (_e = {
                width: "85%",
                margin: theme.spacing(0, "auto")
            },
            _e[theme.breakpoints.down("md")] = {
                width: "90%",
            },
            _e),
        relatedPostsHeading: {
            fontSize: theme.typography.fontSize + 6,
            fontWeight: theme.typography.fontWeightBold,
            fontFamily: theme.design.font.bitter,
        },
        relatedPostsItems: (_f = {
                width: "85%",
                display: "flex",
                flexDirection: "row",
                gap: theme.spacing(5),
                justifyItems: "center",
                marginTop: theme.spacing(1)
            },
            _f[theme.breakpoints.down("md")] = {
                width: "90%",
                flexWrap: "wrap",
            },
            _f[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
                width: "100%",
            },
            _f),
        hr: {
            width: "100%",
            height: "1px",
            backgroundColor: theme.design.colors.waz_grey500,
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        main: {
            backgroundColor: theme.design.colors.waz_peach,
        },
        footer: {
            marginTop: theme.spacing(10),
        },
    });
});
