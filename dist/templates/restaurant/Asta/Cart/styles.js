import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
export var useCartStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return createStyles({
        root: {
            height: "100%",
            width: "100%",
            background: theme.design.colors.waz_white,
        },
        cart: (_a = {
                minHeight: "380px",
                height: "fit-content",
                borderRadius: "5px",
                paddingBottom: theme.spacing(3),
                background: theme.design.colors.waz_white,
                alignItems: "center"
            },
            _a[theme.breakpoints.down("sm")] = {
                minHeight: "100vh",
            },
            _a),
        cartHeader: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 56,
            fontSize: theme.typography.fontSize + 4,
            borderBottom: "1px solid ".concat(theme.design.colors.waz_grey300),
            fontWeight: 600,
            position: "relative",
        },
        cartLoader: {
            width: "100%",
            height: "360px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.design.colors.greene,
        },
        img: {
            width: "155px",
            height: "116px",
        },
        qty: {
            fontSize: theme.typography.fontSize + 4,
            fontWeight: theme.typography.fontWeightMedium,
        },
        imgContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: theme.spacing(2, 0),
        },
        cartText: {
            textAlign: "center",
            padding: theme.spacing(2, 0),
            fontWeight: 600,
        },
        cartHeadingWrapper: (_b = {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "0.5px solid rgba(0,0,0,0.05)",
                padding: theme.spacing(2, 0)
            },
            _b[theme.breakpoints.up("lg")] = {
                justifyContent: "center",
            },
            _b[theme.breakpoints.down("sm")] = {
                border: "none",
                width: "90%",
                margin: theme.spacing(0, "auto"),
            },
            _b),
        cartWrapper: {
            width: "100%",
        },
        clearIcon: (_c = {
                display: "none"
            },
            _c[theme.breakpoints.down("md")] = {
                display: "block",
            },
            _c),
        icon: {
            color: theme.design.colors.greene,
            opacity: 0.7,
            cursor: "pointer",
            fontSize: theme.typography.fontSize + 12,
        },
        qtyParent: {
            marginTop: theme.spacing(1),
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        cartHeading: (_d = {
                fontSize: theme.typography.fontSize + 4,
                fontWeight: theme.typography.fontWeightMedium,
                width: "100%",
                color: theme.design.colors.primaryBlack,
                textAlign: "center"
            },
            _d[theme.breakpoints.down("lg")] = {
                width: "fit-content",
            },
            _d),
        cartEmpty: {
            textAlign: "center",
            color: theme.design.colors.waz_greyColor500,
            padding: theme.spacing(0, 0, 6),
            "& p": {
                fontSize: theme.typography.fontSize + 4,
                lineHeight: "24px",
                padding: "0 10px",
            },
        },
        cart__empty_total: {
            display: "flex",
            flexDirection: "column",
            padding: "30px 0 0 0",
            width: "100%",
            "& div": {
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
                marginBottom: theme.spacing(6),
            },
        },
        buttonWrapper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: theme.spacing(0, 3),
            marginBottom: theme.spacing(4),
        },
        cartButton: {
            fontSize: theme.typography.fontSize + 4,
            lineHeight: "21.82px",
            padding: theme.spacing(1, 9),
            borderRadius: "4px",
            outline: "none",
            background: theme.design.colors.offWhite,
            color: theme.design.colors.white,
            border: "none",
            fontFamily: theme.design.font.openSans,
            width: "100%",
        },
        cartButtonActive: {
            background: theme.design.colors.greene,
            cursor: "pointer",
        },
        cartItemParent: {
            display: "flex",
            maxHeight: "324px",
            overflowY: "auto",
            flexDirection: "column",
            width: "100%",
            margin: theme.spacing(1, 0, 0, 0),
            padding: theme.spacing(0, 3),
            boxSizing: "border-box",
            "&::-webkit-scrollbar": {
                width: "4px",
                background: "rgba(0,0,0,0.05)",
            },
            "&::-webkit-scrollbar-thumb": {
                background: "rgba(0,0,0,0.25)",
            },
            "&::-webkit-scrollbar-track": {
                background: "rgba(0,0,0,0.01)",
            },
        },
        cartItem: (_e = {
                alignItems: "center",
                borderBottom: "0.5px solid rgba(0,0,0,0.05)",
                padding: theme.spacing(2, 0),
                width: "100%"
            },
            _e[theme.breakpoints.down("md")] = {
                alignItems: "center",
                padding: theme.spacing(2, 0),
                boxSizing: "border-box",
            },
            _e),
        cartItemImage: {
            width: "68px",
            height: "68px",
            objectFit: "cover",
            borderRadius: "50%",
        },
        cartItemDetails: (_f = {
                display: "flex",
                flexDirection: "column",
                color: theme.design.colors.darkGrey,
                marginLeft: theme.spacing(2),
                width: "calc(100% - 84px)"
            },
            _f[theme.breakpoints.down("md")] = {
                width: "100%",
            },
            _f),
        cartItemName: {
            lineHeight: "21px",
            marginBottom: theme.spacing(0.5),
            textTransform: "capitalize",
            fontSize: theme.typography.fontSize + 4,
            color: theme.design.colors.primaryBlack,
            fontWeight: theme.typography.fontWeightRegular,
        },
        cartItemOptions: {
            fontSize: theme.typography.fontSize,
            color: theme.design.colors.grey1,
            marginBottom: theme.spacing(1),
            textTransform: "capitalize",
        },
        cartItemWrapper: {
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1.5),
        },
        cartItemQtyParent: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "& p": {
                margin: theme.spacing(0, 1),
                fontSize: theme.typography.fontSize + 4,
            },
        },
        cartItemPriceParent: {
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "50px",
        },
        cartItemPrice: {
            color: theme.design.colors.primaryBlack,
            margin: 0,
        },
        success: {
            color: theme.design.colors.greene,
            fontSize: theme.typography.fontSize * 3,
        },
        successBox: {
            display: "flex",
            justifyContent: "center",
        },
        successText: {
            textAlign: "center",
            fontSize: theme.typography.fontSize + 4,
            margin: theme.spacing(4, 0),
        },
        successState: {
            padding: theme.spacing(3),
            marginTop: theme.spacing(5),
        },
        cartItemsParent: (_g = {},
            _g[theme.breakpoints.down("md")] = {
                width: "100%",
                position: "relative",
            },
            _g[theme.breakpoints.down("sm")] = {
                position: "fixed",
            },
            _g),
        cartItemSumParent: (_h = {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: theme.spacing(2.8, 0, 0, 0),
                padding: theme.spacing(0, 3)
            },
            _h[theme.breakpoints.down("md")] = {
                padding: theme.spacing(2, 3, 0),
            },
            _h),
        subTotal: {
            color: theme.design.colors.grey2,
            opacity: 0.8,
            fontSize: theme.typography.fontSize + 3,
        },
        cartItemSum: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: theme.spacing(2),
            width: "100%",
        },
        cartItemSumTotal: {
            paddingTop: theme.spacing(2),
            marginBottom: theme.spacing(4),
            borderTop: "1px solid rgba(0,0,0,0.05)",
            fontWeight: theme.typography.fontWeightMedium,
        },
        cancelIcon: {
            cursor: "pointer",
            fontSize: theme.typography.fontSize * 2,
        },
        btn: {
            border: "1px solid ".concat(theme.design.colors.white),
            fontSize: theme.typography.fontSize + 4,
            color: theme.design.colors.white,
            padding: theme.spacing(1, 9),
            borderRadius: "4px",
            background: theme.design.colors.greene,
        },
        emptyCartSection: (_j = {
                display: "flex",
                alignItems: "center",
                height: "calc(100vh - 300px)",
                width: "100%"
            },
            _j[theme.breakpoints.down("sm")] = {
                height: "90vh",
            },
            _j),
        emptyCartContainer: {
            width: "100%",
        },
        checkoutCartItemsParent: {
            position: "relative",
        },
        cartPaymentMethods: {
            padding: theme.spacing(0, 3),
            "& p": {
                fontSize: theme.typography.fontSize + 2,
                color: theme.design.colors.grey1,
                marginBottom: theme.spacing(3),
            },
        },
        cartPaymentMethodsImages: {
            display: "flex",
            "& img": {
                width: 20,
                height: 20,
                marginRight: theme.spacing(3),
            },
        },
        checkoutContainer: {
            width: "calc(100% - ".concat(theme.spacing(4), ")"),
            padding: theme.spacing(2),
            lineHeight: "25px",
            backgroundColor: theme.design.colors.waz_white,
        },
        prices: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: theme.spacing(1, 0),
        },
        amount: {
            fontWeight: 400,
            color: theme.design.colors.waz_black,
            fontSize: theme.typography.fontSize + 4,
        },
        name: {
            fontWeight: 400,
            color: theme.design.colors.waz_greenishGrey2,
            fontSize: theme.typography.fontSize + 4,
        },
        total: {
            fontWeight: 600,
            color: theme.design.colors.waz_black,
            fontSize: theme.typography.fontSize + 4,
        },
        dialogOption: {
            padding: theme.spacing(1, 8),
            marginTop: theme.spacing(2),
            fontSize: theme.typography.fontSize + 4,
            fontWeight: theme.typography.fontWeightMedium,
            fontFamily: theme.design.font.openSans,
            borderRadius: "4px",
            width: "100%",
        },
        dialogOptionFilled: {
            background: theme.design.colors.waz_primaryColor100,
            color: theme.design.colors.waz_white,
            border: "none",
            cursor: "pointer",
        },
        subTotalContainer: {
            borderBottom: "1px solid ".concat(theme.design.colors.waz_grey300),
        },
        cartsContainer: {
            maxHeight: "calc(100vh - 270px)",
            overflowY: "scroll",
        },
        cartsContainerMd: (_k = {
                maxHeight: "calc(50vh - 270px)",
                minHeight: "calc(50vh - 300px)",
                overflowY: "scroll"
            },
            _k[theme.breakpoints.down("sm")] = {
                maxHeight: "calc(100vh - 270px)",
                minHeight: "calc(100vh - 350px)",
            },
            _k),
        closeBtn: {
            position: "absolute",
            right: 20,
            marginTop: theme.spacing(1),
        },
    });
});
