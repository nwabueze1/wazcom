import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock13Styles = makeStyles((theme: Theme) => ({
    root: {
        position: "absolute",
        width: "100%",
        zIndex: 10,
        top: 0,
        left: 0,
    },
    container: {
        background: "transparent",
        overflow: "hidden",
        padding: theme.spacing(2, 0),
        boxSizing: "border-box",
        gap: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: theme.include.styles.mbmc.maxWidth,
        width: "85%",
        margin: "0 auto",

        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(3, 0),
            width: "90%",
        },

        [theme.breakpoints.down("md")]: {
            backgroundColor: theme.design.colors.waz_white,
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
        objectFit: "cover",

        [theme.breakpoints.down("md")]: {
            width: "200px",
            height: "42.31px",
        },

        [theme.breakpoints.up("md")]: {
            height: "60px",
            width: "282.45px",
        },
    },
    link: {
        cursor: "pointer",
        textDecoration: "none",
        color: '#000000',
        fontWeight: theme.typography.fontWeightMedium,
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
        gap: theme.spacing(7),
        fontSize: theme.typography.fontSize + 2,
        fontFamily: theme.design.font.montserrat,
        fontWeight: theme.typography.fontWeightBold,

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
        position: "relative",
    },
    cartIcon: {
        color: theme.design.colors.waz_white,
        [theme.breakpoints.down("lg")]: {
            color: theme.design.colors.waz_orangeColor100,
            paddingRight: theme.spacing(4),
        },
    },
    badgeIcon: {
        padding: "4px 6px",
        fontSize: theme.typography.fontSize - 2,
        borderRadius: "4px",
        position: "absolute",
        top: -16,
        left: 12,
        fontFamily: theme.design.font.montserrat,
        color: theme.design.colors.waz_orangeColor100,
        background: theme.design.colors.waz_white,

        [theme.breakpoints.down("lg")]: {
            color: theme.design.colors.waz_white,
            backgroundColor: theme.design.colors.waz_orangeColor100,
        },
    },
    ctaDesktop: {
        fontWeight: theme.typography.fontWeightMedium,
    },
    ctaMobile: {
        color: theme.design.colors.waz_orangeColor100,
        fontWeight: theme.typography.fontWeightMedium,
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
            position: "fixed",
            zIndex: 12,
            width: "70vw",
            top: 0,
            right: "-100%",
            transition: "all 0.5s",
        },
        [theme.breakpoints.down("md")]: {
            height: "100vh",
            zIndex: 12,
        },
    },
    showMenu: {
        right: theme.spacing(10),

        [theme.breakpoints.down("md")]: {
            right: theme.spacing(2),
        },
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.3)",
        opacity: 0,
        visibility: "hidden",
        width: "100vw",
        zIndex: 11,
        height: "100vh",
        position: "fixed",
        transition: "all 0.3s",
    },
    showOverlay: {
        opacity: 1,
        visibility: "visible",
    },
    expandedNav: {
        overflow: "hidden",
        padding: theme.spacing(0, 0, 0, 10),
        width: "100%",
        height: "auto",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        minHeight: "100vh",

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
        paddingRight: theme.spacing(10),
        paddingTop: theme.spacing(3),
        width: "100%",
        height: "100%",
        color: theme.design.colors.waz_white,
        backgroundColor: theme.design.colors.waz_orangeColor100,
        minHeight: "100vh",
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
        "& a, p": {
            textDecoration: "none",
            letterSpacing: "0px",
            color: theme.design.colors.waz_white,
            textTransform: "capitalize",
            fontSize: theme.typography.fontSize + 20,
            fontWeight: theme.typography.fontWeightBold,
            fontFamily: theme.design.font.lostaMasta,
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
