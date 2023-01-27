import makeStyles from "@mui/styles/makeStyles";
import { BaseTheme } from "theme";

/** !!-- Remember to update the function name !! */
export const useNotificationStyles = makeStyles((theme: BaseTheme) => ({
    root: {
        display: 'flex',
        width: 432,
        minHeight: 52,
        background: theme.design.background.waz_white,
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: 4,
        borderLeftWidth: 5,
        borderLeftStyle: 'solid',
        padding: 15
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    icon: {
        width: 20,
        height: 20,
        opacity: 1
    },
    closeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        borderRadius: '100%',
        backgroundColor: theme.design.colors.primary700,
    },
    main: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    message: {
        color: theme.design.colors.grey100,
        letterSpacing: 0,
        fontSize: 10,
        fontWeight: 'normal',
        padding: '8px 30px',
        textAlign: 'left',
        width: '100%'

    },
    header: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: 10
    },
    title: {
        fontSize: 14,
        fontWeight: 'normal',
        color: theme.design.colors.grey100,
        margin: 0
    },
    success: {
        color: theme.design.colors.primary100,
        borderLeftColor: theme.design.colors.primary100
    },
    error: {
        color: theme.design.colors.error,
        borderLeftColor: theme.design.colors.error
    },
    info: {
        color: theme.design.colors.info,
        borderLeftColor: theme.design.colors.info
    },
    warning: {
        color: theme.design.colors.warning,
        borderLeftColor: theme.design.colors.warning
    },
    notificationContainer: {
        fontSize: 14,
        boxSizing: 'border-box',
        position: 'fixed',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },
    topRight: {
        top: 12,
        right: 12,
        transition: 'transform .6s ease-in-out',
        animation: '$toastInRight .7s'
    },
    bottomRight: {
        bottom: 12,
        right: 12,
        transition: 'transform .6s ease-in-out',
        animation: '$toastInRight .7s'
    },
    topLeft: {
        top: 12,
        left: 12,
        transition: 'transform .6s ease-in',
        animation: '$toastInLeft .7s'
    },
    bottomLeft: {
        bottom: 12,
        left: 12,
        transition: 'transform .6s ease-in',
        animation: '$toastInLeft .7s'
    },
    notification: {
        background: '#FFFFFF',
        transition: '.3s ease',
        position: 'relative',
        pointerEvents: 'auto',
        overflow: 'hidden',
        margin: '0 0 6px',
        padding: 30,
        marginBottom: 15,
        width: 300,
        maxHeight: 100,
        borderRadius: 3,
        boxShadow: '0 0 10px #999999',
        color: '#000000',
        opacity: .9,
        backgroundPosition: 15,
        backgroundRepeat: 'no-repeat',

        '&:hover': {
            boxShadow: ' 0 0 12px #FFFFFF',
            opacity: 1,
            cursor: 'pointer'
        }
    },
    "@keyframes toastInRight": {
        "from": {
            transform: 'translateX(100%)'
        },
        "to": {
            transform: 'translateX(0)'
        }
    },
    "@keyframes toastInLeft": {
        "from": {
            transform: 'translateX(-100%)'
        },
        "to": {
            transform: 'translateX(0)'
        }
    }
}));

export const useNotifyStyles = makeStyles((theme: BaseTheme) => ({
    notificationContainer: {
        fontSize: 14,
        boxSizing: 'border-box',
        position: 'fixed',
        zIndex: 999999,

        '& button': {
            position: 'relative',
            right: '-.3em',
            top: '-.3em',
            float: 'right',
            fontWeight: 700,
            color: '#FFFFFF',
            outline: 'none',
            border: 'none',
            textShadow: '0 1px 0 #FFFFFF',
            opacity: .8,
            lineHeight: 1,
            fontSize: 16,
            padding: 0,
            cursor: 'pointer',
            background: '0 0',
        }
    },
    topRight: {
        top: 12,
        right: 12,
        transition: 'transform .6s ease-in-out',
        animation: '$toastInRight .7s'
    },
    bottomRight: {
        bottom: 12,
        right: 12,
        transition: 'transform .6s ease-in-out',
        animation: '$toastInRight .7s'
    },
    topLeft: {
        top: 12,
        left: 12,
        transition: 'transform .6s ease-in',
        animation: '$toastInLeft .7s'
    },
    bottomLeft: {
        bottom: 12,
        left: 12,
        transition: 'transform .6s ease-in',
        animation: '$toastInLeft .7s'
    },
    notification: {
        background: '#FFFFFF',
        transition: '.3s ease',
        position: 'relative',
        pointerEvents: 'auto',
        overflow: 'hidden',
        margin: '0 0 6px',
        padding: 30,
        marginBottom: 15,
        width: 300,
        maxHeight: 100,
        borderRadius: 3,
        boxShadow: '0 0 10px #999999',
        color: '#000000',
        opacity: .9,
        backgroundPosition: 15,
        backgroundRepeat: 'no-repeat',

        '&:hover': {
            boxShadow: ' 0 0 12px #FFFFFF',
            opacity: 1,
            cursor: 'pointer'
        }
    },
    notificationTitle: {
        fontWeight: theme.typography.h3.fontWeight,
        fontSize: theme.typography.h3.fontSize,
        textAlign: 'left',
        marginTop: 0,
        marginBottom: 6,
        width: 300,
        height: 18,
    },
    notificationMessage: {
        margin: 0,
        textAlign: 'left',
        height: 18,
        marginLeft: -1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    notificationImage: {
        float: 'left',
        marginRight: 15,

        '&.img': {
            width: 30,
            height: 30
        }
    },
    toast: {
        height: 50,
        width: 365,
        color: theme.design.colors.waz_white,
        padding: '20px 15px 10px 10px'
    },
    "@keyframes toastInRight": {
        "from": {
            transform: 'translateX(100%)'
        },
        "to": {
            transform: 'translateX(0)'
        }
    },
    "@keyframes toastInLeft": {
        "from": {
            transform: 'translateX(-100%)'
        },
        "to": {
            transform: 'translateX(0)'
        }
    }
}));
