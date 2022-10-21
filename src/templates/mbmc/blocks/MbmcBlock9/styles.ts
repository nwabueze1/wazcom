import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock9Styles = makeStyles((theme: Theme) => ({
    root: {
        height: 800,
        backgroundColor: theme.design.colors.waz_white,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: theme.spacing(0, 8),
        width: "calc(100% - 128px)",
        gap: theme.spacing(2),

        [theme.breakpoints.down("lg")]: {
            height: 350,
            padding: theme.spacing(2, 4),
            width: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("md")]: {
            height: 350,
            padding: theme.spacing(2, 4),
            flexDirection: "column",
            width: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),

            height: "fit-content",
            width: "calc(100% - 16px)",
        },
    },
    headerContent: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: theme.spacing(2),

        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    carousel: {
        width: 750,
        [theme.breakpoints.down(780)]: {
            width: 700,
        },
        [theme.breakpoints.down(720)]: {
            width: 650,
        },
        [theme.breakpoints.down(680)]: {
            width: 580,
        },
        [theme.breakpoints.down(600)]: {
            width: 500,
        },
        [theme.breakpoints.down(520)]: {
            width: "100%",
        },
    },
    headerTitle: {
        color: theme.design.colors.waz_black,
        fontSize: theme.typography.fontSize * 4,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "normal normal medium 68px/100px Losta Masta;",
        margin: 0,
        textAlign: "center",
        marginBottom: theme.spacing(2),

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
            fontSize: theme.typography.fontSize * 2,
            fontWeight: 800,
            marginBottom: theme.spacing(1),
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        textAlign: "left",
        fontSize: theme.typography.fontSize * 2,
        width: "100%",
        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 8,
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

        [theme.breakpoints.down(1450)]: {
            width: "60%",
        },
        [theme.breakpoints.down("lg")]: {
            width: "70%",
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    headerCardContainerMobile: {
        width: "50%",
        display: "none",
        [theme.breakpoints.down(1450)]: {
            width: "60%",
        },
        [theme.breakpoints.down("lg")]: {
            width: "70%",
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            display: "block",
        },
    },
    pointContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        transition: " boxShadow 1s ease",
        borderRadius: "4px",
        border: `1px solid ${theme.design.colors.waz_grey300}`,
        boxSizing: "border-box",
        marginBottom: theme.spacing(2),
        padding: theme.spacing(3),
        boxShadow: "0px 3px 60px #00000014;",
    },
    point: {
        padding: theme.spacing(2, 4),
        fontSize: theme.typography.fontSize * 2,
        boxShadow: "0px 1px 10px #0000001A;",
        borderRadius: theme.spacing(1),
        marginRight: theme.spacing(2),
        color: theme.design.colors.waz_primaryColor300,
        fontWeight: theme.typography.fontWeightBold,
    },
    pointDescription: {
        color: theme.design.colors.waz_greyColor600,
        textAlign: "left",
        fontSize: theme.typography.fontSize + 6,
        width: "100%",
        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 6,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 4,
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
        fontSize: theme.typography.fontSize + 8,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "Losta Masta;",
        margin: 0,
        textAlign: "left",
        marginBottom: theme.spacing(0.5),

        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 8,
        },
        [theme.breakpoints.down("lg")]: {
            marginTop: theme.spacing(3),
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
        height: "90%",
        backgroundImage: `url(https://sytbuildr.s3.eu-west-2.amazonaws.com/images/mbmc/directionImage.svg)`,
        backgroundSize: "80%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // border: "2px solid red",
    },
    directionContainer: {
        width: "100%",
        height: "100%",
        border: "2px solid green",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2),
    },
}));
