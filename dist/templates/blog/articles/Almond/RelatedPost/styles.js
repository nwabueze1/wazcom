import makeStyles from "@mui/styles/makeStyles";
export var useRelatedPostAlmondStyles = makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        root: {
            width: "48%",
            display: "flex",
            justifyContent: "center",
        },
        thumbnailImgContainer: {
            position: "relative",
        },
        thumbnailImg: (_a = {
                width: "120px",
                height: "100px",
                objectFit: "cover"
            },
            _a[theme.breakpoints.down("sm")] = {
                width: "343px",
                height: "164px"
            },
            _a),
        articleTitle: (_b = {
                fontSize: theme.typography.fontSize + 8,
                fontWeight: theme.typography.fontWeightBold,
                lineHeight: "30px"
            },
            _b[theme.breakpoints.down("md")] = {
                width: "270%"
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "200%"
            },
            _b),
        post: {
            color: theme.design.colors.waz_grey600,
            fontSize: theme.typography.fontSize + 2,
            lineHeight: "20px",
            marginTop: theme.spacing(1),
        },
        container: (_c = {
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: theme.spacing(2.5),
                marginTop: theme.spacing(2)
            },
            _c[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
                gap: theme.spacing(0),
                marginTop: theme.spacing(7)
            },
            _c),
        date: {
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightBold,
            color: theme.design.colors.waz_grey100,
        },
        alternateAvatar: {
            marginBottom: theme.spacing(2.3)
        }
    });
});
