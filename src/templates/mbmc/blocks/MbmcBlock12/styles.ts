import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock12Styles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(7, 0),

        "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            background: `${theme.design.colors.waz_white} !important`,
            padding: `14px 16px !important`,
        },
    },
    container: {
        maxWidth: 1720,
        width: "85%",
        margin: "0 auto",
        display: "flex",
        position: "relative",
        justifyContent: "space-between",

        [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
            width: '90%',
        },

        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    headerContent: {
        width: "45%",

        [theme.breakpoints.down("lg")]: {
            paddingRight: theme.spacing(0),
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
        },

        [theme.breakpoints.down("sm")]: {
            position: "relative",
            left: "5%",
            width: "90%",
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
        border: "1px solid transparent",

        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize * 3,
            textAlign: "center",
        },

        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize * 2 + 8,
        },

        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginBottom: theme.spacing(1),
        },
    },
    headerDescription: {
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize + 2,
        fontFamily: theme.design.font.montserrat,
        lineHeight: 1.5,
        border: "1px solid transparent",

        [theme.breakpoints.down("lg")]: {
            fontSize: theme.typography.fontSize + 4,
            textAlign: "center",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.typography.fontSize + 4,
        },
    },
    button: {
        width: '100%',
        fontWeight: theme.typography.fontWeightMedium,
    },
    formContainer: {
        width: "45%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        fontFamily: theme.design.font.montserrat,

        [theme.breakpoints.down("lg")]: {
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

        [theme.breakpoints.down("sm")]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "Center",
            "& > div": {
                width: "fit-content",
            },
        },
    },
    btnParent: {
        width: "50%",
    },
    formInput: {
        marginBottom: theme.spacing(1.5),
    },
    formTextInput: {
        fontFamily: theme.design.font.montserrat,
        "& > div": {
            borderRadius: theme.spacing(6),
        },
        marginBottom: theme.spacing(2),
    },
    formTextArea: {
        borderRadius: theme.spacing(3),
        marginBottom: theme.spacing(2),
        fontFamily: theme.design.font.montserrat,
    },
    formButton: {
        position: "relative",
        top: -6,
        width: "100%",
        padding: theme.spacing(1, 0),
        fontWeight: theme.typography.fontWeightMedium,
    },
    form: {
        width: "90%",
        backgroundColor: theme.design.colors.waz_orangeColor50,
        padding: theme.spacing(6, 4),
        borderRadius: theme.spacing(0.5),

        [theme.breakpoints.down("lg")]: {
            width: "100%",
        },
    },
    demarcationContainer: {
        width: "16.5%",
        maxWidth: "195px",
        zIndex: 10,
        margin: theme.spacing(0, "auto"),
        right: 0,
        left: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",

        [theme.breakpoints.down("lg")]: {
            position: "relative",
            width: "100%",
            top: 0,
            margin: theme.spacing(4, 0),
            maxWidth: "unset",
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

        [theme.breakpoints.down("lg")]: {
            width: "100%",
            alignItems: "center",
            color: theme.design.colors.waz_greyColor150,
            flexDirection: "row",

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
    error: {
        color: theme.design.colors.waz_red,
        marginTop: theme.spacing(1),
    },
    success: {
        color: theme.design.colors.waz_successColor100,
        marginTop: theme.spacing(1),
    },
    block12ActiveElement: {
        border: "1px dashed",
        borderColor: theme.design.colors.waz_primaryColor100,
    },
}));
