import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock61Styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.design.colors.waz_greyColor50,
        padding: theme.spacing(9, 0),
    },
    block61Container: {
        maxWidth: 1110,
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
        marginBottom: theme.spacing(1),
        fontFamily: theme.design.font.lostaMasta,

        [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(2),
            fontSize: theme.typography.fontSize * 2,
        },
    },
    block61Description: {
        color: theme.design.colors.waz_greyColor600,
        textAlign: "center",
        fontSize: theme.typography.fontSize + 5,
        position: 'relative',
        left: '22.5%',
        width: "55%",
        fontFamily: theme.design.font.montserrat,
        marginBottom: theme.spacing(7),
        lineHeight: 1.5,

        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(5),
            fontSize: theme.typography.fontSize + 4,
            left: '10%',
            width: '90%',
        },
        
        [theme.breakpoints.down("sm")]: {
            left: 0,
            width: '100%',
        },
    },
    block61Categories: {
        background: theme.design.colors.waz_white,
        borderRadius: '50px',
        padding: theme.spacing(0.5),
        boxShadow: "0px 5px 18px -2px rgba(68, 68, 68, 0.12)",
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(2),
        marginBottom: theme.spacing(8),

        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1),
            borderRadius: '8px',
            marginBottom: theme.spacing(5),
        },
    },
    block61Category: {
        fontFamily: theme.design.font.montserrat,
        color: theme.design.colors.waz_black,
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s ease-in',
        padding: theme.spacing(2, 4),
        fontSize: theme.typography.fontSize + 1,
        fontWeight: theme.typography.fontWeightMedium,
        cursor: 'pointer',

        [theme.breakpoints.down("sm")]: {
            borderRadius: '8px',
        },
    },
    block61CategoryActive: {
        background: theme.design.colors.waz_orangeColor100,
        color: theme.design.colors.waz_white,
    },
    block61Items: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(4),
    },
    block61Item: {
        width: 'calc((100% - 64px) / 3)',

        [theme.breakpoints.down("md")]: {
            width: 'calc((100% - 32px) / 2)',
        },

        [theme.breakpoints.down("sm")]: {
            width: '100%',
        },
    },
    block61ItemHeading: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: theme.typography.fontSize + 4,
    },
    block61ItemPrice: {
        color: theme.design.colors.waz_primaryColor200,
    }
}));
