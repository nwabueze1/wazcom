import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock3Styles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        height: 600,
        backgroundColor: theme.design.colors.waz_white,
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        padding: theme.spacing(2, 8),
        overflow: "hidden",
        [theme.breakpoints.down("lg")]: {
            height: 500,
            padding: theme.spacing(2, 4),
        },
        [theme.breakpoints.down("md")]: {
            height: 400,
            padding: theme.spacing(2, 4),
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),
            height: 550,
        },
    },
    headerContent: {
        position: "absolute",
        width: "45%",
        right: 0,
        [theme.breakpoints.down("md")]: {
            width: "55%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
        },
    },
    headerTitle: {
        color: theme.design.colors.waz_primaryColor300,
        fontSize: theme.typography.fontSize * 3,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "normal normal medium 68px/100px Losta Masta;",
        margin: 0,
        marginTop: theme.spacing(6),

        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize * 3,
        },
        [theme.breakpoints.down("lg")]: {
            marginTop: theme.spacing(3),
            fontSize: theme.typography.fontSize * 2,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize * 2,
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "left",
            fontSize: theme.typography.fontSize * 1.5,
            fontWeight: 800,
            marginBottom: theme.spacing(6),
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 6,
        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 3,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 3,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "left",
        },
    },
    heroContainer: {
        width: "60%",
        position: "absolute",
        left: 0,
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/clippedbackground2.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing(-20),

        [theme.breakpoints.down(1450)]: {
            height: 650,
            width: "60%",
        },
        [theme.breakpoints.down("lg")]: {
            height: 500,
            width: "65%",
            backgroundPosition: "initial",
        },
        [theme.breakpoints.down("md")]: {
            height: 400,
            width: "80%",
            marginLeft: theme.spacing(-25),
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    heroContainerMobile: {
        marginTop: theme.spacing(8),
        height: 100,
        width: "100%",
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/hero1mobile.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
        width: "80%",
        height: "100%",
        marginLeft: theme.spacing(30),
        [theme.breakpoints.down(1450)]: {
            width: "70%",
            marginLeft: theme.spacing(30),
            height: "100%",
        },
        [theme.breakpoints.down("lg")]: {
            marginTop: theme.spacing(10),
        },
        [theme.breakpoints.down("md")]: {
            width: "50%",
            height: "70%",
            marginTop: theme.spacing(12),
            marginLeft: theme.spacing(30),
        },
    },
    headerParagraph: {
        "& > p": {
            margin: theme.spacing(2, 0),
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
