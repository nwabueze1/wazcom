import makeStyles from "@mui/styles/makeStyles";
export var useButtonStyles = makeStyles(function (theme) { return ({
    root: function (props) {
        var _a, _b, _c;
        return ({
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // gap: '10px',
            width: (_a = props.width) !== null && _a !== void 0 ? _a : 132,
            height: (_b = props.height) !== null && _b !== void 0 ? _b : 35,
            borderRadius: (_c = props.borderRadius) !== null && _c !== void 0 ? _c : 5
        });
    },
    button: {
        display: 'flex',
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
        fontSize: 14
    },
    disabled: function (props) { return ({
        background: props.variant === 'contained' ? theme.design.colors.primary100 : '',
        opacity: 0.4,
    }); },
    loading: function (props) { return ({
        background: props.variant === 'contained' ? theme.design.colors.primary100 : '',
        color: props.variant === 'outlined' ? theme.design.colors.primary100 : '',
        borderColor: props.variant == 'outlined' ? theme.design.colors.primary100 : '',
    }); },
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
        background: '#FFFFFF',
        color: theme.design.colors.grey100,
        borderColor: theme.design.colors.primary600,
        borderWidth: 1,
        borderStyle: 'solid',
        textAlign: 'center',
        letterSpacing: 0,
        fontWeight: 600,
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
}); });
export var useButtonIconStyles = makeStyles(function () { return ({
    root: {
        position: 'relative',
        backgroundColor: 'transparent',
        display: 'inline-flex',
        alignSelf: 'center',
        flexShrink: 0
    },
    iconSpacing: function (props) { return ({
        marginRight: "".concat(props.marginRight, "px"),
        marginLeft: "".concat(props.marginLeft, "px"),
    }); }
}); });
export var useButtonSpinnerStyles = makeStyles(function (theme) { return ({
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
}); });
