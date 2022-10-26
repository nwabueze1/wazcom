import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock3Styles = makeStyles((theme: Theme) => ({
    root: {
        width: "calc(100% - 128px)",
        backgroundColor: theme.design.colors.waz_white,
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        padding: theme.spacing(0, 8),
        border: "1px solid red",

        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(5, 0),
            width: "100%",
            height: "100%",
            overflow: "visible",
        },
    },
    headerContent: {
        position: "absolute",
        width: "50%",
        right: 0,
        marginTop: "5%",

        [theme.breakpoints.down("md")]: {
            width: "45%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 0,
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
        },
    },
    headerTitle: {
        color: theme.design.colors.waz_primaryColor300,
        fontSize: theme.typography.fontSize * 4,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "normal normal medium 68px/100px Losta Masta;",
        margin: 0,
        marginTop: theme.spacing(6),
        fontFamily: theme.design.font.lostaMasta,
        width: "90%",

        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize * 4,
        },
        [theme.breakpoints.down("lg")]: {
            marginTop: theme.spacing(3),
            fontSize: theme.typography.fontSize * 3,
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            fontSize: theme.typography.fontSize * 2,
        },
        [theme.breakpoints.down("sm")]: {
            width: "fit-content",
            textAlign: "left",
            fontSize: theme.typography.fontSize * 2,
            fontWeight: 800,
            marginBottom: theme.spacing(3),
            padding: theme.spacing(0, 2),
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 6,
        width: "80%",
        fontFamily: theme.design.font.montserrat,

        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 6,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize + 4,
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2),
            width: "fit-content",
            fontSize: theme.typography.fontSize + 4,
            textAlign: "left",
        },
    },
    heroContainer: {
        height: "100vh",
        width: "65%",
        position: "relative",
        left: 0,
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clippedbackground2.svg)`,
        backgroundSize: "99%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing(-40),

        [theme.breakpoints.down("md")]: {
            width: "60%",
            marginLeft: theme.spacing(-18),
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    heroContainerMobile: {
        marginTop: theme.spacing(8),
        width: "100%",
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg)`,
        backgroundSize: "105%",
        backgroundRepeat: "no-repeat",
        display: "none",
        alignItems: "center",

        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
    },
    heroImageMobile: {
        width: "90%",
        marginTop: theme.spacing(-10),
    },
    heroImage: {
        width: "80%",
        height: "100%",
        position: "absolute",
        bottom: 0,
        right: 0,
        marginBottom: theme.spacing(-10),
        marginRight: theme.spacing(-18),
        [theme.breakpoints.down(1450)]: {
            width: "80%",
            height: "100%",
        },
        [theme.breakpoints.down("lg")]: {
            marginTop: theme.spacing(10),
        },
        [theme.breakpoints.down("md")]: {
            marginRight: theme.spacing(-10),
        },
    },
    headerParagraph: {
        "& > p": {
            margin: theme.spacing(2, 0),
        },
    },
    headerBtnContainer: {
        display: "flex",
        margin: theme.spacing(2, 0),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(0, 2),
            margin: theme.spacing(0),
        },
    },
    headerIcon: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));
