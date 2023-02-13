import makeStyles from "@mui/styles/makeStyles";
export var useBloomyRelatedPostStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: (_a = {
                display: "flex",
                gap: theme.spacing(1.5),
                width: "47%",
                marginBottom: theme.spacing(5),
                cursor: "pointer"
            },
            _a[theme.breakpoints.down("md")] = {
                width: "95%",
                margin: theme.spacing(0, "auto", 5),
            },
            _a[theme.breakpoints.down("sm")] = {
                flexDirection: "column",
            },
            _a),
        thumbnailImgContainer: (_b = {
                height: 200,
                width: "85%",
                position: "relative"
            },
            _b[theme.breakpoints.down("md")] = {
                width: "38%",
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _b),
        thumbnailImg: {
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        title: {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.fontSize + 8,
            lineHeight: "30px",
            color: theme.design.colors.waz_primaryBlack,
        },
        excerpt: {
            fontSize: theme.typography.fontSize + 2,
            lineHeight: "21px",
            color: theme.design.colors.waz_grey1,
            margin: theme.spacing(1, 0, 2, 0),
        },
        author: {
            color: theme.design.colors.waz_grey600,
            fontSize: theme.typography.fontSize,
        },
        postedTime: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: theme.spacing(1),
            color: theme.design.colors.waz_grey600,
            fontSize: theme.typography.fontSize,
        },
        authorContainer: {
            display: "flex",
            gap: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        btn: {
            padding: theme.spacing(1, 2),
            background: theme.design.colors.waz_grey300,
            fontWeight: theme.typography.fontWeightMedium,
        },
        point: {
            width: 4,
            height: 4,
            background: theme.design.colors.waz_grey600,
            color: theme.design.colors.waz_primaryBlack,
            borderRadius: "50%",
        },
    });
});
