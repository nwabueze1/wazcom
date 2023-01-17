import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useNotificationStyles = makeStyles((theme: Theme) => ({
    notificationContainer: {
        fontSize: 14,
        boxSizing: 'border-box',
        position: 'fixed',
        zIndex: 999999
    },
    topRight: {
        top: 12,
        right: 12,
        transition: 'transform .6s ease-in-out',
        animation: 'toast-in-right .7s'
    },
    bottomRight: {
        bottom: 12,
        right: 12,
        transition: 'transform .6s ease-in-out',
        animation: 'toast-in-right .7s'
    },
    topLeft: {
        top: 12,
        left: 12,
        transition: 'transform .6s ease-in',
        animation: 'toast-in-left .7s'
    },
    bottomLeft: {
        bottom: 12,
        left: 12,
        transition: 'transform .6s ease-in',
        animation: 'toast-in-left .7s'
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
    }

        .notification - image {
            float: left;
            margin - right: 15px;
}

.notification - image img {
    width: 30px;
    height: 30px;
}

.toast {
    height: 50px;
    width: 365px;
    color: #fff;
    padding: 20px 15px 10px 10px;
}

.notification - container button {
    position: relative;
    right: -.3em;
    top: -.3em;
    float: right;
    font - weight: 700;
    color: #fff;
    outline: none;
    border: none;
    text - shadow: 0 1px 0 #fff;
    opacity: .8;
    line - height: 1;
    font - size: 16px;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0
}

@keyframes toast -in -right {
    from {
        transform: translateX(100 %);

    }

    to {
        transform: translateX(0);
    }
}

@keyframes toast -in -left {
    from {
        transform: translateX(-100 %);

    }

    to {
        transform: translateX(0);
    }
}
}));
