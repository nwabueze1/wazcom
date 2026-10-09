import { useContext } from "react";
import { AlertContext } from "./AlertContext";

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  return {
    success: context.success,
    error: context.error,
    warning: context.warning,
    info: context.info,
  };
};
