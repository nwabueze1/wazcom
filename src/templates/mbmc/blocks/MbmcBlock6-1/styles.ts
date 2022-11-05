import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock61Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_greyColor50,
        padding: theme.spacing(9, 0),
    },
    block61Container: {
        maxWidth: 1240,
        width: "90%",
        margin: "0 auto",
    },
    block61Title: {
        color: theme.design.colors.waz_primaryColor300,
        fontSize: theme.typography.fontSize * 4,
        letterSpacing: 0,
        textTransform: "capitalize",
        font: "normal normal medium 68px/100px Losta Masta;",
        margin: 0,
        textAlign: "center",
        marginBottom: theme.spacing(1.5),
        fontFamily: theme.design.font.lostaMasta,

        [theme.breakpoints.down("md")]: {
            fontSize: theme.typography.fontSize * 2,
        },
    },
    block61Description: {
        color: theme.design.colors.waz_greyColor600,
        textAlign: "center",
        fontSize: theme.typography.fontSize + 5,
        position: 'relative',
        left: '27.5%',
        width: "45%",
        fontFamily: theme.design.font.montserrat,
        marginBottom: theme.spacing(2),
        lineHeight: 1.5,

        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(1),
            fontSize: theme.typography.fontSize + 4,
            width: '90%',
        },
        
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(1),
            fontSize: theme.typography.fontSize + 4,
            width: '100%',
        },
    },
}));
