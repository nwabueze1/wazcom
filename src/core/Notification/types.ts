import React from "react";
import { CommonProps } from "../../types";

/** !!-- Remember to update the interface name !! */
export type NotificationProps = CommonProps & {
    status: string;
    title: string;
    message?: string;
    toastList?: any;
    position?: string;
    autoDelete?: boolean;
    autoDeleteTime?: number;

    onClose?: () => void;
};

export type NotificationIconProps = {
    status: string;
};
