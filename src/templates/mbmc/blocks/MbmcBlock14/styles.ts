import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock14Styles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        gap: "64px",
    },
    divider: {
        borderLeft: `solid 1px ${theme.design.colors.waz_greyColor150}`,
    },
    checkoutProcessContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
    },
    checkoutCard: {
        width: "548px",
        height: "auto",
        transition: "height 1s",
        padding: theme.spacing(4.5, 5),
        borderRadius: "5px",
        backgroundColor: theme.design.colors.waz_white,
    },
    titleContainer: {},
    title: {
        fontFamily: theme.design.font.lostaMasta,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.fontSize + 6,
        letterSpacing: "0px",
        color: theme.design.colors.waz_black,
        textTransform: "capitalize",
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
        padding: "10px 0",
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
        textTransform: "uppercase",
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
}));
