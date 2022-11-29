import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useButtonStyles = makeStyles((theme: Theme) => ({
    button: {
        borderRadius: 100,
        width: "fit-content",
        fontSize: theme.typography.fontSize + 2,
        padding: theme.spacing(1.5, 5),
        textTransform: "unset",
        fontWeight: theme.typography.fontWeightRegular,
        border: '1px solid transparent',
        transition: 'all 0.3s ease-in',

        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(1, 2),
        },

        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(1, 3),
            borderRadius: 30,
        },
    },
    buttonSmall: {
        padding: theme.spacing(1, 3),
        fontSize: theme.typography.fontSize,
    },
    buttonPrimary: {
        background: `${theme.design.colors.waz_orangeColor100} !important`,
    },
    buttonSecondary: {
        background: `${theme.design.colors.waz_primaryColor200} !important`,
    },
    buttonNeutral: {
        background: `${theme.design.colors.waz_white} !important`,
        color: theme.design.colors.waz_black,
    },
    buttonActive: {
        border: "1px dashed",
        borderColor: theme.design.colors.waz_primaryColor100,
    },
}));
