import {CommonProps} from '../types';

/** !!-- Remember to update the interface name !! */
export type NotificationProps = CommonProps & {
  back?: string;
  status: string;
  uploadStatus?: string;
  uploadFeedBack?: string;
  statusAlert: string;
}

export type Notification = {
    
  }