import { FC, useState } from "react";
import clx from "classnames";
import { BsCheckCircle } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Notification } from "../../core";

import { useNotificationStyles } from "./styles";
import { NotificationProps } from "./types";


export const NotificationView: FC<NotificationProps> = () => {
    const classes = useNotificationStyles();
    const [list, setList] = useState<any[]>([]);

    const showToast = () => {
        setList([...list, {
            id: Math.floor((Math.random() * 101) + 1),
            title: 'Success',
            description: 'This is a success toast component',
            status: 'success'
        }]);
    }

    return (
        <>
            <div className={clx(classes.root, classes.success)}>
                <div className={classes.container}>
                    <div className={classes.main}>
                        <div className={classes.header}>
                            {status === 'success' && <BsCheckCircle className={clx(classes.icon, classes.success)} />}
                            {status === 'warning' && <RiErrorWarningLine className={clx(classes.icon, classes.warning)} />}
                            {status === 'info' && <AiOutlineInfoCircle className={clx(classes.icon, classes.info)} />}
                            {status === 'error' && <AiOutlineInfoCircle className={clx(classes.icon, classes.error)} />}
                            <h3 className={classes.title}>{'Success'}</h3>
                        </div>
                        <div className={classes.closeContainer}>
                            <GrFormClose width={24} height={24} />
                        </div>
                    </div>
                    <div className={classes.message}>{'message'}</div>
                </div>
            </div>
            <button onClick={() => showToast()}>CLICK</button>
            <Notification
                status={'success'}
                list={list}
                position={'top-right'}
                autoDelete={true}
                duration={1000}
            />
        </>
    );
};