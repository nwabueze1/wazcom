import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock6Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_greyColor50,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "calc(100% - 192px)",
        padding: theme.spacing(10, 12),

        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(5, 10),
            width: "calc(100% - 160px)",
        },
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(5, 4),
            width: "calc(100% - 32px)",
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(4, 1),
            height: "fit-content",
        },
    },
    headerContent: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        marginBottom: theme.spacing(4),
    },
    headerTitle: {
        color: theme.design.colors.waz_primaryColor300,
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
            fontSize: theme.typography.fontSize * 1.5,
            fontWeight: 600,
            marginBottom: theme.spacing(1),
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        textAlign: "center",
        fontSize: theme.typography.fontSize + 6,
        width: "60%",
        fontFamily: theme.design.font.montserrat,
        marginBottom: theme.spacing(2),

        [theme.breakpoints.down("lg")]: {
            width: "80%",
        },
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(1),
            fontSize: theme.typography.fontSize + 4,
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            textAlign: "center",
            fontSize: theme.typography.fontSize + 2,
        },
    },
    headerCardContainer: {
        width: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(2),
    },
    scrollContainer: {
        overflowX: "scroll",
        width: "100%",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    overallContainer: {
        width: "100%",
    },
}));
