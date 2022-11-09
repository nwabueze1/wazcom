import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock16Styles = makeStyles((theme: Theme) => ({
    topContent: {
        display: "flex",
        gap: "8px",
    },
    imgContainer: {
        width: "31%",
        height: "118px",
        [theme.breakpoints.down("md")]: {
            width: "35%",
        },
    },
    content: {
        width: "60%",
    },
    cartItemImg: {
        width: "100%",
        height: "100%",
        borderRadius: "5px",
        [theme.breakpoints.down("md")]: {
            height: "89%",
        },
    },
    title: {
        letterSpacing: "0px",
        color: theme.design.colors.waz_black,
        textTransform: "capitalize",
        fontSize: theme.typography.fontSize + 6,
        fontFamily: theme.design.font.lostaMasta,
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            fontFamily: theme.design.font.montserrat,
        },
    },
    description: {
        letterSpacing: "0px",
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize,
        fontFamily: theme.design.font.montserrat,
        [theme.breakpoints.down("md")]: {
            color: "black",
        },
    },
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

    // modalll
    modalContent: {
        width: "39%",
        height: "100%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        outline: "none",

        [theme.breakpoints.down("lg")]: {
            width: "60%",
        },
        [theme.breakpoints.down("md")]: {
            width: "90%",
        },
    },
    cartItemContainer: {
        background: `#bbbbbb 0% 0% no-repeat padding-box`,
        width: "100%",
        boxSizing: "border-box",
        padding: theme.spacing(2),
        backdropFilter: "blur(23px)",
        boxShadow: "0px 3px 20px #0000001A",
        borderRadius: "5px",
        marginBottom: theme.spacing(3),
    },
    bottomContent: {
        marginTop: theme.spacing(1.5),
        backgroundColor: theme.design.colors.waz_white,
        borderRadius: "5px",
        padding: theme.spacing(3),
        fontFamily: theme.design.font.montserrat,
    },
    dishOptionTitleContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dishOptionTitle: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 2,
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: theme.spacing(1),
    },
    dishOptionSubText: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize,
    },
    requiredTag: {
        fontSize: theme.typography.fontSize - 2,
        padding: theme.spacing(1, 1.5),
        background: "#0259391A",
        color: theme.design.colors.waz_greyColor400,
        textTransform: "uppercase",
        borderRadius: "43px",
    },
    dishOptions: {
        maxHeight: "304px",
        overflowY: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    dishOptionContainer: {
        marginBottom: theme.spacing(4),
    },
    dishOptionItemContainer: {
        marginTop: theme.spacing(2.5),
    },
    dishOptionItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing(2.5),
    },
    dishOptionItemTitleContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "25px",
    },
    dishOptionItemTitle: {
        fontSize: theme.typography.fontSize + 2,
        color: theme.design.colors.waz_greyColor600,
    },
    dishOptionItemPrice: {
        color: theme.design.colors.waz_primaryColor200,
        fontSize: theme.typography.fontSize + 2,
    },
    radioInput: {
        color: theme.design.colors.waz_orangeColor100,
        padding: theme.spacing(0),
        "&.Mui-checked": {
            color: theme.design.colors.waz_orangeColor100,
        },
        "& span": {
            "& svg:first-child": {
                width: "24px",
                height: "24px",
            },

            "& svg": {
                width: "100%",
                height: "100%",
            },
        },
    },
    addToCartBtnContainer: {
        padding: theme.spacing(2, 1, 0),
    },
}));
