import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCheckoutStepStyles = makeStyles((theme: Theme) => ({
    root: {
        background: theme.design.colors.waz_white,
        padding: theme.spacing(4.5),
    },
    stepHeading: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    stepTitle: {
        fontFamily: theme.design.font.lostaMasta,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.fontSize + 6,
        color: theme.design.colors.waz_black,
        opacity: 0.6,
        transition: 'opacity 0.3s ease-in',
    },
    stepTitleActive: {
        opacity: 1,
        marginBottom: theme.spacing(3),
    }
}));
