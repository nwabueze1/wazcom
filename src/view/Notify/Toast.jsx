import { useState, useEffect } from 'react';
import clx from "classnames";

import { useNotificationStyles } from './styles';

const TOAST_PROPERTIES = [
    {
        id: Math.floor((Math.random() * 101) + 1),
        title: 'Success',
        description: 'This is a success toast component',
        backgroundColor: '#5cb85c',
        icon: 'checkIcon'
    },
];

export const TestNotify = () => {
    const [list, setList] = useState([]);

    const showToast = type => {
        const toastProperties = TOAST_PROPERTIES.find((toast) => toast.title.toLowerCase() === type);
        setList([...list, toastProperties]);
    }


    return (
        <>
            <button onClick={() => showToast('success')}>CLICK</button>
            <Toast
                toastList={list}
                position={'top-right'}
                autoDelete={true}
                autoDeleteTime={3000}
            />
        </>
    );
}

const Toast = ({ toastList, position, autoDelete, autoDeleteTime }) => {
    const [list, setList] = useState(toastList);
    const classes = useNotificationStyles();

    const _position = position === 'top-right' ? classes.topRight :
        position === 'bottom-right' ? classes.bottomRight :
            position === 'top-left' ? classes.topLeft :
                position === 'bottom-left' ? classes.bottomLeft : ''

    useEffect(() => {
        setList([...toastList]);
    }, [toastList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, autoDeleteTime);

        return () => {
            clearInterval(interval);
        }

    }, [toastList, autoDelete, autoDeleteTime, list]);

    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }

    return (
        <>
            <div className={clx(classes.notificationContainer, _position)}>
                {list.map((toast, i) => (
                        <div
                            key={i}
                            className={clx(classes.notification, classes.toast, _position)}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <button onClick={() => deleteToast(toast.id)}>
                                X
                            </button>
                            <div className={classes.notificationImage}>
                                <img src={toast.icon} alt="" />
                            </div>
                            <div>
                                <p className={classes.notificationTitle}>{toast.title}</p>
                                <p className={classes.notificationMessage}>
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
export default Toast;
