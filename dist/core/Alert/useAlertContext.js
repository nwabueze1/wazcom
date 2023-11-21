import { useContext } from "react";
import { AlertContext } from "./AlertContext";
export var useAlertContext = function () {
    var context = useContext(AlertContext);
    return {
        success: context.success,
        error: context.error,
        warning: context.warning,
        info: context.info,
    };
};
