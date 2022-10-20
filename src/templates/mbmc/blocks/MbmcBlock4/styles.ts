import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock4Styles = makeStyles((theme: Theme) => ({
    root: {
        width: "100%",
        height: 700,
        backgroundColor: theme.design.colors.waz_gold100,
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        overflow: "hidden",

        [theme.breakpoints.down("lg")]: {
            height: 500,
            padding: theme.spacing(2, 4),
        },
        [theme.breakpoints.down("md")]: {
            height: 400,
            padding: theme.spacing(2, 4),
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),
            height: "fit-content",
        },
    },
    headerContent: {
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
    headerTitle: {
        color: theme.design.colors.waz_primaryColor300,
        fontSize: theme.typography.fontSize * 3,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "normal normal medium 68px/100px Losta Masta;",
        margin: 0,
        textAlign: "center",
        marginTop: theme.spacing(6),

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
            fontWeight: 800,
            marginBottom: theme.spacing(1),
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        textAlign: "center",
        fontSize: theme.typography.fontSize + 6,
        width: "60%",
        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 3,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 3,
        },
        [theme.breakpoints.down("md")]: {
            width: "80%",
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            textAlign: "center",
        },
    },
    headerCardContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
}));
