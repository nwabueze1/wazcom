/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, createContext, useMemo } from "react";
import clx from "classnames";
import { useAlertStyles } from "./styles";
import { Button } from "../../core";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AlertContextProps, AlertProps, AlertContextProviderProps, AlertId } from "./type";
import { generateUniqueId } from "../../helpers";
import { createPortal } from "react-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaRegTimesCircle } from "react-icons/fa";

const defaultDuration = 5000;

export const AlertContext = createContext<AlertContextProps>({
  success: (_: Omit<AlertProps, "status">) => undefined,
  error: (_: Omit<AlertProps, "status">) => undefined,
  warning: (_: Omit<AlertProps, "status">) => undefined,
  info: (_: Omit<AlertProps, "status">) => undefined,
});

export const AlertContextProvider = ({ children }: AlertContextProviderProps) => {
  const classes = useAlertStyles();

  const [currentToast, setCurrentToast] = useState<AlertProps & AlertId>({
    id: "",
    title: "",
    message: "",
    duration: defaultDuration,
    position: "top-right",
    status: "success",
  });
  const [toasts, setToasts] = useState([]);

  /* Setting an interval to delete the toast after the duration is over. */
  useEffect(() => {
    let interval: any;

    if ((currentToast.duration as number) > 0 && toasts.length > 0) {
      interval = setInterval(() => {
        if (toasts.length > 0) {
          const id = (toasts[0] as AlertProps & AlertId).id;
          deleteToast(id);
        }
      }, currentToast.duration);
    }

    return () => {
      if ((currentToast.duration as number) > 0 && toasts.length > 0) {
        clearInterval(interval);
      }
    };
  }, [currentToast, toasts]);

  const deleteToast = (id: string) => {
    const newToasts = toasts.filter((item: AlertProps & AlertId) => item.id !== id);
    setToasts(newToasts);
  };

  const memoValue = useMemo(() => {
    const success = ({
      title,
      position = "top-right",
      duration = defaultDuration,
      message = "",
    }: Omit<AlertProps, "status">) => {
      const id = generateUniqueId("success");

      setToasts(
        (toasts) => [...toasts, { id, title, position, message, status: "success" }] as any,
      );

      setCurrentToast({
        ...currentToast,
        id,
        title,
        position,
        status: "success",
        message,
        duration,
      });
    };

    const info = ({
      title,
      position = "top-right",
      duration = defaultDuration,
      message = "",
    }: Omit<AlertProps, "status">) => {
      const id = generateUniqueId("info");

      setToasts((toasts) => [...toasts, { id, title, position, message, status: "info" }] as any);
      setCurrentToast({
        ...currentToast,
        id,
        title,
        position,
        status: "info",
        message,
        duration,
      });
    };

    const warning = ({
      title,
      position = "top-right",
      duration = defaultDuration,
      message = "",
    }: Omit<AlertProps, "status">) => {
      const id = generateUniqueId("warning");

      setToasts(
        (toasts) => [...toasts, { id, title, position, message, status: "warning" }] as any,
      );
      setCurrentToast({
        ...currentToast,
        id,
        title,
        position,
        status: "warning",
        message,
        duration,
      });
    };

    const error = ({
      title,
      position = "top-right",
      duration = defaultDuration,
      message = "",
    }: Omit<AlertProps, "status">) => {
      const id = generateUniqueId("error");

      setToasts((toasts) => [...toasts, { id, title, position, message, status: "error" }] as any);
      setCurrentToast({
        ...currentToast,
        id,
        title,
        position,
        status: "error",
        message,
        duration,
      });
    };

    return { success, error, info, warning };
  }, [currentToast]);

  const renderToastComponent = () => {
    return (
      <>
        {createPortal(
          <div className={clx(`${classes.alertContainer} ${currentToast.position}`)}>
            {toasts.map((item: AlertProps & { id: string }, index: number) => (
              <div
                className={clx(`${classes.alert} ${item.position} ${item.status}`)}
                key={item.title + item.id + index}
              >
                <div className={classes.header}>
                  <div className={clx(classes.alertTitle, "alert__title")}>
                    <span className={clx(`${classes.alertIcon} ${item.status}`)}>
                      {item.status === "success" && <AiOutlineCheckCircle />}
                      {item.status === "warning" && <RiErrorWarningLine />}
                      {item.status === "error" && <FaRegTimesCircle />}
                      {item.status === "info" && <RiErrorWarningLine />}
                    </span>
                    {item.title}
                  </div>
                  <Button
                    className={clx(classes.button, "alert__close-button")}
                    onClick={() => deleteToast(item.id)}
                  >
                    <span>&times;</span>
                  </Button>
                </div>
                {item.message && (
                  <div className={clx(classes.alertMessage, "alert__message")}>{item.message}</div>
                )}
              </div>
            ))}
          </div>,
          document.body,
        )}
      </>
    );
  };

  return (
    <AlertContext.Provider value={memoValue}>
      {children}
      {renderToastComponent()}
    </AlertContext.Provider>
  );
};
