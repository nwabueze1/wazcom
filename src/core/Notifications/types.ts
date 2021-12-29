import {CommonProps} from '../types';

/** !!-- Remember to update the interface name !! */
export type NotificationProps = CommonProps & {
  back?: string;
  status: string;
  title?: string;
  message?: string;
  statusAlert: string;
}
