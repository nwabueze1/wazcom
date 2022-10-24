import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock2Styles = makeStyles((theme: Theme) => ({
    root: {
        width: "calc(100% - 128px)",
        height: 400,
        backgroundColor: theme.design.colors.waz_white,
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2, 8),
        overflow: "hidden",
        [theme.breakpoints.down("md")]: {
            height: 300,
            padding: theme.spacing(2, 4),
            width: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "flex-start",
            padding: theme.spacing(0.5),
            width: "calc(100% - 8px)",
            height: "100%",
            overflow: "visible",
        },
    },
    headerContent: {
        position: "absolute",
        width: "45%",
        [theme.breakpoints.down("md")]: {
            width: "55%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            position: "relative",
            height: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: theme.spacing(10),
            marginTop: theme.spacing(4),
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
            fontSize: theme.typography.fontSize * 2,
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            fontSize: theme.typography.fontSize * 2,
            fontWeight: 800,
            marginBottom: theme.spacing(1),
        },
    },
    heroContainer: {
        height: 500,
        width: "50%",
        position: "absolute",
        right: 0,
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clipped1.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        marginRight: theme.spacing(-5),

        [theme.breakpoints.down(1450)]: {
            width: "50%",
            marginRight: theme.spacing(-5),
        },
        [theme.breakpoints.down("md")]: {
            width: "70%",
            marginRight: theme.spacing(-5),
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    heroContainerMobile: {
        height: 350,
        marginBottom: theme.spacing(-12),
        width: "100%",
        bottom: 0,
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg)`,
        backgroundRepeat: "no-repeat",

        marginRight: theme.spacing(-11),
        display: "none",
        alignItems: "center",

        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
    },
    heroImageMobile: {
        width: "95%",
        marginTop: theme.spacing(-10),
    },
    heroImage: {
        width: 450,
        [theme.breakpoints.down("lg")]: {
            width: 400,
            marginBottom: theme.spacing(2),
            marginLeft: theme.spacing(-1),
        },
        [theme.breakpoints.down("md")]: {
            width: 300,
            marginBottom: theme.spacing(2),
            marginLeft: theme.spacing(5),
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
