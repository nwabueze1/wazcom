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
  status?: string;
};

export type ToastProps = {
  list?: any;
  position?: string;
  autoDelete?: boolean;
  duration?: number;
  className?: string;
  status?: string;
  message?: string;
  title?: string;
};

export type ToastListProps = {
  id: string;
  title?: string;
  description?: string;
  message?: string;
  backgroundColor?: string;
  icon?: string;
  status?: string;
};
