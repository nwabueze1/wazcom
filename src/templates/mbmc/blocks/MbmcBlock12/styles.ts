import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Layout } from "templates/mbmc/types";

export const useMbmcBlock12Styles = makeStyles((theme: Theme) => ({
    root: {
        width: "calc(100% - 192px)",
        padding: theme.spacing(7, 12),

        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(5, 10),
            width: "calc(100% - 160px)",
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2, 1),
            width: "calc(100% - 16px)",
        },
    },
    container: {
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        overflow: "hidden",
        flexDirection: ({ flexDirection }: { flexDirection: Layout }) => flexDirection,

        [theme.breakpoints.down("sm")]: {
            display: "block",
            width: "100%",
        },
    },
    headerContent: {
        width: "45%",
        paddingRight: theme.spacing(4),

        [theme.breakpoints.down("sm")]: {
            paddingRight: theme.spacing(0),
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
            textAlign: "center",
            fontSize: theme.typography.fontSize * 3,
            fontWeight: 800,
            marginBottom: theme.spacing(1),
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 2,
        fontFamily: theme.design.font.montserrat,
        lineHeight: 1.5,

        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 4,
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.fontSize + 4,
            textAlign: "center",
        },
    },
    formContainer: {
        width: "45%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            height: "100%",
            width: "100%",
        },
    },
    headerParagraph: {
        "& > p": {
            margin: theme.spacing(2, 0),
        },
    },
    headerBtnContainer: {
        width: "100%",
        display: "flex",
        margin: theme.spacing(2, 0),
        gap: theme.spacing(2),

        "& > div": {
            width: "100%",
        },

        [theme.breakpoints.down("sm")]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "Center",
            "& > div": {
                width: "fit-content",
            },
        },
    },
    input: {
        "& > div": {
            borderRadius: theme.spacing(6),
        },
        marginBottom: theme.spacing(2),
    },
    textArea: {
        borderRadius: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    button: {
        width: "100%",
        padding: theme.spacing(1, 0),
    },
    form: {
        width: "90%",
        backgroundColor: theme.design.colors.waz_orangeColor50,
        padding: theme.spacing(6, 4),
        borderRadius: theme.spacing(0.5),
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },

    demarcationContainer: {
        width: "10%",
        height: "100%",
        position: "absolute",
        zIndex: 10,
        margin: theme.spacing(0, "auto"),
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",

        [theme.breakpoints.down("sm")]: {
            position: "relative",
            width: "100%",
            marginBottom: theme.spacing(1),
        },
    },
    demarcation: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 6,
        flexDirection: "column",
        fontFamily: theme.design.font.openSans,
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 2,

        "&::before": {
            content: "''",
            height: "100%",
            background: theme.design.colors.waz_greyColor150,
            display: "block",
            width: 1,
            marginBottom: theme.spacing(1),
        },
        "&::after": {
            content: "''",
            height: "100%",
            width: 1,
            display: "block",
            background: theme.design.colors.waz_greyColor150,
            marginTop: theme.spacing(1),
        },

        [theme.breakpoints.down("sm")]: {
            width: "100%",
            alignItems: "center",
            color: theme.design.colors.waz_greyColor150,
            flexDirection: "row",
            margin: theme.spacing(6, 0),

            "&::before": {
                content: "''",
                height: 1,
                background: theme.design.colors.waz_greyColor150,
                display: "block",
                width: "100%",
                marginRight: theme.spacing(1),
                marginBottom: theme.spacing(0),
            },
            "&::after": {
                content: "''",
                height: 1,
                width: "100%",
                display: "block",
                background: theme.design.colors.waz_greyColor150,
                marginLeft: theme.spacing(1),
                marginTop: theme.spacing(0),
            },
        },
    },
}));
