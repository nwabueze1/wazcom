import React from "react";
import { CommonProps } from "../../types";

/** !!-- Remember to update the interface name !! */
export type NotificationProps = CommonProps & {
    status: string;
    title: string;
    message?: string;
    onClose?: () => void;
};

export type NotificationIconProps = {
    status: string;
};
