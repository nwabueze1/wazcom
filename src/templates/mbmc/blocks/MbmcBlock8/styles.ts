import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock8Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_orangeColor100,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: theme.spacing(9, 12),
        width: "calc(100% - 192px)",

        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(2, 4),
            width: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2, 4),
            flexDirection: "column",
            width: "calc(100% - 64px)",
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(4),
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
        width: "100%",
        height: "100%",
        [theme.breakpoints.down(520)]: {
            width: "100%",
        },
    },
    headerTitle: {
        color: theme.design.colors.waz_white,
        fontSize: theme.typography.fontSize * 4,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "normal normal medium 68px/100px Losta Masta;",
        margin: 0,
        textAlign: "center",
        marginBottom: theme.spacing(2),
        fontFamily: theme.design.font.lostaMasta,
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
        color: theme.design.colors.waz_orangeColor50,
        textAlign: "left",
        fontSize: theme.typography.fontSize + 6,
        width: "90%",
        fontFamily: theme.design.font.montserrat,
        opacity: 0.7,
        lineHeight: 1.4,
        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 6,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 6,
        },
        [theme.breakpoints.down("md")]: {
            width: "80%",
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.fontSize + 4,
            width: "100%",
        },
    },
    headerCardContainer: {
        width: "50%",
        height: "auto",
        display: "block",
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
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            display: "block",
        },
    },
    scrollContainer: {
        overflowX: "scroll",
        width: "90%",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    overallContainer: {
        width: "100%",
    },
    carouselComponent: {
        width: "calc(100% - 20px)",
        display: "flex",
        alignItem: "center",
        justifyContent: "space-between",
        gap: theme.spacing(1),
        marginLeft: theme.spacing(1),
    },
    headerIcon: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));
