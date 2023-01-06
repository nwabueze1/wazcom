import { createUseStyles } from 'react-jss'
import { ButtonIconStyleProps } from "./types";

export const useButtonStyles = createUseStyles({
    root: {
        position: 'relative',
        backgroundColor: 'transparent'
    },
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
});

export const useButtonIconStyles = createUseStyles({
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
});
