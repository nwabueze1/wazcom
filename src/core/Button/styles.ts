import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

import { ButtonIconStyleProps, ButtonStyleProps } from "./types";


export const useButtonStyles = makeStyles((theme: BaseTheme) => ({
    root: (props: ButtonStyleProps) => ({
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: props.width ?? 132,
        height: props.height ?? 35,
        borderRadius: props.borderRadius ?? 5
    }),
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxSizing: 'border-box',
        WebkitTapHighlightColor: 'transparent',
        backgroundColor: theme.design.colors.waz_primary100,
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        textDecoration: 'none',
        color: 'inherit',
        fontSize: theme.typography.h5.fontSize
    },
    disabled: (props: ButtonStyleProps) => ({
        background: props.variant === 'contained' ? theme.design.colors.primary100 : '',
        opacity: 0.4,
    }),
    loading: (props: ButtonStyleProps) => ({
        background: props.variant === 'contained' ? theme.design.colors.primary100 : '',
        color: props.variant === 'outlined' ? theme.design.colors.primary100 : '', 
        borderColor: props.variant == 'outlined' ? theme.design.colors.primary100 : '',
    }),
    contained: {
        background: theme.design.colors.primary100,
        color: theme.design.colors.waz_white,
        textAlign: 'center',
        letterSpacing: 0,
        fontWeight: 600,
        '&:hover': {
            background: theme.design.colors.primary200
        },
        '&:focus': {
            background: theme.design.colors.primary300
        },
        '&:hover:focus': {
            background: theme.design.colors.primary300
        }

    },
    outlined: {
        background: theme.design.colors.waz_white,
        color: theme.design.colors.grey100,
        borderColor: theme.design.colors.primary600,
        fontWeight: theme.typography.fontWeightMedium,
        borderWidth: 1,
        borderStyle: 'solid',
        textAlign: 'center',

        '&:hover': {
            color: theme.design.colors.primary600,
            borderColor: theme.design.colors.primary600,
        },
        '&:focus': {
            color: theme.design.colors.primary100,
            borderColor: theme.design.colors.primary100,
        },
        '&:hover:focus': {
            color: theme.design.colors.primary100,
            borderColor: theme.design.colors.primary100,
        }

    },
    default: {
        background: theme.design.colors.waz_white,
        color: theme.design.colors.grey100,
        borderWidth: 0,
        textAlign: 'center',
        letterSpacing: 0,
        fontWeight: 600,
        '&:hover': {
            color: theme.design.colors.grey100,
        },
        '&:focus': {
            color: theme.design.colors.grey100,
        },
        '&:hover:focus': {
            color: theme.design.colors.grey100,
        }

    }
}));

export const useButtonIconStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        backgroundColor: 'transparent',
        display: 'inline-flex',
        alignSelf: 'center',
        flexShrink: 0
    },
    iconSpacing: (props: ButtonIconStyleProps) => ({
        marginRight: `${props.marginRight}px`,
        marginLeft: `${props.marginLeft}px`,
    })
}));

export const useButtonSpinnerStyles = makeStyles((theme: BaseTheme) => ({
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
