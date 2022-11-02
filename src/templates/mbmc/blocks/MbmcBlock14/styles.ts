import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock14Styles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        gap: "64px",
        width: "100%",
        boxSizing: "border-box",
    },
    leftSection: {
        width: "39%",

        [theme.breakpoints.down("md")]: {
            width: "100%",
            zIndex: 1,
            position: "absolute",
            height: "100%",
            transition: "visibility 1s ease, opacity 1s ease",
            visibility: "visible",
            opacity: 1,
        },
    },
    hideCart: {
        zIndex: -1,
        position: "absolute",
        height: "100%",
        visibility: "hidden",
        opacity: 0,
        transition: "visibility 1s ease, opacity 1s ease",
    },
    cartContainer: {
        maxHeight: "85vh",
        overflowY: "scroll",
        padding: theme.spacing(0, 1, 0, 0),
        "-ms-overflow-style": "none",
        scrollbarWidth: "none",
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(5, 1, 0),
        },
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    mobileFooter: {
        display: "none",
        [theme.breakpoints.down("md")]: {
            height: "68px",
            width: "100%",
            backgroundColor: theme.design.colors.waz_white,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
        },
    },
    divider: {
        borderLeft: `solid 1px ${theme.design.colors.waz_greyColor150}`,
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    checkoutProcessContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "38%",
        [theme.breakpoints.down("md")]: {
            zIndex: -1,
            position: "absolute",
            width: "100%",
            visibility: "hidden",
            opacity: 0,
            transition: "visibility 1s ease, opacity 1s ease",
        },
    },
    showSummary: {
        transition: "visibility 1s ease, opacity 1s ease",
        visibility: "visible",
        opacity: 1,
        zIndex: 1,
        padding: theme.spacing(4, 2),
        boxSizing: "border-box",
    },
    mobileCheckoutProcessContainer: {
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
        },
    },
    checkoutCard: {
        width: "100%",
        boxSizing: "border-box",
        height: "auto",
        transition: "height 1s",
        padding: theme.spacing(4.5, 5),
        borderRadius: "5px",
        backgroundColor: theme.design.colors.waz_white,
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(4.5, 1.5),
        },
    },
    titleContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: theme.design.font.lostaMasta,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.fontSize + 6,
        letterSpacing: "0px",
        color: theme.design.colors.waz_black,
        textTransform: "capitalize",
    },
    completedPrice: {
        fontFamily: theme.design.font.montserrat,
    },
    activeStepTitle: {
        color: theme.design.colors.waz_black,
    },
    inactiveStepTitle: {
        color: theme.design.colors.waz_greyColor600,
        opacity: "0.6",
    },
    completedStepTitle: {
        color: theme.design.colors.waz_black,
        opacity: "0.6",
    },
    summaryDetailContainer: {
        marginTop: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        gap: "24px",
    },
    summaryDetail: {
        display: "flex",
        justifyContent: "space-between",
        fontFamily: theme.design.font.montserrat,
        fontSize: theme.typography.fontSize + 4,
    },
    summaryItem: {
        color: theme.design.colors.waz_greyColor400,
    },
    summaryTotal: {
        fontSize: theme.typography.fontSize + 6,
    },
    summaryTotalItem: {
        color: theme.design.colors.waz_greyColor600,
        fontWeight: theme.typography.fontWeightMedium,
    },
    summaryItemDigit: {
        color: theme.design.colors.waz_black,
        fontWeight: theme.typography.fontWeightBold,
    },
    checkoutBtn: {
        width: "100%",
        padding: "10px 77px",
        fontSize: theme.typography.fontSize + 2,
        fontWeight: theme.typography.fontWeightRegular,
        background: theme.design.colors.waz_primaryColor200,
    },
    deliveryDetail: {
        backgroundColor: theme.design.colors.waz_orangeColor50,
        borderRadius: "100px",
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(2),
    },
    deliveryOptionItem: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    deliveryOptionDetail: {
        fontFamily: theme.design.font.montserrat,
    },
    deliveryOptionTitle: {
        fontSize: theme.typography.fontSize + 2,
        marginBottom: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
    },
    deliveryOptionDescription: {
        fontSize: theme.typography.fontSize,
        color: theme.design.colors.waz_greyColor600,
    },
    paymentOptionTitle: {
        fontSize: theme.typography.fontSize + 2,
        color: theme.design.colors.waz_greyColor600,
    },
    radioInput: {
        color: theme.design.colors.waz_orangeColor100,
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
    formSectionTitle: {
        letterSpacing: "0px",
        color: theme.design.colors.waz_greyColor400,
        fontSize: theme.typography.fontSize - 2,
        fontFamily: theme.design.font.montserrat,
        marginBottom: theme.spacing(2),
    },
    textInput: {
        marginBottom: theme.spacing(1),
        "& > div": {
            borderRadius: theme.spacing(6),
        },
        "& input": {
            padding: theme.spacing(2, 2.5),
        },
    },
    optionDetails: {
        display: "flex",
        alignItems: "center",
    },
    paymentDetail: {
        backgroundColor: theme.design.colors.waz_white,
        borderRadius: "100px",
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(0, 1, 0, 2),
        border: `solid 1px ${theme.design.colors.waz_greyColor150}`,
    },
    sectionTitle: {
        letterSpacing: "0px",
        color: theme.design.colors.waz_greyColor400,
        fontSize: theme.typography.fontSize,
        fontFamily: theme.design.font.montserrat,
    },
    backContainer: {
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            alignItems: "center",
            gap: "12px",
        },
    },
    itemsCount: {
        letterSpacing: "0px",
        textTransform: "capitalize",
        fontSize: theme.typography.fontSize * 2,
        fontFamily: theme.design.font.lostaMasta,
        fontWeight: theme.typography.fontWeightMedium,
    },
}));
