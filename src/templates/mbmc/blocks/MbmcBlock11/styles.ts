import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BlockLayout } from "templates/mbmc/types";

export const useMbmcBlock11Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_white,
        position: "relative",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        justifyContent: "space-between",
        padding: theme.spacing(10, 0),

        [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
        },
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(4, 0),
            height: "100%",
            overflow: "visible",
        },
    },
    block11Container: {
        maxWidth: 1240,
        width: "90%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: ({ flexDirection }: { flexDirection: BlockLayout }) => flexDirection,
    },
    block11Content: {
        width: "46%",

        [theme.breakpoints.down("md")]: {
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            overflowX: "hidden",
        },
    },
    block11Heading: {
        color: theme.design.colors.waz_black,
        fontSize: theme.typography.fontSize * 4,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "normal normal medium 68px/100px Losta Masta;",
        margin: 0,
        fontFamily: theme.design.font.lostaMasta,
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",
        width: 'fit-content',

        [theme.breakpoints.down("lg")]: { 
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            fontSize: theme.typography.fontSize * 3,
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            textAlign: "left",
            fontWeight: 800,
            marginBottom: theme.spacing(3),
        },
    },
    block11Description: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 6,
        fontFamily: theme.design.font.montserrat,
        lineHeight: 1.5,
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",

        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 4,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.fontSize * 1.5,
            textAlign: "left",
        },
    },
    heroContainer: {
        width: "48%",
        position: "relative",
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.down("lg")]: {
            minHeight: 419,
        },

        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    heroContainerMobile: {
        marginTop: theme.spacing(8),
        width: "120%",
        display: "none",
        alignItems: "center",

        [theme.breakpoints.down("md")]: {
            display: "flex",
            marginTop: theme.spacing(0),
        },
    },
    heroImageMobile: {
        width: "90%",
        marginTop: theme.spacing(-10),
        borderRadius: theme.spacing(0.5),

        [theme.breakpoints.down("lg")]: {
            marginTop: theme.spacing(0),
        },
    },
    heroImage: {
        width: "100%",
        height: "100%",
        minHeight: 500,
        borderRadius: theme.spacing(0.5),
        objectFit: 'cover',

        [theme.breakpoints.down("lg")]: {
            minHeight: 419,
        },
    },
    block11Paragraph: {
        "& > p": {
            margin: theme.spacing(2, 0),
        },
    },
    block11BtnContainer: {
        display: "flex",
        margin: theme.spacing(2, 0),

        [theme.breakpoints.down("md")]: {
            margin: 0,
        },
    },
    block11Icon: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    block11ActiveElement: {
        border: "1px dashed",
        borderColor: theme.design.colors.waz_primaryColor100,
    },
}));
