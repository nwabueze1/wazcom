import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

import { ButtonIconStyleProps, ButtonStyleProps } from "./types";


export const useButtonStyles = makeStyles((theme: BaseTheme) => ({
    root: (props: ButtonStyleProps) => ({
        position: 'relative',
        width: props.width ?? 132,
        height: props.height ?? 35,
        borderRadius: props.borderRadius ?? 5
    }),
    button: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        boxSizing: 'border-box',
        WebkitTapHighlightColor: 'transparent',
        backgroundColor: 'transparent',
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
    },
    disabled: {
        background: theme.design.colors.primary100,
        opacity: 0.4,
    },
    contained: {
        background: theme.design.colors.primary100,
        color: '#FFFFFF',
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
        background: theme.design.colors.primary100,
        color: '#FFFFFF',
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
