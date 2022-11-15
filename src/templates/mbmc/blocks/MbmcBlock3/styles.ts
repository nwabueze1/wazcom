import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock3Styles = makeStyles((theme: Theme) => ({
    root: {
        position: "relative",
        overflow: "hidden",
        background: theme.design.colors.white,
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",
    },
    block3Container: {
        position: "relative",
        maxWidth: 1240,
        width: "90%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        zIndex: 10,
    },
    block3ImageContainer: {
        width: "50%",

        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    },
    block3Image: {
        width: "95%",
        position: "relative",
        top: 60,
        objectFit: "cover",
    },
    block3Content: {
        position: "relative",
        top: "-10vh",
        width: "50%",

        [theme.breakpoints.down("lg")]: {
            width: "100%",
            top: 0,
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
        },

        [theme.breakpoints.down("sm")]: {
            width: "100%",
            top: 0,
            paddingTop: theme.spacing(7),
            paddingBottom: theme.spacing(7),
        },
    },
    block3Heading: {
        color: theme.design.colors.waz_primaryColor300,
        fontSize: theme.typography.fontSize * 4,
        letterSpacing: 0,
        margin: 0,
        fontFamily: theme.design.font.lostaMasta,
        width: "90%",
        marginBottom: theme.spacing(2),
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",

        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize * 3,
            width: "100%",
            marginBottom: theme.spacing(5),
        },

        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize * 3,
            width: "100%",
            marginBottom: theme.spacing(4),
        },

        [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.fontSize * 2,
            textTransform: "capitalize",
        },
    },
    block3ContentImageContainer: {
        position: "relative",
        display: "flex",
        justifyContent: "center",

        [theme.breakpoints.up("lg")]: {
            display: "none",
        },

        "& img.hero": {
            position: "relative",
            zIndex: 10,
            width: "70%",
        },

        "& img.overlay": {
            position: "absolute",
            top: 0,
            left: "-10vw",
            width: "60%",
        },
    },
    block3Description: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 4,
        fontFamily: theme.design.font.montserrat,
        lineHeight: 1.5,
        width: "90%",
        marginBottom: theme.spacing(2.5),
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",

        [theme.breakpoints.down("lg")]: {
            width: "100%",
            margin: theme.spacing(2.5, 0),
        },
    },
    block3Ctas: {
        display: "flex",
        gap: theme.spacing(1.5),
    },
    block3ImageOverlay: {
        position: "absolute",
        top: "-24vh",
        left: "-20vw",

        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    },
    block3ActiveElement: {
        border: "1px dashed",
        borderColor: theme.design.colors.waz_primaryColor100,
    },
}));
