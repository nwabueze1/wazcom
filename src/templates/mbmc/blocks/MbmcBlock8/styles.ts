import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock8Styles = makeStyles((theme: Theme) => ({
    root: {
        height: 350,
        backgroundColor: theme.design.colors.waz_orangeColor100,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: theme.spacing(0, 8),
        width: "calc(100% - 128px)",

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
        color: theme.design.colors.waz_white,
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
        color: theme.design.colors.waz_orangeColor50,
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
        width: "50%",
        display: "block",
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
}));
