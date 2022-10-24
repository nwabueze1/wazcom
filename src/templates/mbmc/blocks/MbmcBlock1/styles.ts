import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock1Styles = makeStyles((theme: Theme) => ({
    root: {
        width: "calc(100% - 128px)",
        height: 700,
        backgroundColor: theme.design.colors.waz_white,
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 8),
        overflow: "hidden",
        [theme.breakpoints.down("lg")]: {
            height: 500,
            padding: theme.spacing(2, 4),
            width: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("md")]: {
            height: 400,
            padding: theme.spacing(2, 4),
            width: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            padding: theme.spacing(0.5),
            width: "calc(100% - 8px)",
            height: "100%",
            overflow: "visible",
            border: "1px solid red",
        },
    },
    headerContent: {
        position: "absolute",
        width: "45%",
        [theme.breakpoints.down("md")]: {
            width: "50%",
        },
        [theme.breakpoints.down("sm")]: {
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
            marginBottom: theme.spacing(15),
        },
    },
    headerTitle: {
        color: theme.design.colors.waz_primaryColor300,
        fontSize: theme.typography.fontSize * 6,
        fontFamily: theme.design.font.lostaMasta,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "normal normal medium 68px/100px Losta Masta;",
        margin: 0,

        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize * 5,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize * 4,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize * 3,
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            fontSize: theme.typography.fontSize * 3,
            fontWeight: 800,
            marginBottom: theme.spacing(1),
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 6,
        fontFamily: theme.design.font.montserrat,

        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 8,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 8,
            width: "80%",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize + 6,
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            width: "100%",
        },
    },
    heroContainer: {
        height: "100%",
        width: "55%",
        position: "absolute",
        right: 0,
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clipped1.svg)`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginRight: theme.spacing(-10),
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.down("md")]: {
            width: "55%",
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    heroContainerMobile: {
        width: "130%",
        bottom: 0,
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg)`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "none",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
    },
    mobileHeroContainer: {
        overflowX: "hidden",
        width: "100%",
    },
    heroImageMobile: {
        width: "95%",
        marginTop: theme.spacing(-10),
    },
    heroImage: {
        width: "90%",
        height: "100%",
        marginLeft: "-10%",
        [theme.breakpoints.down(1450)]: {
            width: "90%",
            height: "90%",
        },
    },
    headerBtnContainer: {
        display: "flex",
        marginTop: theme.spacing(2),
    },
    headerIcon: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));
