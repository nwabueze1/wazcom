import Notify from "simple-notify";

export const notify = (
  status: "success" | "error" | "warning" | "info",
  title: string,
  text?: string,
) => {
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
