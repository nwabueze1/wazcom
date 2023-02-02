import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.min.css";
import { notifyStatus } from "simple-notify/dist/types";
export declare const notify: (status: notifyStatus, text: string) => Notify;
