import { FC } from "react";

import { Notification } from "core";

import { useNotificationStyles } from "./styles";
import { NotificationProps } from "./types";

export const NotificationView: FC<NotificationProps> = () => {
    const classes = useNotificationStyles();

    return (
        <div className={classes.container}>
            <Notification
                title="Notification"
                status="info"
                message="This is a very important information and requires your immediate attention. Kindly act on it, ASAP."
            />
        </div>
    );
};
