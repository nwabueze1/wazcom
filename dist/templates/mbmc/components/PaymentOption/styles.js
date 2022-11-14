import { makeStyles } from "@mui/styles";
export var usePaymentOptionStyles = makeStyles(function (theme) { return ({
    paymentOptionItem: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    imgContainer: {
        width: "32px",
        height: "32px",
        display: "flex",
    },
    paymentOptionDetail: {
        fontFamily: theme.design.font.montserrat,
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
        border: "solid 1px ".concat(theme.design.colors.waz_greyColor150),
    },
}); });
