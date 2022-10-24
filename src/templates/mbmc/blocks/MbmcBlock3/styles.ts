import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock3Styles = makeStyles((theme: Theme) => ({
    root: {
        width: "calc(100% - 128px)",
        height: 700,
        backgroundColor: theme.design.colors.waz_white,
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        padding: theme.spacing(0, 8),
        overflow: "hidden",
        [theme.breakpoints.down("lg")]: {
            height: 500,
            padding: theme.spacing(0, 4),
            width: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("md")]: {
            height: 400,
        },
        [theme.breakpoints.down("sm")]: {
            height: "100%",
            overflow: "visible",
        },
    },
    headerContent: {
        position: "absolute",
        width: "50%",
        right: 0,
        marginTop: "5%",
        padddingRight: theme.spacing(8),
        [theme.breakpoints.down("md")]: {
            width: "45%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            overflowX: "hidden",
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
            fontSize: theme.typography.fontSize * 2,
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            textAlign: "left",
            fontSize: theme.typography.fontSize * 3,
            fontWeight: 800,
            marginBottom: theme.spacing(6),
            padding: theme.spacing(0, 2),
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 6,
        width: "80%",
        fontFamily: theme.design.font.montserrat,
        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 6,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 4,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.fontSize * 2,
            textAlign: "left",
        },
    },
    heroContainer: {
        height: "100%",
        width: "60%",
        position: "relative",
        left: 0,
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clippedbackground2.svg)`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing(-35),

        // [theme.breakpoints.down("lg")]: {
        //     width: "65%",
        //     marginLeft: theme.spacing(-25),
        //     backgroundPosition: "initial",
        // },
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
        width: "120%",
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg)`,
        backgroundSize: "cover",
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
    },
    headerIcon: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));
