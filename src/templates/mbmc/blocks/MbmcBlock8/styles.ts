import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock8Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_orangeColor100,
        overflow: "hidden",
        boxSizing: "border-box",
        padding: theme.spacing(9, 0),
        width: "100%",

        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(5, 0),
        },
    },
    headerContainer: {
        maxWidth: 1240,
        width: "90%",
        margin: "0 auto",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',

        [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
        },
    },
    headerContent: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: theme.spacing(2),

        [theme.breakpoints.down("lg")]: {
            width: "100%",
            alignItems: 'center',
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
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",

        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize * 3,
        },

        [theme.breakpoints.down("lg")]: {
            marginTop: theme.spacing(3),
            fontSize: theme.typography.fontSize * 2,
        },

        [theme.breakpoints.down("md")]: {
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
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",

        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 6,
        },

        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 6,
            textAlign: 'center',
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
        [theme.breakpoints.down("lg")]: {
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
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: theme.spacing(1),
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "1fr",
        },
    },
    headerIcon: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    navigationButton: {
        color: "black",
        fontSize: theme.typography.fontSize * 3,
    },
    arrow: {
        fontWeight: 900,
        fontSize: theme.typography.fontSize * 3,
    },
    block8ActiveElement: {
        border: "1px dashed",
        borderColor: theme.design.colors.waz_primaryColor100,
    },
}));
