import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock1Styles = makeStyles((theme: Theme) => ({
    root: {
        width: "calc(100% - 64px)",
        height: 600,
        backgroundColor: theme.design.colors.waz_white,
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        padding: theme.spacing(0, 8),
        overflow: "hidden",
        [theme.breakpoints.down("md")]: {
            height: 400,
            padding: theme.spacing(2, 4),
            width: "calc(100% - 32px)",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            padding: theme.spacing(0.5),
            width: "calc(100% - 8px)",
            height: "100%",
            overflow: "visible",
        },
    },
    headerContent: {
        position: "absolute",
        width: "45%",
        marginTop: "5%",
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
        },
    },
    heroContainer: {
        height: "100%",
        width: "55%",
        position: "absolute",
        right: 0,
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clipped1.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: theme.spacing(-11),
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down(1450)]: {
            width: "70%",
            marginRight: theme.spacing(-20),
        },
        [theme.breakpoints.down("lg")]: {
            width: "75%",
            marginRight: theme.spacing(-20),
            backgroundPosition: "initial",
        },
        [theme.breakpoints.down("md")]: {
            width: "55%",
            marginRight: theme.spacing(-6),
            backgroundPosition: "initial",
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    heroContainerMobile: {
        marginBottom: theme.spacing(-12),
        width: "100%",
        bottom: 0,
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginRight: -90,
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
        width: "80%",
        height: "80%",
        marginLeft: theme.spacing(-5),
        [theme.breakpoints.down(1450)]: {
            width: "70%",
            marginLeft: theme.spacing(3),
            height: "60%",
        },
        [theme.breakpoints.down("md")]: {
            width: "50%",
            marginLeft: theme.spacing(5),
            height: "50%",
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
