import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.min.css";
import { notifyStatus } from "simple-notify/dist/types";

export const notify = (status: notifyStatus, text: string) =>
    new Notify({
        status: status,
        text,
        effect: "fade",
        speed: 300,
        customClass: "",
        customIcon: "",
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 1,
        position: "bottom right",
    });
