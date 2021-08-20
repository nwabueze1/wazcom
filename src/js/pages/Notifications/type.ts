import {CommonProps} from '../types';

/** !!-- Remember to update the interface name !! */
export type NotificationProps = CommonProps & {
  status: string;
  uploadStatus: string;
  uploadFeedBack?: string;
  statusAlert: string;
}

export type Notification = {
    
  }