import makeStyles from "@mui/styles/makeStyles";
export var useRelatedPostGelloStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                width: "100%",
                cursor: "pointer",
                marginBottom: theme.spacing(4)
            },
            _a[theme.breakpoints.down("md")] = {
                width: "48%",
            },
            _a[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _a),
        thumbnailImgContainer: {
            height: 220,
            position: "relative",
        },
        thumbnailImg: {
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        articleTitle: {
            fontSize: theme.typography.fontSize + 4,
            fontWeight: theme.typography.fontWeightMedium,
            lineHeight: "22px",
            marginTop: theme.spacing(1.5),
        },
        post: {
            color: theme.design.colors.grey1200,
            fontSize: theme.typography.fontSize + 2,
            lineHeight: "20px",
            marginTop: theme.spacing(1),
        },
    });
});
