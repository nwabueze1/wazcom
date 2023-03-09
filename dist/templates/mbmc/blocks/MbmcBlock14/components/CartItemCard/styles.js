import { makeStyles } from "@mui/styles";
export var useCartItemCardStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {
            background: "".concat(theme.design.colors.waz_orangeColor50, " 0% 0% no-repeat padding-box"),
            width: "100%",
            boxSizing: "border-box",
            padding: theme.spacing(2),
            backdropFilter: "blur(23px)",
            boxShadow: "0px 3px 20px #0000001A",
            borderRadius: "5px",
            marginBottom: theme.spacing(3),
            position: "relative",
        },
        topContent: {
            display: "flex",
            gap: "8px",
        },
        content: {
            width: "60%",
        },
        cartItemImg: {
            width: "31%",
            height: "118px",
            flexShrink: 0,
            objectFit: "cover",
        },
        title: (_a = {
                letterSpacing: "0px",
                color: theme.design.colors.waz_black,
                textTransform: "capitalize",
                fontSize: theme.typography.fontSize + 6,
                fontFamily: theme.design.font.lostaMasta,
                fontWeight: theme.typography.fontWeightMedium,
                marginBottom: theme.spacing(1)
            },
            _a[theme.breakpoints.down("md")] = {
                fontFamily: theme.design.font.montserrat,
            },
            _a),
        options: {
            marginBottom: theme.spacing(1),
            color: theme.design.colors.waz_greyColor600,
            fontSize: theme.typography.fontSize,
            fontFamily: theme.design.font.montserrat,
            lineHeight: 1.6,
        },
        description: (_b = {
                letterSpacing: "0px",
                color: theme.design.colors.waz_greyColor600,
                fontSize: theme.typography.fontSize,
                fontFamily: theme.design.font.montserrat,
                lineHeight: 1.6
            },
            _b[theme.breakpoints.down("md")] = {
                color: "black",
            },
            _b),
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
        deleteButton: {
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
        deleteIcon: {
            color: theme.design.colors.waz_lightOrange,
            fontSize: theme.typography.fontSize + 6,
            fontWeight: theme.typography.fontWeightMedium,
        },
        bottomContent: {
            marginTop: theme.spacing(1.5),
        },
        spinner: {
            position: "absolute",
            bottom: 20,
            right: 20,
        },
    });
});
