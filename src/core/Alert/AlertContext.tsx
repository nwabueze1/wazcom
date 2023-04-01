import { useState, useEffect, createContext, useCallback, useMemo } from 'react'
import clx from "classnames";
import { useAlertStyles } from "./styles";
import { Button } from '../../core';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AlertContextProps, AlertProps, AlertContextProviderProps } from './type';
import { generateUniqueId } from 'helpers';

const defaultDuration = 8000;

export const AlertContext = createContext<AlertContextProps>({
  success: ({ title, position = 'top-right', duration = defaultDuration, message = '' }: Omit<AlertProps, 'status'>) => undefined,
  error: ({ title, position = 'top-right', duration = defaultDuration, message = '' }: Omit<AlertProps, 'status'>) => undefined,
  warning: ({ title, position = 'top-right', duration = defaultDuration, message = '' }: Omit<AlertProps, 'status'>) => undefined,
  info: ({ title, position = 'top-right', duration = defaultDuration, message = '' }: Omit<AlertProps, 'status'>) => undefined
});

export const AlertContextProvider = ({ children }: AlertContextProviderProps) => {
  const classes = useAlertStyles();

  const [value, setValue] = useState<AlertProps & { id: string }>({
    id: '',
    title: '',
    message: '',
    duration: defaultDuration,
    position: 'top-right',
    status: 'success'
  })
  const [toasts, setToasts] = useState<AlertProps & { id: string }[]>([]);

  useEffect(() => {
    let interval: any;

    /* Setting an interval to delete the toast after the duration has passed. */
    if (value.duration > 0 && toasts.length > 0) {
      interval = setInterval(() => {
        if (toasts.length > 0) {
          deleteToast(toasts[0].id);
        }
      }, value.duration);
    }

    return () => {

      /* Clearing the interval when the duration is greater than 0 and the toasts length is greater than 0. */
      if (value.duration > 0 && toasts.length > 0) {
        clearInterval(interval);
      }
    }
  }, [value, toasts]);

  const deleteToast = (id: string) => {
    const toastIndex = toasts.findIndex((item: AlertProps & { id: string }) => item.id === id);
    toasts.splice(toastIndex, 1);
    setToasts([...toasts])

    // if (value.id) {
    //   setValue({
    //     id: '',
    //     title: '',
    //     message: '',
    //     duration: defaultDuration,
    //     position: 'top-right',
    //     status: 'success'
    //   })
    // }
  }

  const memoValue = useMemo(() => {
    const success = ({ title, position = 'top-right', duration = defaultDuration, message = '' }: Omit<AlertProps, 'status'>) => {
      const id = generateUniqueId('success');

      setToasts((prevToasts: AlertProps[] & { id: string }) => [...prevToasts, { id, title, position, message, status: 'success' }])

      setValue({
        ...value,
        id,
        title,
        position,
        status: 'success',
        message,
        duration
      })
    };

    const info = ({ title, position = 'top-right', duration = defaultDuration, message = '' }: Omit<AlertProps, 'status'>) => {
      const id = generateUniqueId('info');

      setToasts((prevToasts: AlertProps[] & { id: string }) => [...prevToasts, { id, title, position, message, status: 'info' }])

      setValue({
        ...value,
        id,
        title,
        position,
        status: 'info',
        message,
        duration
      })
    };

    const warning = ({ title, position = 'top-right', duration = defaultDuration, message = '' }: Omit<AlertProps, 'status'>) => {
      const id = generateUniqueId('warning');

      setToasts((prevToasts: AlertProps[] & { id: string }) => [...prevToasts, { id, title, position, message, status: 'warning' }])

      setValue({
        ...value,
        id,
        title,
        position,
        status: 'warning',
        message,
        duration
      })
    };

    const error = ({ title, position = 'top-right', duration = defaultDuration, message = '' }: Omit<AlertProps, 'status'>) => {
      const id = generateUniqueId('error');

      setToasts((prevToasts: AlertProps[] & { id: string }) => [...prevToasts, { id, title, position, message, status: 'error' }])
      setValue({
        ...value,
        id,
        title,
        position,
        status: 'error',
        message,
        duration
      })
    };

    return { success, error, info, warning }
  }, [toasts, value]);

  console.log('=====> value', value.id)
  console.log('=====> toast', toasts[toasts.length - 1]?.id)

  return (
    <AlertContext.Provider value={memoValue}>
      {children}
      <div className={clx(`${classes.alertContainer}`)}>
        {toasts.map((item: AlertProps & { id: string }, index: number) => (
          <div className={clx(`${classes.alert} ${item.position} ${item.status}`)} key={item.title + item.id}>
            <div className={classes.header}>
              <div className={clx(classes.alertTitle, 'alert__title')}>
                <span className={clx(`${classes.alertIcon} ${item.status}`)}><AiOutlineCheckCircle /></span>
                {item.title}
              </div>
              <Button className={clx(classes.button, 'alert__close-button')} onClick={() => deleteToast(item.id)}>
                <span>&times;</span>
              </Button>
            </div>
            {item.message && (
              <div className={clx(classes.alertMessage, 'alert__message')}>{item.message}</div>
            )}
          </div>
        ))}
      </div>
    </AlertContext.Provider>
  )
}