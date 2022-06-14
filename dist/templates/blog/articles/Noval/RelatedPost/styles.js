import makeStyles from "@mui/styles/makeStyles";
export var useRelatedPostNovalStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: (_a = {
                cursor: "pointer",
                width: "100%",
                marginBottom: theme.spacing(3),
                border: "1px solid ".concat(theme.design.colors.waz_grey300),
                borderRadius: 4
            },
            _a[theme.breakpoints.down("md")] = {
                width: "47%",
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
            borderTopLeftRadius: "2px",
            borderTopRightRadius: "2px",
        },
        thumbnailDetails: {
            padding: theme.spacing(2),
        },
        articleTitle: {
            fontSize: theme.typography.fontSize + 4,
            fontWeight: theme.typography.fontWeightMedium,
            lineHeight: "24px",
            cursor: "pointer",
        },
        avatar: {
            position: "relative",
            width: 32,
            height: 32,
        },
        avatarImg: {
            top: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
        },
        authorContainer: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1.5),
            marginTop: theme.spacing(2.5),
        },
        author: {
            fontWeight: theme.typography.fontWeightMedium,
            fontSize: theme.typography.fontSize + 2,
            textTransform: "capitalize",
        },
        timePosted: {
            fontSize: theme.typography.fontSize,
            color: theme.design.colors.waz_grey100,
        },
        defaultAvatar: {
            height: 32,
            width: 32,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: theme.typography.fontSize + 8,
            color: theme.design.colors.waz_white,
            background: theme.design.colors.waz_orange,
        },
        articleLink: {
            textDecoration: "none",
            color: theme.design.colors.waz_black,
        },
    });
});
