import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock13Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_greyColor50,
        overflow: "hidden",
        padding: theme.spacing(2, 12),
        width: "100%",
        boxSizing: "border-box",
        gap: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(2, 10),
        },
        [theme.breakpoints.down("md")]: {
            backgroundColor: theme.design.colors.waz_white,

            padding: theme.spacing(1, 2),
            height: "fit-content",
        },
    },
    activeElement: {
        border: "1px dashed",
        borderColor: theme.design.colors.waz_primaryColor100,
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
        width: "100%",
        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    },
    mobilelogo: {
        display: "none",
        [theme.breakpoints.down("lg")]: {
            display: "block",
            marginRight: theme.spacing(1),
            width: "50px",
        },
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

        "& > a, p": {
            padding: theme.spacing(2, 4),
            textDecoration: "none",
            color: theme.design.colors.waz_black,
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
    desktopIcons: {
        display: "flex",
        gap: "16px",
        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    },
    mobileIcons: {
        display: "none",
        gap: "8px",
        [theme.breakpoints.down("lg")]: {
            display: "flex",
        },
    },
    icon: {
        paddingRight: theme.spacing(4),
        position: "relative",
    },
    badgeIcon: {
        background: theme.design.colors.waz_white,
        padding: "4px 6px",
        fontSize: theme.typography.fontSize - 2,
        borderRadius: "4px",
        position: "absolute",
        top: "-16px",
        left: "12px",
        fontFamily: theme.design.font.montserrat,
        color: theme.design.colors.waz_orangeColor100,
    },
    orderBtn: {
        backgroundColor: theme.design.colors.waz_white,
        fontFamily: theme.design.font.montserrat,
        fontWeight: theme.typography.fontWeightBold,
        padding: theme.spacing(1.5, 3),
        width: "fit-content",
        whiteSpace: "nowrap",
        borderRadius: 50,
        cursor: "pointer",
        [theme.breakpoints.down("lg")]: {
            marginRight: theme.spacing(0),
            display: "none",
        },
    },
    mobileOrderBtn: {
        backgroundColor: theme.design.colors.waz_white,
        color: theme.design.colors.waz_orangeColor100,
        fontFamily: theme.design.font.montserrat,
        fontWeight: theme.typography.fontWeightBold,
        padding: theme.spacing(1.5, 3),
        width: "fit-content",
        whiteSpace: "nowrap",
        borderRadius: 50,
        cursor: "pointer",
    },
    menuOptionMobile: {
        display: "none",
        [theme.breakpoints.down("lg")]: {
            display: "flex",
            alignItems: "center",
            color: theme.design.colors.waz_lightOrange,
        },
    },
    openNav: {
        display: "none",
        [theme.breakpoints.down("lg")]: {
            display: "block",
            position: "absolute",
            width: "100%",
            top: 0,
        },
        [theme.breakpoints.down("md")]: {
            height: "100vh",
        },
    },
    expandedNav: {
        backgroundColor: "rgba(0,0,0,0.4)",
        overflow: "hidden",
        padding: theme.spacing(0, 0, 0, 10),
        width: "100%",
        height: "auto",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(0, 0, 0, 2),
            height: "100%",
        },
    },
    mobilelogoContainer: {
        width: "30%",
        display: "flex",
        alignItems: "center",
        paddingTop: theme.spacing(2),
    },
    expandedMenuOptionMobile: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingRight: theme.spacing(10),
        paddingTop: theme.spacing(3),
        width: "70%",
        height: "100%",
        color: theme.design.colors.waz_white,
        backgroundColor: theme.design.colors.waz_orangeColor100,
        [theme.breakpoints.down("md")]: {
            paddingRight: theme.spacing(2),
            justifyContent: "flex-start",
        },
    },
    expandedNavContent: {
        width: "100%",
        height: "100%",
        display: "flex",
    },
    expandedNavContentLeftSide: {
        width: "30%",
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: theme.spacing(0, 0, 0, 10),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(0, 0, 0, 2),
        },
    },
    expandedNavContentRightSide: {
        width: "70%",
        backgroundColor: theme.design.colors.waz_orangeColor100,
        textAlign: "right",
        display: "flex",
        gap: "32px",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: theme.spacing(4, 10, 10, 0),
        "& a": {
            textDecoration: "none",
        },
        [theme.breakpoints.down("lg")]: {
            paddingRight: theme.spacing(2),
        },
    },
    NavLinks: {
        letterSpacing: "0px",
        color: theme.design.colors.waz_white,
        textTransform: "capitalize",
        fontSize: theme.typography.fontSize + 20,
        fontWeight: theme.typography.fontWeightBold,
        fontFamily: theme.design.font.lostaMasta,
    },
}));
