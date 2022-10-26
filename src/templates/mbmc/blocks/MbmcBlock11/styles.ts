import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Layout } from "templates/mbmc/types";

export const useMbmcBlock11Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_white,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: ({ flexDirection }: { flexDirection: Layout }) => flexDirection,
        width: "calc(100% - 192px)",
        padding: theme.spacing(5, 12),

        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(5, 10),
            width: "calc(100% - 160px)",
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(4),
            width: "calc(100% - 64px)",
            height: "100%",
            overflow: "visible",
        },
    },
    headerContent: {
        width: "46%",

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
        color: theme.design.colors.waz_black,
        fontSize: theme.typography.fontSize * 4,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "normal normal medium 68px/100px Losta Masta;",
        margin: 0,
        fontFamily: theme.design.font.lostaMasta,

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
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 6,
        fontFamily: theme.design.font.montserrat,
        lineHeight: 1.5,

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
        height: 519,
        width: "48%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("lg")]: {
            height: 419,
        },
        [theme.breakpoints.down("md")]: {
            height: 319,
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    heroContainerMobile: {
        marginTop: theme.spacing(8),
        width: "120%",
        display: "none",
        alignItems: "center",

        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
    },
    heroImageMobile: {
        width: "90%",
        marginTop: theme.spacing(-10),
        borderRadius: theme.spacing(0.5),
    },
    heroImage: {
        width: "100%",
        height: "100%",
        borderRadius: theme.spacing(0.5),
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
