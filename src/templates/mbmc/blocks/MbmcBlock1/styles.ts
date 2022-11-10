import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MbmcBlock1StyleProps } from "./types";

export const useMbmcBlock1Styles = makeStyles<Theme, MbmcBlock1StyleProps>((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_white,
        height: ({ fullHeight }) => (fullHeight ? "100vh" : "70vh"),
        position: "relative",
        overflow: "hidden",
    },
    block1Container: {
        maxWidth: 1240,
        width: "90%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        height: "100%",

        [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
        },
    },
    block1Content: {
        width: "45%",

        [theme.breakpoints.down("lg")]: {
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
            textAlign: "center",
        },
    },
    block1Heading: {
        color: theme.design.colors.waz_primaryColor300,
        fontSize: theme.typography.fontSize * 6,
        fontFamily: theme.design.font.lostaMasta,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "normal normal medium 68px/100px Losta Masta;",
        margin: 0,

        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize * 4 + 4,
        },

        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize * 3 + 10,
        },

        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            fontWeight: 800,
            marginBottom: theme.spacing(1),
        },
    },
    block1Description: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 6,
        fontFamily: theme.design.font.montserrat,
        lineHeight: 1.5,

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
    block1ImgContainer: {
        width: "55%",
        height: "100%",
        right: 0,
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    },
    block1ImgContainerMobile: {
        position: "absolute",
        bottom: 0,
        width: "100%",

        [theme.breakpoints.up("lg")]: {
            display: "none",
            position: ({ fullHeight }) => (fullHeight ? "absolute" : "relative"),
        },

        [theme.breakpoints.down("lg")]: {
            position: ({ fullHeight }) => (fullHeight ? "absolute" : "relative"),
        },

        [theme.breakpoints.down("md")]: {
            bottom: -40,
        },

        [theme.breakpoints.down("sm")]: {
            bottom: 0,
            position: "relative !important",
        },
    },
    block1MobileOverlay: {
        position: "absolute",
        bottom: "-70%",
        left: "-30vh",
        width: "180%",

        [theme.breakpoints.down("sm")]: {
            width: "260%",
            bottom: "-120%",
            left: "-35vh",
        },
    },
    block1ImageMobile: {
        width: "100%",
        objectFit: "cover",
        zIndex: 10,
        position: "relative",
        marginTop: theme.spacing(8),

        [theme.breakpoints.down("lg")]: {
            marginTop: ({ fullHeight }) => (fullHeight ? theme.spacing(8) : 0),
        },

        [theme.breakpoints.down("sm")]: {
            height: "100%",
            marginTop: ({ fullHeight }) =>
                fullHeight ? `${theme.spacing(0)} !important` : `${theme.spacing(8)} !important`,
        },
    },
    block1Image: {
        position: "relative",
        top: "5vh",
        width: ({ fullHeight }) => (fullHeight ? "95%" : "85%"),
        height: "90%",
        zIndex: 10,
        objectFit: "none",
    },
    block1Overlay: {
        position: "absolute",
        top: "-12vh",
    },
    block1BtnContainer: {
        display: "flex",
        marginTop: theme.spacing(3),
        gap: theme.spacing(1.5),
    },
    block1Icon: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));
