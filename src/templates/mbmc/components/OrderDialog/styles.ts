import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useMbmcBlock16Styles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    dialogContainer: {
        width: '39%',
        zIndex: 10,
        background: 'rgba(255, 255, 255, 0.9)',
        padding: theme.spacing(2),
        borderRadius: 5,
    },
    topContent: {
        display: "flex",
        gap: "8px",
        marginBottom: theme.spacing(2),
    },
    dialogImage: {
        width: "31%",
        maxHeight: "125px",
        height: '100%',
        borderRadius: "5px",
        objectFit: 'cover',

        [theme.breakpoints.down("md")]: {
            height: "89%",
        },
    },
    content: {
        width: "60%",
    },
    title: {
        letterSpacing: "0px",
        color: theme.design.colors.waz_black,
        textTransform: "capitalize",
        fontSize: theme.typography.fontSize + 6,
        fontFamily: theme.design.font.lostaMasta,
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            fontFamily: theme.design.font.montserrat,
        },
    },
    description: {
        letterSpacing: "0px",
        color: theme.design.colors.waz_greyColor600,
        fontSize: theme.typography.fontSize,
        fontFamily: theme.design.font.montserrat,
        [theme.breakpoints.down("md")]: {
            color: "black",
        },
    },
    priceContainer: {
        marginTop: theme.spacing(2),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    price: {
        letterSpacing: "0px",
        color: theme.design.colors.waz_primaryColor200,
        fontSize: theme.typography.fontSize + 6,
        fontFamily: theme.design.font.montserrat,
        fontWeight: theme.typography.fontWeightMedium,
    },
    quantityCountContainer: {
        display: "flex",
        fontFamily: theme.design.font.montserrat,
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.design.colors.waz_primaryColor200,
        alignItems: "center",
        gap: "12px",
    },
    quantityButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "32px",
        height: "32px",
        fontSize: "14px",
        fontWeight: theme.typography.fontWeightMedium,
        backgroundColor: theme.design.colors.waz_white,
        boxShadow: "0px 1px 4px #0000001A",
        borderRadius: "5px",
        color: theme.design.colors.waz_primaryColor200,
        cursor: "pointer",
    },
    operationIcon: {
        color: theme.design.colors.waz_primaryColor200,
        fontSize: theme.typography.fontSize * 2,
        fontWeight: theme.typography.fontWeightMedium,
    },
    disable: {
        opacity: 0.4,
    },
    dialogOptionsContent: {
        background: theme.design.colors.waz_white,
        padding: theme.spacing(3),
        borderRadius: 5,
        maxHeight: '50vh',
        overflowY: 'auto',

        "&::-webkit-scrollbar": {
            width: 4,
	        background: 'rgba(0,0,0,0.05)',
        },

        "&::-webkit-scrollbar-thumb": {
            background: 'rgba(0,0,0,0.25)',
        },

        "&::-webkit-scrollbar-track": {
            background: 'rgba(0,0,0,0.01)',
        }
    },
    dialogButtonContainer: {
        position: 'sticky',
        bottom: 0,
        background: theme.design.colors.waz_white,
    },
    dialogButton: {
        width: '100%',
        padding: theme.spacing(1, 0),
        fontSize: theme.typography.fontSize + 2,
    }
}));
