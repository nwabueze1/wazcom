import makeStyles from "@mui/styles/makeStyles";
export var useHaloStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return ({
        root: {
            cursor: "pointer",
            marginBottom: theme.spacing(4),
            fontFamily: "Inter, sans-serif",
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
        headerImage: {
            width: "100%",
            height: "560px",
            objectFit: "cover",
        },
        avatarImage: {
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            objectFit: "cover",
        },
        heroOverlay: {
            height: "100%",
            zIndex: "1",
            width: "100%",
            position: "absolute",
            top: "0px",
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
        },
        overlayContainer: {
            position: "relative",
        },
        heroContainer: {
            zIndex: "10",
        },
        heroItems: (_a = {
                position: "absolute",
                top: "340px",
                left: "63px",
                zIndex: "2",
                width: "80%"
            },
            _a[theme.breakpoints.down("md")] = {
                top: "340px",
                right: "30%",
                marginLeft: theme.spacing(-3),
            },
            _a[theme.breakpoints.down("sm")] = {
                marginLeft: theme.spacing(-5),
                left: "30%",
                top: "370px",
            },
            _a),
        tags: {
            display: "flex",
            flexDirection: "row",
            color: theme.design.colors.waz_white,
        },
        tag: {
            color: theme.design.colors.waz_white,
            margin: theme.spacing(0.5),
        },
        title: (_b = {
                fontSize: theme.typography.fontSize + 24,
                fontFamily: "Inter, sans-serif",
                width: "100%",
                color: theme.design.colors.waz_white
            },
            _b[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize * 2,
                lineHeight: "36px",
            },
            _b),
        titleContainer: (_c = {},
            _c[theme.breakpoints.down("sm")] = {
                marginLeft: theme.spacing(-7),
            },
            _c),
        authorName: {
            fontSize: theme.design.colors.waz_white + 2,
            width: "116px",
            lineHeight: "19px",
            fontWeight: theme.typography.fontWeightBold,
            textTransform: "uppercase",
            color: theme.design.colors.waz_white,
        },
        authorInfo: {
            zIndex: "100",
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1),
        },
        circleIcon: {
            width: "5px",
            height: "5px",
            background: theme.design.colors.waz_white,
            borderRadius: "50%",
            marginBottom: theme.spacing(0.2),
        },
        date: {
            color: theme.design.colors.waz_white,
        },
        body: (_d = {
                display: "flex",
                alignItems: "center",
                gap: theme.spacing(1.5),
                width: "60%",
                margin: "auto",
                padding: theme.spacing(2),
                marginTop: theme.spacing(3),
                position: "relative"
            },
            _d[theme.breakpoints.down("md")] = {
                width: "90%",
            },
            _d[theme.breakpoints.down("sm")] = {
                width: "90%",
            },
            _d),
        postContent: {
            lineHeight: "32px",
        },
        topSocialIcon: {
            width: "30px",
            height: "30px",
            borderRadius: "15px",
            border: "1px solid ".concat(theme.design.colors.waz_grey300),
            margin: theme.spacing(2),
            display: "flex",
            justifyContent: "center",
        },
        bottomSocialIcon: {
            width: "30px",
            height: "30px",
            borderRadius: "15px",
            border: "1px solid ".concat(theme.design.colors.waz_grey300),
            margin: theme.spacing(1),
            display: "flex",
            justifyContent: "center",
        },
        topSocialIconsContainer: {
            position: "absolute",
            top: "30px",
            left: "-15%",
            margin: theme.spacing(1),
            marginTop: theme.spacing(-4),
        },
        icon: {
            marginTop: theme.spacing(0.7),
        },
        authorDetails: {
            display: "flex",
            justifyContent: "center",
            marginTop: theme.spacing(3),
        },
        avatar: {
            width: "56px",
            height: "56px",
            margin: "0 auto",
        },
        authorText: {
            fontSize: theme.typography.fontSize + 2,
            fontWeight: theme.typography.fontWeightRegular,
            color: theme.design.colors.waz_grey100,
            LineHeight: "15px",
            textAlign: "center",
        },
        authorNameInfo: {
            color: theme.design.colors.waz_black,
            fontSize: theme.typography.fontSize + 2,
            lineHeight: "19px",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        bottomSocialIconsContainer: {
            display: "flex",
            flexDirection: "row",
        },
        avatarContainer: {
            display: "flex",
            justifyContent: "center",
            marginBottom: theme.spacing(-2),
        },
        horizontalLine: (_e = {
                width: "32%",
                height: "1px",
                marginTop: theme.spacing(5),
                marginRight: theme.spacing(-2),
                backgroundColor: theme.design.colors.waz_black
            },
            _e[theme.breakpoints.down("md")] = {
                width: "200px",
            },
            _e[theme.breakpoints.down("sm")] = {
                width: "100%",
                marginTop: theme.spacing(-0.5),
            },
            _e),
        relatedPostsLine: (_f = {
                marginTop: theme.spacing(2),
                width: "100%",
                display: "flex",
                flexDirection: "row",
                marginLeft: theme.spacing(10)
            },
            _f[theme.breakpoints.down("lg")] = {
                display: "flex",
                justifyContent: "center",
            },
            _f[theme.breakpoints.down("md")] = {
                marginLeft: theme.spacing(-5),
            },
            _f),
        relatedPostsTitle: (_g = {
                marginRight: theme.spacing(3)
            },
            _g[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 2,
                width: "100px",
                marginLeft: theme.spacing(-5),
                marginTop: theme.spacing(-2),
            },
            _g[theme.breakpoints.down("md")] = {
                marginLeft: theme.spacing(-5),
                marginRight: theme.spacing(0),
            },
            _g),
        relatedPostsHeader: {
            maxWidth: "75%",
            margin: "0 auto",
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(3),
        },
        relatedArticleContainer: (_h = {},
            _h[theme.breakpoints.down("md")] = {
                width: "100%",
                marginTop: theme.spacing(7),
            },
            _h),
        relatedPotsContainer: {
            maxWidth: "80%",
            width: "80%",
            margin: "0 auto",
        },
        name: {
            textAlign: "center",
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(0.5),
            fontSize: theme.typography.fontSize + 3,
        },
        relatedPostHeadingContainer: {
            display: "flex",
            flexDirection: "row",
            width: "58%",
            margin: "auto",
        },
        hr: (_j = {
                height: "1px",
                width: "70%",
                backgroundColor: theme.design.colors.waz_black,
                marginTop: theme.spacing(1),
                marginLeft: theme.spacing(-3)
            },
            _j[theme.breakpoints.down("md")] = {
                width: "190%",
                marginRight: theme.spacing(-12),
                marginTop: theme.spacing(1),
            },
            _j[theme.breakpoints.down("sm")] = {
                width: "60%",
                marginRight: theme.spacing(-9),
                marginTop: theme.spacing(1),
            },
            _j),
        relatedPostsHeading: (_k = {
                width: "20%",
                fontSize: theme.typography.fontSize + 4,
                fontWeight: theme.typography.fontWeightRegular
            },
            _k[theme.breakpoints.down("md")] = {
                width: "83%",
                marginLeft: theme.spacing(-5),
                marginRight: 0,
            },
            _k[theme.breakpoints.down("sm")] = {
                width: "65%",
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
            },
            _k.defaultAvatar = {
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
            _k),
    });
});
