import { makeStyles } from "@mui/styles";
export var useMbmcBlock61Styles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return ({
        root: {
            backgroundColor: theme.design.colors.waz_greyColor50,
            padding: theme.spacing(9, 0),
        },
        block61Container: (_a = {
                maxWidth: 1600,
                width: "85%",
                margin: "0 auto"
            },
            _a[theme.breakpoints.down("lg")] = {
                width: "90%",
            },
            _a),
        block61Title: (_b = {
                color: theme.design.colors.waz_primaryColor300,
                fontSize: theme.typography.fontSize * 4,
                letterSpacing: 0,
                textTransform: "capitalize",
                font: "normal normal medium 68px/100px Losta Masta;",
                margin: 0,
                textAlign: "center",
                marginBottom: theme.spacing(1),
                fontFamily: theme.design.font.lostaMasta
            },
            _b[theme.breakpoints.down("md")] = {
                marginBottom: theme.spacing(2),
                fontSize: theme.typography.fontSize * 2,
            },
            _b),
        block61Description: (_c = {
                color: theme.design.colors.waz_greyColor600,
                textAlign: "center",
                fontSize: theme.typography.fontSize + 5,
                position: "relative",
                left: "22.5%",
                width: "55%",
                fontFamily: theme.design.font.montserrat,
                marginBottom: theme.spacing(7),
                lineHeight: 1.5
            },
            _c[theme.breakpoints.down("md")] = {
                marginBottom: theme.spacing(5),
                fontSize: theme.typography.fontSize + 4,
                left: "10%",
                width: "90%",
            },
            _c[theme.breakpoints.down("sm")] = {
                left: 0,
                width: "100%",
            },
            _c),
        block61Categories: (_d = {
                background: theme.design.colors.waz_white,
                borderRadius: "50px",
                padding: theme.spacing(0.5),
                boxShadow: "0px 5px 18px -2px rgba(68, 68, 68, 0.12)",
                display: "flex",
                flexWrap: "wrap",
                gap: theme.spacing(2),
                marginBottom: theme.spacing(8)
            },
            _d[theme.breakpoints.down("sm")] = {
                padding: theme.spacing(1),
                borderRadius: "8px",
                marginBottom: theme.spacing(5),
            },
            _d),
        block61Category: (_e = {
                fontFamily: theme.design.font.montserrat,
                color: theme.design.colors.waz_black,
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.3s ease-in",
                padding: theme.spacing(2, 4),
                fontSize: theme.typography.fontSize + 1,
                fontWeight: theme.typography.fontWeightMedium,
                cursor: "pointer"
            },
            _e[theme.breakpoints.down("sm")] = {
                borderRadius: "8px",
            },
            _e),
        block61CategoryActive: {
            background: theme.design.colors.waz_orangeColor100,
            color: theme.design.colors.waz_white,
        },
        block61Items: {
            display: "flex",
            flexWrap: "wrap",
            gap: theme.spacing(4),
        },
        block61Item: (_f = {
                width: "calc((100% - 64px) / 3)"
            },
            _f[theme.breakpoints.down("md")] = {
                width: "calc((100% - 32px) / 2)",
            },
            _f[theme.breakpoints.down("sm")] = {
                width: "100%",
            },
            _f),
        block61ItemHeading: {
            display: "flex",
            justifyContent: "space-between",
            fontSize: theme.typography.fontSize + 4,
        },
        block61ItemPrice: {
            color: theme.design.colors.waz_primaryColor200,
        },
        topContent: {
            display: "flex",
            gap: "8px",
        },
        imgContainer: (_g = {
                width: "31%"
            },
            _g[theme.breakpoints.down("md")] = {
                width: "35%",
            },
            _g),
        content: {
            width: "60%",
        },
        cartItemImg: (_h = {
                width: "100%",
                height: "100%",
                borderRadius: "5px"
            },
            _h[theme.breakpoints.down("md")] = {
                height: "89%",
            },
            _h),
        title: (_j = {
                letterSpacing: "0px",
                color: theme.design.colors.waz_black,
                textTransform: "capitalize",
                fontSize: theme.typography.fontSize + 6,
                fontFamily: theme.design.font.lostaMasta,
                fontWeight: theme.typography.fontWeightMedium,
                marginBottom: theme.spacing(1)
            },
            _j[theme.breakpoints.down("md")] = {
                fontFamily: theme.design.font.montserrat,
            },
            _j),
        description: (_k = {
                letterSpacing: "0px",
                color: theme.design.colors.waz_greyColor600,
                fontSize: theme.typography.fontSize,
                fontFamily: theme.design.font.montserrat
            },
            _k[theme.breakpoints.down("md")] = {
                color: "black",
            },
            _k),
        priceContainer: {
            marginTop: theme.spacing(2),
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        price: {
            letterSpacing: "0px",
            color: theme.design.colors.waz_primaryColor200,
            fontSize: theme.typography.fontSize + 6,
            fontFamily: theme.design.font.montserrat,
            fontWeight: theme.typography.fontWeightMedium,
        },
        quantityCountContainer: {
            display: "flex",
            fontFamily: theme.design.font.montserrat,
            fontWeight: theme.typography.fontWeightMedium,
            color: theme.design.colors.waz_primaryColor200,
            alignItems: "center",
            gap: "12px",
        },
        quantityButton: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "32px",
            height: "32px",
            fontSize: "14px",
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: theme.design.colors.waz_white,
            boxShadow: "0px 1px 4px #0000001A",
            borderRadius: "5px",
            color: theme.design.colors.waz_primaryColor200,
            cursor: "pointer",
        },
        operationIcon: {
            color: theme.design.colors.waz_primaryColor200,
            fontSize: theme.typography.fontSize * 2,
            fontWeight: theme.typography.fontWeightMedium,
        },
        disable: {
            opacity: 0.4,
        },
        modalContent: (_l = {
                width: "39%",
                height: "100%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                outline: "none"
            },
            _l[theme.breakpoints.down("lg")] = {
                width: "60%",
            },
            _l[theme.breakpoints.down("md")] = {
                width: "90%",
            },
            _l),
    });
});
