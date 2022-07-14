import makeStyles from "@mui/styles/makeStyles";
export var useRelatedPostHaloStyles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        thumbnailImg: (_a = {
                width: "240px",
                height: "140px",
                objectFit: "cover"
            },
            _a[theme.breakpoints.down("sm")] = {
                width: "100%"
            },
            _a),
        articleTitle: {
            fontSize: theme.typography.fontSize + 6,
            lineHeight: "22px",
            fontWeight: theme.typography.fontWeightBold,
            marginTop: theme.spacing(1.5),
        },
        post: {
            color: theme.design.colors.waz_grey600,
            fontSize: theme.typography.fontSize + 2,
            lineHeight: "20px",
            marginTop: theme.spacing(1),
        },
        relatedPostHeader: {
            fontSize: theme.typography.fontSize + 8,
            fontWeight: theme.typography.fontWeightBold,
            lineHeight: "27px",
        },
        relatedArticleContainer: (_b = {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                margin: theme.spacing(3)
            },
            _b[theme.breakpoints.down("sm")] = {
                flexDirection: "column"
            },
            _b),
        thumbnailDetails: (_c = {
                marginLeft: theme.spacing(2)
            },
            _c[theme.breakpoints.down("md")] = {
                marginLeft: theme.spacing(2),
            },
            _c[theme.breakpoints.down("sm")] = {
                marginLeft: theme.spacing(0),
            },
            _c),
        relatedPostAuthor: {
            color: theme.design.colors.waz_grey100,
            lineHeight: "15px",
            fontSize: theme.typography.fontSize + 2
        },
        articleDate: {
            lineHeight: "12px",
            color: theme.design.colors.waz_grey100,
            marginTop: theme.spacing(2)
        },
    });
});
