import makeStyles from "@mui/styles/makeStyles";
export var useRestaurantDetailsStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        detailsContainer: {
            maxWidth: theme.include.styles.maxWidth,
            margin: "auto",
            background: theme.design.colors.white,
            padding: theme.spacing(2),
        },
        restaurantLocation: (_a = {
                fontWeight: 600,
                fontSize: theme.typography.fontSize + 12,
                lineHeight: "33px",
                display: "flex",
                color: theme.design.colors.waz_black,
                marginBottom: theme.spacing(1.5)
            },
            _a[theme.breakpoints.down("sm")] = {
                fontSize: theme.typography.fontSize + 4,
            },
            _a),
        restaurantDetails: {
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            boxSizing: "border-box",
            fontSize: theme.typography.fontSize + 2,
            color: theme.design.colors.waz_grey1,
            gap: theme.spacing(3),
        },
        openingTime: {
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: theme.typography.fontSize + 2,
            fontWeight: theme.typography.fontWeightRegular,
        },
        bullet: {
            width: 8,
            height: 8,
            borderRadius: "50%",
            border: "1px solid ".concat(theme.design.colors.waz_primaryColor100),
        },
        openingDetails: {
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontWeight: theme.typography.fontWeightRegular,
            color: theme.design.colors.waz_grey1,
        },
        detailsIcon: {
            color: theme.design.colors.waz_primaryColor100,
            height: theme.spacing(2),
        },
        mailLink: {
            color: theme.design.colors.waz_grey1,
            textDecoration: "none",
            cursor: "pointer",
        },
        logoContainer: {
            position: "relative",
            height: 100,
            width: 100,
            borderRadius: "50%",
            marginBottom: theme.spacing(1.5),
        },
        logoImg: {
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "50%",
        },
    });
});
