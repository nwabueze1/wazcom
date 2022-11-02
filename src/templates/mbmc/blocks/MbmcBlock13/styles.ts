import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock13Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_greyColor50,
        overflow: "hidden",
        padding: theme.spacing(2, 12),
        width: "calc(100% - 196px)",
        gap: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(2, 10),
            width: "calc(100% - 160px)",
        },

        // [theme.breakpoints.down("md")]: {
        //     padding: theme.spacing(1, 4),
        //     width: "calc(100% - 64px)",
        // },
        [theme.breakpoints.down("md")]: {
            backgroundColor: theme.design.colors.waz_white,

            padding: theme.spacing(1, 2),
            height: "fit-content",
            width: "calc(100% - 32px)",
        },
    },
    logoContainer: {
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > p": {
            display: "flex",
            alignItems: "center",
            fontFamily: theme.design.font.lostaMasta,
            fontSize: theme.typography.fontSize * 2,
            color: theme.design.colors.waz_primaryColor300,
            [theme.breakpoints.down("lg")]: {
                fontSize: theme.typography.fontSize + 8,
                display: "none",
            },
            [theme.breakpoints.down("md")]: {
                display: "none",
            },
        },
    },
    logo: {
        marginRight: theme.spacing(1),
        width: 60,
    },
    mrBarkers: {
        fontFamily: theme.design.font.lostaMastaLight,
    },
    border: {
        borderRight: "1px solid hsla(12, 73%, 56%, 1)",
        borderLeft: "1px solid hsla(12, 73%, 56%, 1)",
    },
    menuList: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        fontSize: theme.typography.fontSize + 2,
        width: "100%",
        fontFamily: theme.design.font.montserrat,
        fontWeight: theme.typography.fontWeightBold,
        paddingRight: theme.spacing(12),

        "& > p": {
            padding: theme.spacing(2, 4),
            cursor: "pointer",
        },
        [theme.breakpoints.down("lg")]: {
            paddingRight: theme.spacing(6),
            display: "none",
        },

        [theme.breakpoints.down("md")]: {
            paddingRight: theme.spacing(2),
            fontSize: theme.typography.fontSize,

            "& > p": {
                padding: theme.spacing(2, 1),
                cursor: "pointer",
            },
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    orderBtn: {
        backgroundColor: theme.design.colors.waz_white,
        fontFamily: theme.design.font.montserrat,
        fontWeight: theme.typography.fontWeightBold,
        padding: theme.spacing(1.5, 3),
        minWidth: 90,
        borderRadius: 50,
        marginRight: theme.spacing(8),
        cursor: "pointer",
        [theme.breakpoints.down("lg")]: {
            marginRight: theme.spacing(0),
            display: "none",
        },
        // [theme.breakpoints.down("md")]: {
        //     display: "none",
        // },
    },
    menuOptionMobile: {
        display: "none",
        [theme.breakpoints.down("lg")]: {
            display: "block",
            color: theme.design.colors.waz_lightOrange,
        },
    },
}));
