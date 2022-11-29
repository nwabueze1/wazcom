import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock4Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_gold100,
        padding: theme.spacing(9, 0),

        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(5, 0),
        },
    },
    block6Container: {
        maxWidth: theme.include.styles.mbmc.maxWidth,
        width: "85%",
        margin: "0 auto",

        [theme.breakpoints.down("lg")]: {
            width: "90%",
        },
    },
    block4Content: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        marginBottom: theme.spacing(2),

        [theme.breakpoints.down("md")]: {
            width: "100%",
        },

        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    block4Heading: {
        color: theme.design.colors.waz_primaryColor200,
        fontSize: theme.typography.fontSize * 4,
        fontFamily: theme.design.font.lostaMasta,
        letterSpacing: 0,
        textTransform: "capitalize",
        margin: 0,
        textAlign: "center",
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",

        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize * 3,
            marginBottom: theme.spacing(2),
        },

        [theme.breakpoints.down("sm")]: {
            textAlign: "left",
            fontSize: theme.typography.fontSize * 2,
            fontWeight: 800,
        },
    },
    block4Description: {
        color: theme.design.colors.waz_greyColor600,
        textAlign: "center",
        fontSize: theme.typography.fontSize + 6,
        width: "45%",
        fontFamily: theme.design.font.montserrat,
        marginBottom: theme.spacing(3.5),
        lineHeight: 1.5,
        border: "1px solid transparent",
        transition: "all 0.3s ease-in",

        [theme.breakpoints.down("lg")]: {
            width: "80%",
        },

        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize + 2,
        },

        [theme.breakpoints.down("sm")]: {
            width: "100%",
            textAlign: "center",
        },
    },
    block4CardContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(2),
        flexWrap: "wrap",
        position: "relative",

        [theme.breakpoints.down("lg")]: {
            justifyContent: "center",
        },

        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    block4CardFlame: {
        position: "absolute",
        top: "50%",
        left: -40,
        width: 62,

        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    block4CardFlameRight: {
        left: "unset",
        right: -40,
    },
    block4Card: {
        width: "calc((100% - 32px) / 3)",
        zIndex: 2,

        [theme.breakpoints.down("md")]: {
            width: "calc((100% - 16px) / 2)",
        },

        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    block4CardHeading: {
        color: theme.design.colors.waz_orangeColor100,
    },
    block4ActiveElement: {
        border: "1px dashed",
        borderColor: theme.design.colors.waz_primaryColor100,
    },
}));
