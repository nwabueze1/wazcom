import makeStyles from "@mui/styles/makeStyles";
export var useAlmondStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return ({
        root: (_a = {
                width: "100%",
                height: "100%",
                fontFamily: theme.design.font.merriweather
            },
            _a[theme.breakpoints.down("md")] = {
                flexDirection: "column",
            },
            _a),
        contentContainer: {
            width: "100%",
            dispplay: "flex",
            justifyContent: "center",
        },
        heroContainer: (_b = {
                height: "60vh",
                width: "100%",
                display: "flex",
                flexDirection: "row"
            },
            _b[theme.breakpoints.down("md")] = {
                flexDirection: "column-reverse",
                height: "75vh",
            },
            _b[theme.breakpoints.down("sm")] = {
                flexDirection: "column-reverse",
                height: "90vh",
            },
            _b),
        hero: (_c = {
                width: "50%",
                backgroundColor: theme.design.colors.waz_grey500,
                position: "relative",
                display: "flex",
                justifyContent: "center"
            },
            _c[theme.breakpoints.down("md")] = {
                width: "100%",
                marginTop: theme.spacing(-2),
                height: "60vh",
            },
            _c[theme.breakpoints.down("sm")] = {
                width: "100%",
                marginTop: theme.spacing(-2),
                height: "100%",
            },
            _c),
        title: (_d = {
                fontSize: theme.typography.fontSize + 30,
                color: theme.design.colors.waz_white,
                fontWeight: theme.typography.fontWeightBold,
                lineHeight: "150%",
                width: "80%"
            },
            _d[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 20,
            },
            _d),
        date: {
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightBold,
            color: theme.design.colors.waz_white,
        },
        heroItems: (_e = {
                marginLeft: theme.spacing(5),
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            },
            _e[theme.breakpoints.down("md")] = {
                top: "70px",
            },
            _e[theme.breakpoints.down("sm")] = {
                top: "40px",
                marginLeft: theme.spacing(2),
            },
            _e),
        socialIcon: {
            width: "30px",
            height: "30px",
            borderRadius: "15px",
            border: "1px solid ".concat(theme.design.colors.waz_white),
            margin: theme.spacing(1),
            display: "flex",
            justifyContent: "center",
        },
        socialIconsContainer: {
            display: "flex",
            flexDirection: "row",
            marginLeft: theme.spacing(-1),
            marginTop: theme.spacing(4),
        },
        icon: {
            marginTop: theme.spacing(0.5),
            filter: "invert(100%)",
        },
        headerImageContainer: {
            width: "50%",
        },
        headerImage: (_f = {
                width: "100%",
                height: "100%",
                objectFit: "cover"
            },
            _f[theme.breakpoints.down("md")] = {
                height: "40vh",
                width: "100%",
            },
            _f[theme.breakpoints.down("sm")] = {
                height: "50vh",
                width: "100%",
            },
            _f),
        postContent: {
            lineHeight: "32px",
        },
        body: (_g = {
                display: "flex",
                alignItems: "center",
                gap: theme.spacing(1.5),
                width: "60%",
                margin: "auto",
                padding: theme.spacing(2),
                marginTop: theme.spacing(3),
                position: "relative",
                fontSize: theme.typography.fontSize + 4,
                lineHeight: "32px"
            },
            _g[theme.breakpoints.down("md")] = {
                width: "90%",
            },
            _g[theme.breakpoints.down("sm")] = {
                width: "90%",
            },
            _g),
        relatedPostsContainer: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
        },
        hr: (_h = {
                height: "1px",
                width: "70%",
                backgroundColor: theme.design.colors.waz_black,
                margin: "0 auto",
                marginTop: theme.spacing(3)
            },
            _h[theme.breakpoints.down("md")] = {
                width: "90%",
            },
            _h),
        relatedPosts: (_j = {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "70%",
                flexWrap: "wrap"
            },
            _j[theme.breakpoints.down("md")] = {
                width: "90%",
                flexDirection: "column",
            },
            _j),
        relatedPostsHeader: {
            marginTop: theme.spacing(2),
            fontSize: theme.typography.fontSize + 8,
            fontWeight: theme.typography.fontWeightBold,
        },
        headerContainer: (_k = {
                width: "39%",
                justifyContent: "center",
                display: "flex"
            },
            _k[theme.breakpoints.down("md")] = {
                width: "25%",
            },
            _k[theme.breakpoints.down("sm")] = {
                width: "45%",
                marginBottom: theme.spacing(-5),
            },
            _k),
        footer: {
            borderTop: "1px solid ".concat(theme.design.colors.waz_grey100),
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: theme.spacing(6),
            padding: theme.spacing(2),
        },
        footerContent: {
            marginTop: theme.spacing(1.5),
            display: "flex",
            flexDirection: "row",
        },
        upperText: (_l = {
                color: theme.design.colors.waz_gold,
                fontSize: theme.typography.fontSize,
                fontWeight: theme.typography.fontWeightBold,
                lineHeight: "12px",
                marginTop: theme.spacing(4),
                marginBottom: theme.spacing(1)
            },
            _l[theme.breakpoints.down("md")] = {
                marginTop: theme.spacing(-2),
            },
            _l[theme.breakpoints.down("sm")] = {
                marginTop: theme.spacing(1),
            },
            _l),
        authorInfo: {
            marginTop: theme.spacing(3),
        },
        link: {
            marginTop: theme.spacing(0.5),
            marginLeft: theme.spacing(0.5),
        },
    });
});
