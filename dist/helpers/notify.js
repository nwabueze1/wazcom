import Notify from "simple-notify";
export var notify = function (status, title, text) {
    return new Notify({
        status: status,
        title: title,
        text: text,
        effect: "slide",
        speed: 300,
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 3500,
        type: "outline",
        position: "bottom right",
    });
};
