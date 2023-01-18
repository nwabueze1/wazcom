import { FC, useState, useEffect } from 'react';
import clx from "classnames";
import { BsCheckCircle } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { ToastProps, ToastListProps, NotificationIconProps } from './types';
import { useNotificationStyles } from "./style";

export function Notification ({ list, position, autoDelete, duration }: ToastProps) {
    const [toasts, setToasts] = useState(list);
    const classes = useNotificationStyles();

    const _position = position === 'top-right' ? classes.topRight :
        position === 'bottom-right' ? classes.bottomRight :
            position === 'top-left' ? classes.topLeft :
                position === 'bottom-left' ? classes.bottomLeft : ''
        
    useEffect(() => {
        setToasts([...list]);
    }, [list]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete && list.length && toasts.length) {
                onDeleteToast(list[0].id);
            }
        }, duration);

        return () => {
            clearInterval(interval);
        }

    }, [list, autoDelete, duration, toasts]);

    const onDeleteToast = (id: string) => {
        const listItemIndex = toasts.findIndex((e: any) => e.id === id);
        const toastListItem = list.findIndex((e: any) => e.id === id);
        toasts.splice(listItemIndex, 1);
        list.splice(toastListItem, 1);
        setToasts([...toasts]);
    }

    return (
        <>
            <div className={clx(classes.notificationContainer, _position)}>
                {toasts.map((toast: ToastListProps) => (
                    <div
                        key={toast.id}
                        className={clx(classes.root, _position,
                            toast.status === 'success' ? classes.success :
                                toast.status === 'warning' ? classes.warning :
                                    toast.status === 'info' ? classes.info :
                                        toast.status === 'error' ? classes.error : ''
                        )}>
                        <div className={classes.container}>
                            <div className={classes.main}>
                                <div className={classes.header}>
                                    <NotificationIcon status={toast.status} />
                                    <h3 className={classes.title}>{toast.title}</h3>
                                </div>
                                <div className={classes.closeContainer} onClick={() => onDeleteToast(toast.id)}>
                                    <GrFormClose width={24} height={24} />
                                </div>
                            </div>
                            {toast.message && (<div className={classes.message}>{toast.message}</div>)}
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    );
};

const NotificationIcon: FC<NotificationIconProps> = ({ status }) => {
    const classes = useNotificationStyles();

    return (
        <>
            {status === 'success' && <BsCheckCircle className={clx(classes.icon, classes.success)} />}
            {status === 'warning' && <RiErrorWarningLine className={clx(classes.icon, classes.warning)} />}
            {status === 'info' && <AiOutlineInfoCircle className={clx(classes.icon, classes.info)} />}
            {status === 'error' && <AiOutlineInfoCircle className={clx(classes.icon, classes.error)} />}
        </>
    )
};