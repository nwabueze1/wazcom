import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.min.css";
export var notify = function (status, text) {
    return new Notify({
        status: status,
        text: text,
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
};
