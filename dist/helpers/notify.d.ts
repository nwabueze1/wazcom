import Notify from "simple-notify";
import { notifyStatus } from "simple-notify/dist/types";
export declare const notify: (status: notifyStatus, title: string, text?: string) => Notify;
