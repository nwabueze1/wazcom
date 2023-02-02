import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

export const useSpinnerStyles = makeStyles((theme: BaseTheme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: 28,
        height: 28,
        background: 'transparent',
        '& svg': {
            position: 'absolute',
            height: 20,
            width: 20
        }
    },
    contained: {
        animation: '$mySpinner 0.9s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        color: theme.design.colors.waz_white,
    },
    outlined: {
        animation: '$mySpinner 0.9s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        color: theme.design.colors.waz_primaryColor100,
    },
    default: {
        animation: '$mySpinner 0.9s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        color: theme.design.colors.grey100,
    },
    "@keyframes mySpinner": {
        "0%": {
            transform: 'rotate(0deg)'
        },
        "100%": {
            transform: 'rotate(360deg)'
        }
    },
}));
