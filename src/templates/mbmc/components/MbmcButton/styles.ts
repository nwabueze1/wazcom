import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useButtonStyles = makeStyles((theme: Theme) => ({
    button: {
        borderRadius: 100,
        fontSize: theme.typography.fontSize + 2,
        padding: theme.spacing(1.5, 5),
        textTransform: 'unset',
        fontWeight: theme.typography.fontWeightRegular,

        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(1, 2),
        },

        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1, 3),
            borderRadius: 30,
        },
    },
    buttonPrimary: {
        background: theme.design.colors.waz_orangeColor100,
    },
    buttonSecondary: {
        background: theme.design.colors.waz_primaryColor100,
    }
}));
