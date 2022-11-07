import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useDeliveryOptionStyles = makeStyles((theme: Theme) => ({
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
    imgContainer: {
        width: "32px",
        height: "32px",
        display: "flex",
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
}));
