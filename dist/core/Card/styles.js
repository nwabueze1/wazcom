import makeStyles from "@mui/styles/makeStyles";
export var useCardStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        root: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: theme.spacing(1),
        },
        column: {
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
            borderRadius: theme.spacing(0.5),
            "& img": {
                display: "block",
                height: "110px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
            },
        },
        templateRoot: (_a = {
                boxShadow: "0px 3px 15px ".concat(theme.design.colors.waz_black200),
                width: "373px",
                padding: theme.spacing(2)
            },
            _a[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _a),
        serviceTemplateRoot: (_b = {
                boxShadow: "0px 3px 15px ".concat(theme.design.colors.waz_black200),
                width: "300px",
                padding: theme.spacing(2)
            },
            _b[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _b[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _b),
        serviceRoot: (_c = {
                boxShadow: "0px 3px 5px ".concat(theme.design.colors.waz_black300),
                padding: theme.spacing(2.25, 2),
                width: "365px"
            },
            _c[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _c),
        overviewRoot: (_d = {
                boxShadow: "0px 3px 15px ".concat(theme.design.colors.waz_black200),
                padding: theme.spacing(1.5),
                width: "250px"
            },
            _d[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _d),
        titleContainer: {
            gap: theme.spacing(2),
        },
        cardTitle: {
            fontWeight: theme.typography.fontWeightBold,
        },
        cardLabel: {
            color: theme.design.colors.waz_grey200,
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightBold,
        },
        templateCardTitle: {
            color: theme.design.colors.waz_black,
            fontSize: theme.typography.fontSize,
        },
        serviceTemplateCardTitle: {
            color: theme.design.colors.waz_black,
            fontSize: theme.typography.fontSize,
        },
        serviceCardTitle: {
            color: theme.design.colors.waz_primaryBlack,
            fontSize: theme.typography.fontSize + 4,
            paddingBottom: theme.spacing(1),
        },
        overviewCardTitle: {
            color: theme.design.colors.waz_primaryBlack,
            fontSize: theme.typography.fontSize * 2,
        },
        cardContent: {
            color: theme.design.colors.waz_grey1,
            textAlign: "left",
            whiteSpace: "break-spaces",
        },
        templateContent: {
            fontSize: theme.typography.fontSize - 2,
        },
        serviceTemplateContent: {
            fontSize: theme.typography.fontSize - 2,
        },
        serviceContent: {
            fontSize: theme.typography.fontSize + 2,
            paddingBottom: theme.spacing(1),
        },
        overviewContent: {
            fontSize: theme.typography.fontSize - 4,
        },
        rateContainer: {
            gap: theme.spacing(0.5),
        },
        rateContent: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightBold,
        },
        ascendingRate: {
            color: theme.design.colors.waz_primary100,
        },
        descendingRate: {
            color: theme.design.colors.waz_dangerColor300,
        },
        contentContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            gap: theme.spacing(1),
        },
        justifyBetween: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
        },
        justifyStart: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
        },
        tagsContainer: {
            gap: theme.spacing(0.5),
            flexWrap: "wrap",
        },
        buttonsContainer: (_e = {
                display: "flex",
                gap: theme.spacing(1)
            },
            _e[theme.breakpoints.down("sm")] = {
                flexWrap: "wrap",
                justifyContent: "center",
            },
            _e),
        leftAlign: {
            textAlign: "left",
            alignItems: "left",
        },
        centerAlign: {
            textAlign: "center",
            alignItems: "center",
        },
        rightAlign: {
            textAlign: "right",
            alignItems: "right",
        },
        regtext: {
            color: theme.design.colors.waz_dangerColor300,
            fontWeight: "bold",
            fontSize: theme.typography.fontSize,
            margin: theme.spacing(2, 0),
        },
        text: {
            textAlign: "justify",
            padding: theme.spacing(0, 2),
            fontSize: theme.typography.fontSize,
        },
    });
});
