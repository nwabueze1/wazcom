import { FC } from "react";
import clx from "classnames";
import { BsCheckCircle }from "react-icons/bs";
import { GrFormClose }from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { useNotificationStyles } from "./style";
import { NotificationProps, NotificationIconProps } from "./types";

export const Notification: FC<NotificationProps> = ({
    className,
    status,
    title,
    message,
    onClose,
}) => {
    const classes = useNotificationStyles({ status });

    return (
        <div className={clx(classes.root, className,
            status === 'success' ? classes.success :
            status === 'warning' ? classes.warning :
            status === 'info' ? classes.info :
            status === 'error' ? classes.error : ''
        )}>
            <div className={classes.container}>
                <div className={classes.main}>
                    <div className={classes.header}>
                        <NotificationIcon status={status} />
                        <h3 className={classes.title}>{title}</h3>
                    </div>
                    <div className={classes.closeContainer} onClick={onClose}>
                        <GrFormClose width={24} height={24} />
                    </div>
                </div>
                {message && (<div className={classes.message}>{message}</div>)}
            </div>
        </div>
    );
};

export const NotificationIcon: FC<NotificationIconProps> = ({ status }) => {
    const classes = useNotificationStyles({ status });

    return (
        <>
            {status === 'success' && <BsCheckCircle className={clx(classes.icon, classes.success)} />}
            {status === 'warning' && <RiErrorWarningLine className={clx(classes.icon, classes.warning)} />}
            {status === 'info' && <AiOutlineInfoCircle className={clx(classes.icon, classes.info)} />}
            {status === 'error' && <AiOutlineInfoCircle className={clx(classes.icon, classes.error)} />}
        </>
    )
};
