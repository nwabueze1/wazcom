import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock7Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_white,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "calc(100% - 192px)",
        padding: theme.spacing(6, 12),

        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(5, 10),
            width: "calc(100% - 160px)",
        },
        [theme.breakpoints.down("md")]: {
            height: "100%",
            padding: theme.spacing(2, 4),
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
        fontSize: theme.typography.fontSize * 4,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "normal normal medium 68px/100px Losta Masta;",
        margin: 0,
        textAlign: "center",
        marginTop: theme.spacing(6),
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
            fontWeight: 800,
            marginBottom: theme.spacing(1),
            width: "100%",
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        textAlign: "center",
        fontSize: theme.typography.fontSize + 6,
        width: "60%",
        fontFamily: theme.design.font.montserrat,
        marginBottom: theme.spacing(6),

        [theme.breakpoints.down(1450)]: {
            fontSize: theme.typography.fontSize + 3,
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 3,
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.down("md")]: {
            width: "80%",
            fontSize: theme.typography.fontSize + 2,
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            textAlign: "left",
        },
    },
    headerCardContainer: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            display: "none",
            width: "100%",
        },
    },
    imageContainer: {
        width: "100%",
        borderRadius: 4,
        height: "100%",
    },
    flexGrow: {
        gridRow: "1 / span 2",
        gridColumn: "3/3",
    },
    mobileCardContainer: {
        width: "100%",
        display: "none",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: theme.spacing(1),
        height: "100%",
        [theme.breakpoints.down("sm")]: {
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridTemplateRows: "auto auto auto",
        },
    },
}));
