import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock9Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_white,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: theme.spacing(12),
        width: "calc(100% - 208px)",
        gap: theme.spacing(2),

        [theme.breakpoints.down("md")]: {
            height: "100%",
            padding: theme.spacing(8, 4),
            width: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(6, 1),
            height: "fit-content",
            width: "calc(100% - 16px)",
        },
    },
    headerContent: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
    },
    headerTitle: {
        color: theme.design.colors.waz_black,
        fontSize: theme.typography.fontSize * 4,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "Losta Masta",
        margin: 0,
        textAlign: "center",
        marginBottom: theme.spacing(2),
        fontFamily: theme.design.font.lostaMasta,
        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize * 3,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize * 2,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize * 2,
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "left",
            fontSize: theme.typography.fontSize * 2,
            fontWeight: 800,
            marginBottom: theme.spacing(1),
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        textAlign: "left",
        fontSize: theme.typography.fontSize + 6,
        maxWidth: 500,

        fontFamily: theme.design.font.montserrat,
        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 6,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 6,
        },
        [theme.breakpoints.down("md")]: {
            width: "80%",
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.fontSize + 2,
            width: "100%",
        },
    },
    headerCardContainer: {
        width: "100%",
        display: "block",
        marginTop: theme.spacing(4),
    },
    pointContainer: {
        width: "100%",
        maxWidth: 500,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        transition: " boxShadow 1s ease",
        borderRadius: "4px",
        border: `1px solid ${theme.design.colors.waz_grey300}`,
        boxSizing: "border-box",
        marginBottom: theme.spacing(2),
        padding: theme.spacing(3),
        boxShadow: `0px 3px 60px ${theme.design.colors.waz_black100}`,

        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2),
        },
    },
    pointTextContainer: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        fontFamily: theme.design.font.montserrat,
    },
    point: {
        padding: theme.spacing(2, 3),
        fontFamily: theme.design.font.openSans,
        fontSize: theme.typography.fontSize * 2,
        boxShadow: `0px 1px 10px ${theme.design.colors.waz_black100}`,
        borderRadius: theme.spacing(1),
        marginRight: theme.spacing(2),
        color: theme.design.colors.waz_primaryColor300,
        fontWeight: theme.typography.fontWeightBold,
    },
    pointDescription: {
        color: theme.design.colors.waz_greyColor600,
        textAlign: "left",
        fontSize: theme.typography.fontSize,
        width: "100%",
        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("md")]: {
            width: "80%",
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.fontSize + 2,
            width: "100%",
        },
    },
    pointTitle: {
        color: theme.design.colors.waz_black,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.fontSize + 4,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "Losta Masta;",
        margin: 0,
        textAlign: "left",
        marginBottom: theme.spacing(0.5),

        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 4,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 4,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize + 4,
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "left",
            fontSize: theme.typography.fontSize + 4,
            fontWeight: 800,
            marginBottom: theme.spacing(1),
        },
    },
    activePoint: {
        backgroundColor: theme.design.colors.waz_primaryColor300,
        color: theme.design.colors.waz_white,
    },
    activeTitle: {
        color: theme.design.colors.waz_primaryColor300,
    },
    textContainer: {
        width: "100%",
    },
    directions: {
        width: "90%",
        height: "100%",
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/directionImage.svg)`,
        backgroundSize: "80%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        [theme.breakpoints.down("lg")]: {
            backgroundSize: "95%",
        },
    },
    directionContainer: {
        width: "100%",
        height: 501,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        [theme.breakpoints.down("md")]: {
            height: 500,
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    directionContainerMobile: {
        width: "100%",
        height: "100%",
        display: "none",
        alignItems: "center",
        padding: theme.spacing(2),

        [theme.breakpoints.down("sm")]: {
            display: "flex",
            height: 500,
        },
    },
    imgDirection1: {
        position: "absolute",
        width: 168,
        height: 160,
        top: 0,
        left: 0,
        backgroundColor: theme.design.colors.waz_white,
        marginTop: theme.spacing(-7),

        [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(-1),
            width: 100,
        },
    },
    imgDirection2: {
        position: "absolute",
        width: 168,
        height: 160,
        top: 0,
        right: 0,
        backgroundColor: theme.design.colors.waz_white,
        marginTop: theme.spacing(-7),

        [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(-1),
            width: 100,
        },
    },
    imgDirection3: {
        width: 168,
        height: 160,
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: theme.design.colors.waz_white,
        marginBottom: theme.spacing(-7),
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(-1),
            width: 100,
        },
    },
    imgDirection4: {
        width: 168,
        height: 160,
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: theme.design.colors.waz_white,
        marginBottom: theme.spacing(-7),

        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(-1),
            width: 100,
        },
    },
    mobileHide: {
        display: "block",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
}));
