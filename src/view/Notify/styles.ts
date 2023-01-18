import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useNotificationStyles = makeStyles((theme: Theme) => ({
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
        fontWeight: 700,
        fontSize: 16,
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
        color: '#FFFFFF',
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
